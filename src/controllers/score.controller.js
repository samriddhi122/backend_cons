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
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).send('Error fetching leaderboard');
  }
};
