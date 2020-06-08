import { Request } from 'express';
import url from 'url';
import constants from '../config/constants';

export default {
  resolve(request: Request, path: string) {
    const port = constants.Port;

    return url.format({
      protocol: request.protocol,
      hostname: request.hostname,
      port: port !== 80 ? port : undefined,
      pathname: path,
    });
  },
};
