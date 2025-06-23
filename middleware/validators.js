import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('email')
    .isEmail()
    .withMessage('A valid email is required'),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateTask = [
  body('taskName')
    .notEmpty()
    .withMessage('Task name is required'),

  body('dueDate')
    .notEmpty()
    .withMessage('Due date is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
