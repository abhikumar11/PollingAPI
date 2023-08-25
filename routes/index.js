const express = require("express");
const{createQuestion,deleteQuestion,getQuestionDetails}= require("../controllers/QuestionController");
const{addOption,deleteOption,incrementVotes}= require("../controllers/OptionController");

const router = express.Router();

router.post("/questions/create",createQuestion);
router.post("/questions/:id/options/create",addOption);
router.get("/questions/:id/delete",deleteQuestion);
router.get("/options/:id/delete",deleteOption);
router.get("/options/:id/add_vote",incrementVotes);
router.get("/questions/:id",getQuestionDetails);
module.exports = router;