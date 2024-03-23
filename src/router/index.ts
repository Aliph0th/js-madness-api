import { Router } from 'express';
import {
   ALLOW_MISSING_PROPERTY,
   FILTER_REGEX,
   HTTP,
   PAYLOAD_PROPERTY
} from '../constants';
import {
   errorMiddleware,
   generationValidators as encodingValidators,
   decodingValidators
} from '../middlewares';
import { generateSequence } from '../helpers';

const router = Router();

router.post('/', ...encodingValidators, errorMiddleware(HTTP.INVALID), (req, res) => {
   const payload: string = req.body[PAYLOAD_PROPERTY].toString();
   const allowMissing: boolean = req.body[ALLOW_MISSING_PROPERTY];
   const text = allowMissing ? payload : payload.replace(FILTER_REGEX, '');
   res.status(HTTP.OK).json({ encoded: generateSequence(text) });
});

router.get('/', ...decodingValidators, errorMiddleware(HTTP.TEAPOT), (req, res) => {
   let response: object;
   try {
      response = { decoded: eval(req.body[PAYLOAD_PROPERTY]) };
   } catch (error) {
      response = { evaluationError: (error as Error).message };
   }
   res.status(HTTP.OK).json(response);
});

export default router;
