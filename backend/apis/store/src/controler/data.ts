import Router from 'express';
import { Request, Response } from 'express';
import { handleObject, Result } from '../model/Common';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  // const result: Result = await handleObject(req.body);
  res.send(false);
});

export { router as data };
