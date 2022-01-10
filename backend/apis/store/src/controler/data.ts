import Router from 'express';
import { Request, Response } from 'express';
import { Result } from '../model/Common';
import { handleGetData, handlePostData } from '../model/service';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
  const result: Result = await handlePostData(req.body);
  console.log(result);
  res.send(result);
});

router.get('/:type/:id', async (req: Request, res: Response): Promise<void> => {
  const { type, id } = req.params;
  const result: Result = await handleGetData(type, id);
  res.send(result);
});

export { router as data };
