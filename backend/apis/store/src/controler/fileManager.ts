import Router from 'express';
import { Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get(
  '/image/product/:type/:sizePic/:colorFolder/:nameProduct/:namePic',
  async (req: Request, res: Response): Promise<void> => {
    const { type, colorFolder, nameProduct, namePic, sizePic } = req.params;
    res.sendFile(
      path.join(
        __dirname +
          `../../../../../asset/image/product/${type}/${sizePic}/${colorFolder}/${nameProduct}/${namePic}`,
      ),
    );
  },
);

router.get(
  '/image/product/:type/:sizePic/general/:namePic',
  async (req: Request, res: Response): Promise<void> => {
    const { type, namePic, sizePic } = req.params;
    res.sendFile(
      path.join(
        __dirname + `../../../../../asset/image/product/${type}/${sizePic}/general/${namePic}`,
      ),
    );
  },
);

export { router as fileManager };
