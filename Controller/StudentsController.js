const Students = require('../Model/Students');

// add a student
exports.addStudent = async(req, res) => {
    const data = new Students({
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
        feesPaid: req.body.feesPaid,
        class: req.body.class,
        classYear: req.body.classYear,
        rollNo: req.body.rollNo
    })
    try{
        const searchStudent = await Students.findOne({ name: data.name, dob: data.dob, class: data.class, classYear: data.classYear });
        if(searchStudent) res.json(`Student with name: '${data.name}' and dob: '${data.dob}' in class ${data.class} of year ${data.classYear} already exists`);
        else{
            const addStudent = await data.save();
            res.json(`Student with name: '${data.name}' and dob: '${data.dob}' added in class ${data.class} of year ${data.classYear}.`)
        }
    }
    catch(err){
        res.json(err);
    }
}

// get a student by class
exports.getAStudentByClass = async(req, res) => {
    const name = req.body.name;
    const dob = req.body.dob;
    const className = req.body.className;
    const classYear = req.body.classYear;

    try{
        const getAStudentByClass = await Students.findOne({ name: name, dob: dob, class: className, classYear: classYear });
        if(getAStudentByClass) res.json(getAStudentByClass);
        else res.json('No student found!');
    }
    catch(err){
        res.json(err);
    }
}

// get all student by class
exports.getAllStudentByClass = async(req, res) => {
    const className = req.body.className;
    const classYear = req.body.classYear;

    try{
        const getAllStudentByClass = await Students.find({ class: className, classYear: classYear });
        if(getAllStudentByClass) res.json(getAllStudentByClass);
        else res.json('No student found!');
    }
    catch(err){
        res.json(err);
    }
}

// get all students
exports.getAllStudents = async(req, res) => {
    try{
        const getAllStudents = await Students.find();
        if(getAllStudents) res.json(getAllStudents);
        else res.json('No student found!');
    }
    catch(err){
        res.json(err);
    }
}

// update a student
exports.updateAStudent = async(req, res) => {
    try{
        const updateAStudent = await Students.updateOne(
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
                    feesPaid: req.body.feesPaid,
                    class: req.body.class,
                    classYear: req.body.classYear,
                    rollNo: req.body.rollNo
                }
            }
        );
        res.json(updateAStudent);
    }
    catch(err){
        res.json(err);
    }
}

// delete a student 
exports.deleteAStudent = async(req, res) => {
    try{
        const deleteAStudent = await Students.deleteOne({ _id: req.params.postId });
        res.json(deleteAStudent);
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