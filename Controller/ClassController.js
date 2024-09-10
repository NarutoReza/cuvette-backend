const Class = require('../Model/Class');

//create a class
exports.createClass = async(req, res) => {
    const data = new Class({
        name: req.body.name,
        year: req.body.year,
        teacher: req.body.teacher,
        studentFees: req.body.studentFees,
        studentList: req.body.studentList
    });

    try{
        const searchClass = await Class.findOne({ name: data.name, year: data.year });

        if(searchClass) res.json(`Class ${data.name} of year ${data.year} already exists.`);
        else{
            const createClass = await data.save();
            res.json(`Class ${data.name} of year ${data.year} created.`);
        }
    }
    catch(err){
        res.json(err);
    }
}

// get all the classes of an year
exports.getAllClass = async(req, res) => {
    const year = req.body.year;
    try{
        const getAllClass = await Class.find({ year: year });
        res.json(getAllClass);
    }
    catch(err){
        res.json(err);
    }
}

// get one class
exports.getClass = async(req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    try{
        const getClass = await Class.findOne({ name: name, year: year });
        if(getClass) res.json(getClass);
        else res.json(`Class ${name} of year ${year} does not exists`)
    }
    catch(err){
        res.json(err);
    }
}

// get class by teacher id
exports.getClassTeacher = async(req, res) => {
    const teacher = req.body.teacher;
    try{
        const getClassTeacher = await Class.find({ teacher: teacher })
        if(getClassTeacher) res.json(getClassTeacher);
        else res.json(`Teacher Id ${teacher} does not have any class assigned`);
    }
    catch(err){
        res.json(err);
    }
}

// update a class
exports.updateClass = async(req, res) => {
    try{
        const updateClass = await Class.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    name: req.body.name,
                    year: req.body.year,
                    teacher: req.body.teacher,
                    studentFees: req.body.studentFees,
                    studentList: req.body.studentList
                }
            }
        );
        res.json(updateClass);
    }
    catch(err){
        res.json(err);
    }
}

// delete a class
exports.deleteClass = async(req, res) => {
    try{
        const deleteClass = await Class.deleteOne({ _id: req.params.postId });
        res.json(deleteClass);
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