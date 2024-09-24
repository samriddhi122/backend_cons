import Score from '../models/score.model.js';

export const addScore = async (req, res) => {
  try {
    const { username, quizId, score } = req.body;
    const newScore = new Score({ username, quizId, score });
    await newScore.save();
    res.status(201).send('Score added!');
  } catch (error) {
    res.status(500).send('Error adding score');
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const {quizId}=req.body;
    if(!quizId){
      throw new Error("quizId is required ");
      
    }

    const scores = await Score.find({"quizId":quizId}).sort({ score: -1 }).limit(10);
    res.status(200).json(scores);
  } catch (error) {
    console.log(error);
    
    res.status(500).send('Error fetching leaderboard');
  }
};

export const updateScore = async(req,res)=>{
  try {
    const {scoreId,score}=req.body;
    if(!scoreId){
      throw new Error("quizId is required ");
    }
    if(!score){
      throw new Error("score is required ");
    }
    const updatedData = {
      score
    }
    const updatedScore = await Score.findByIdAndUpdate(
      scoreId,
      updatedData,
      {
        new: true,
      });

      res.status(200).json(updatedScore);
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching leaderboard');
  }
}

export const getScore= async(req,res)=>{
  try {
    const {scoreId}=req.body;
    if(!scoreId){
      throw new Error("quizId is required ");
    };
  
    const score = await Score.findById(scoreId);
    res.status(200).json(score);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching leaderboard');
  }
}
