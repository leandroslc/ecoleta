import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';
import multerConfig from '../config/multer';
import { CollectionPointsController } from '../controllers';

const CommaSeparatedNumbersRegex = /^[\d\\,\s]+$/;
const PhoneNumberRegex = /^[\w\-+.\s\\(\\)\w]+$/;

const routes = Router();
const upload = multer(multerConfig);
const pointsController = new CollectionPointsController();

const validation = {
  show: celebrate({
    query: Joi.object().keys({
      city: Joi.string(),
      state: Joi.string(),
      items: Joi.string().regex(CommaSeparatedNumbersRegex),
    }),
  }),
  create: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().regex(PhoneNumberRegex),
      city: Joi.string().required(),
      state: Joi.string().required().max(2),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      items: Joi.string().regex(CommaSeparatedNumbersRegex),
    }),
  }),
};

routes.get('/', pointsController.index);
routes.get('/:id', validation.show, pointsController.show);
routes.post(
  '/',
  upload.single('image'),
  validation.create,
  pointsController.create,
);

export default routes;
