import {Router} from 'express';
import {Dog} from '../models/dogmodel';

export const dogs = Router();

dogs.get('/', (req, res, next) => {
    Dog
     .findAll()
     .then((data) => {
      return res.json(data);
      })
     .catch((err) => {
       console.log(err);
       return err;
      });
   });
