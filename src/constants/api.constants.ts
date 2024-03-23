/* eslint-disable @typescript-eslint/naming-convention */
export const BASE_ENDPOINT = '/sequence';

export const ENDPOINTS = {
   GENERATE: '/',
   EVALUATE: '/eval'
};
export const MESSAGES = {
   WRONG_PAYLOAD: 'Payload must be string or number',
   WRONG_ALLOW_PARAMETER: 'Allow parameter must be boolean or undefined'
};
export const HTTP = {
   OK: 200,
   CREATED: 201,
   INVALID: 400,
   TEAPOT: 418
};

export const PAYLOAD_PROPERTY = 'payload';
export const ALLOW_MISSING_PROPERTY = 'allow';
