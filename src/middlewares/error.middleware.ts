import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

export const errorMiddleware =
   (status: number): RequestHandler =>
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(status).json({ errors: errors.array() });
      }
      next();
   };
