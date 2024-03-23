import {
   COMPLEX_TOKENS_FILTER,
   DISALLOWED_REGEX,
   TOKENS_MAP
} from '../constants/generation.constants';

export const escaped = (string: string) => {
   return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
};
const tokenize = (text: string) => {
   const tokens = [];
   while (text) {
      let wasDetected = false;
      COMPLEX_TOKENS_FILTER.forEach(regex => {
         const match = text.match(regex)?.[0];
         if (match && !wasDetected) {
            tokens.push(match);
            text = text.slice(match.length);
            wasDetected = true;
         }
      });
      if (wasDetected) {
         continue;
      }
      const disallowed = text.match(DISALLOWED_REGEX)?.[0];
      if (disallowed) {
         tokens.push(disallowed);
         text = text.slice(disallowed.length);
      } else {
         tokens.push(text[0]);
         text = text.slice(1);
      }
   }
   return tokens;
};
export const generateSequence = (text: string) => {
   const tokens = tokenize(text);
   return tokens.map(token => TOKENS_MAP[token] || `'${token}'`).join('+');
};
