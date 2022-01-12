import Router from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { resultTemplate } from '../model/repos';

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
router.get(
  '/numberOfPic/:type/:sizePic/:colorFolder/:nameProduct',
  async (req: Request, res: Response): Promise<void> => {
    const { type, colorFolder, nameProduct, sizePic } = req.params;
    const result = { ...resultTemplate };
    const fs = require('fs');
    const length = fs.readdirSync(
      path.join(
        __dirname +
          `../../../../../asset/image/product/${type}/${sizePic}/${colorFolder}/${nameProduct}`,
      ),
    ).length;
    result.data = { length };
    res.send(result);

    // res.send(length);
  },
);

export { router as fileManager };
