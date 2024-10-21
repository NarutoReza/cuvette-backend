const FeesStructure = require('../Model/FeesStructure');

// create fees structure
exports.createFeesStructure = async(req, res) => {
    const data = new FeesStructure({
        name: req.body.name,
        studentFees: req.body.studentFees
    })
    try{
        const searchFees = await FeesStructure.findOne({ name: data.name });
        if(searchFees){
            res.json(`Fees for class ${data.name} already exists. Try to edit or ignore.`);
        }
        else{
            const createFeesStructure = await data.save();
            res.json('Added');
        }
    }
    catch(err){
        res.json(err);
    }
}

// get fees structure list
exports.getFeesStructure = async(req, res) => {
    const name = req.body.name;
    try{
        const getFeesStructure = await FeesStructure.findOne({ name: name })
        if(getFeesStructure){
            res.json(getFeesStructure);
        }
        else{
            res.json(`No fees for class ${name} is present.`);
        }
    }
    catch(err){
        res.json(err);
    }
}

// edit fees structure
exports.editFeesStructure = async(req, res) => {
    try{
        const editFeesStructure = await FeesStructure.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    studentFees: req.body.studentFees
                }
            }
        )

        res.json(editFeesStructure)
    }
    catch(err){
        res.json(err);
    }
}

// delete fees structure
exports.deleteFeesStructure = async(req, res) => {
    try{
        const deleteFeesStructure = await FeesStructure.deleteOne({ _id: req.params.postId })
        res.json(deleteFeesStructure)
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