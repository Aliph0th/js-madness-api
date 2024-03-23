import { body } from 'express-validator';
import {
   ALLOW_MISSING_PROPERTY,
   FORBIDDEN_WORDS,
   MESSAGES,
   PAYLOAD_PROPERTY
} from '../constants';

export const generationValidators = [
   body(PAYLOAD_PROPERTY, MESSAGES.WRONG_PAYLOAD_ENCODE).custom(value => {
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

export const decodingValidators = [
   body(PAYLOAD_PROPERTY, MESSAGES.WRONG_PAYLOAD_DECODE)
      .isString()
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .notEmpty({ ignore_whitespace: true })
      .custom((value: string) => {
         for (const word of FORBIDDEN_WORDS) {
            if (value.toLowerCase().includes(word.toLowerCase())) {
               throw new Error(MESSAGES.FORBIDDEN_WORD + word);
            }
         }
         return true;
      })
];
