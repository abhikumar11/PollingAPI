const Option=require('../models/option');
const Question=require('../models/question');

module.exports.addOption=async function(req,res){
    try {
        const question = await Question.findById(req.params.id);
        for(let option of req.body.options){
            const currentoption = await Option.create({text:option});
            currentoption.link_to_vote="https://"+req.headers.host+"/options/"+currentoption.id+"/add_vote";
            currentoption.save();
            question.options.push(currentoption.id);
            question.save();
        }
        return res.status(200).json({
          message: "option added succesfully",
        });
    } catch (err) {
        return res.status(465).json({
            message: "internal server error",
            error: err.message,
          });
    }
}
module.exports.deleteOption=async function(req,res){
    try {
        const option = await Option.findById(req.params.id);
        if (option.votes > 0) {
          return res.status(401).json({
            message: "You cannot delete that vote",
          });
        }
        await Question.updateOne(
            { options: { $in: req.params.id } },
            { $pull: { options: { $eq: req.params.id } } }
          );
          
          await option.remove();
          return res.status(200).json({
            message: "option deleted succesfully",
          });
    } catch (error) {
        return res.status(465).json({
            message: "internal server error",
            error: err.message,
          });
    }
}
module.exports.incrementVotes = async function (req, res) {
    try {
      const option = await Option.findById(req.params.id);
      option.votes += 1;
      await option.save();
      return res.status(200).json({
        message: "vote added",
        votes: option.votes,
      });
    } catch (err) {
      res.status(465).json({
        message: "could not increment the count",
        err: "internal server error",
      });
    }
  };