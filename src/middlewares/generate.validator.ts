import { body } from 'express-validator';
import { ALLOW_MISSING_PROPERTY, MESSAGES, PAYLOAD_PROPERTY } from '../constants';

export const generationValidators = [
   body(PAYLOAD_PROPERTY, MESSAGES.WRONG_PAYLOAD).custom(value => {
      if (typeof value === 'number') {
         return true;
      }
      if (typeof value === 'string' && value.length > 0) {
         return true;
      }
      return false;
   }),
   body(ALLOW_MISSING_PROPERTY, MESSAGES.WRONG_ALLOW_PARAMETER).optional().isBoolean()
];
