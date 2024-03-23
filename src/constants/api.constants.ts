/* eslint-disable @typescript-eslint/naming-convention */
export const BASE_ENDPOINT = '/sequence';

export const MESSAGES = {
   WRONG_PAYLOAD_ENCODE: 'Payload must be a string or a number',
   WRONG_PAYLOAD_DECODE: 'Payload must be a not empty string',
   WRONG_ALLOW_PARAMETER: 'Allow parameter must be a boolean or an undefined',
   FORBIDDEN_WORD: 'Payload should not contain words such as '
};
export const HTTP = {
   OK: 200,
   INVALID: 400,
   TEAPOT: 418
};

export const PAYLOAD_PROPERTY = 'payload';
export const ALLOW_MISSING_PROPERTY = 'allow';
