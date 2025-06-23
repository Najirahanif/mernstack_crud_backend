
import User from '../model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const create = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'Email Already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    res.status(200).json({ message: 'User added Successfully' });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(401).json({ message: 'Incorrect email' });
  }

  const isMatch = await bcrypt.compare(password, userExist.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  const token = jwt.sign(
    { userId: userExist._id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.status(200).json({ token });
};

