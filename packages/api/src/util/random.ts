import crypto from 'crypto';

export default {
  string(size: number) {
    return crypto.randomBytes(size).toString('hex');
  },
};
