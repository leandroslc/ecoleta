import multer, { Options } from 'multer';
import path from 'path';
import { env } from '@ecoleta/core';
import constants from './constants';
import random from '../util/random';

let destination: string | undefined;

if (env.isTesting()) {
  destination = undefined;
} else {
  destination = path.resolve(
    __dirname,
    '..',
    '..',
    constants.UploadPointsImagesPath,
  );
}

export default <Options>{
  storage: multer.diskStorage({
    destination,
    filename(_request, file, callback) {
      const hash = random.string(12);
      const extension = path.extname(file.originalname);

      callback(null, `${hash}${extension}`);
    },
  }),
};
