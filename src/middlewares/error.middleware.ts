import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { HTTP } from '../constants';

export const errorMiddleware: RequestHandler = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(HTTP.INVALID).json({ errors: errors.array() });
   }
   next();
};
