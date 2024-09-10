const Teacher = require('../Model/Teacher');

// add a teacher
exports.addTeacher = async(req, res) => {
    const data = new Teacher({
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        permanentAddressStreetName: req.body.permanentAddressStreetName,
        permanentAddressCity: req.body.permanentAddressCity,
        permanentAddressState: req.body.permanentAddressState,
        permanentAddressPinCode: req.body.permanentAddressPinCode,
        permanentAddressCountry: req.body.permanentAddressCountry,
        correspondenceAddressStreetName: req.body.correspondenceAddressStreetName,
        correspondenceAddressCity: req.body.correspondenceAddressCity,
        correspondenceAddressState: req.body.correspondenceAddressState,
        correspondenceAddressPinCode: req.body.correspondenceAddressPinCode,
        correspondenceAddressCountry: req.body.correspondenceAddressCountry,
        mobile: req.body.mobile,
        mobile2: req.body.mobile2,
        email: req.body.email,
        salary: req.body.salary,
        assignedClass: req.body.assignedClass,
        assignedClassYear: req.body.assignedClassYear
    });
    try{
        const searchTeacher = await Teacher.findOne({ name: data.name, dob: data.dob });

        if(searchTeacher) res.json(`Teacher with ${data.name} and ${data.dob} already exists.`);
        else{
            const addTeacher = await data.save();
            res.json(`Teacher with ${data.name} and ${data.dob} added.`)
        }
    }
    catch(err){
        res.json(err);
    }
}

// get all teachers
exports.getAllTeachers = async(req, res) => {try{
        const getAllTeachers = await Teacher.find();
        res.json(getAllTeachers);
    }
    catch(err){
        res.json(err);
    }
}

// get a teacher
exports.getTeacherByClass = async(req, res) => {
    const assignedClass = req.body.assignedClass;
    const assignedClassYear = req.body.assignedClassYear;

    try{
        const getTeacherByClass = await Teacher.find({ assignedClass: assignedClass, assignedClassYear: assignedClassYear });
        res.json(getTeacherByClass);
    }
    catch(err){
        res.json(err);
    }
}

//update a teacher
exports.updateTeacher = async(req, res) => {
    try{
        const updateTeacher = await Teacher.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    name: req.body.name,
                    gender: req.body.gender,
                    dob: req.body.dob,
                    permanentAddressStreetName: req.body.permanentAddressStreetName,
                    permanentAddressCity: req.body.permanentAddressCity,
                    permanentAddressState: req.body.permanentAddressState,
                    permanentAddressPinCode: req.body.permanentAddressPinCode,
                    permanentAddressCountry: req.body.permanentAddressCountry,
                    correspondenceAddressStreetName: req.body.correspondenceAddressStreetName,
                    correspondenceAddressCity: req.body.correspondenceAddressCity,
                    correspondenceAddressState: req.body.correspondenceAddressState,
                    correspondenceAddressPinCode: req.body.correspondenceAddressPinCode,
                    correspondenceAddressCountry: req.body.correspondenceAddressCountry,
                    mobile: req.body.mobile,
                    mobile2: req.body.mobile2,
                    email: req.body.email,
                    salary: req.body.salary,
                    assignedClass: req.body.assignedClass,
                    assignedClassYear: req.body.assignedClassYear
                }
            }
        );
        res.json(updateTeacher);
    }
    catch(err){
        res.json(err);
    }
}

// delete a teacher
exports.deleteTeacher = async(req, res) => {
    try{
        const deleteTeacher = await Teacher.deleteOne({ _id: req.params.postId });
        res.json(deleteTeacher);
    }
    catch(err){
        res.json(err);
    }
}


// = async(req, res) => {
//     try{
        
//     }
//     catch(err){
//         res.json(err);
//     }
// }