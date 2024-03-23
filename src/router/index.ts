import { Router } from 'express';
import {
   ALLOW_MISSING_PROPERTY,
   ENDPOINTS,
   FILTER_REGEX,
   HTTP,
   PAYLOAD_PROPERTY
} from '../constants';
import { errorMiddleware, generationValidators } from '../middlewares';
import { generateSequence } from '../helpers';

const router = Router();

router.post(ENDPOINTS.GENERATE, ...generationValidators, errorMiddleware, (req, res) => {
   const payload: string = req.body[PAYLOAD_PROPERTY].toString();
   const allowMissing: boolean = req.body[ALLOW_MISSING_PROPERTY];
   const text = allowMissing ? payload : payload.replace(FILTER_REGEX, '');
   res.status(HTTP.OK).json({ encoded: generateSequence(text) });
});

export default router;
