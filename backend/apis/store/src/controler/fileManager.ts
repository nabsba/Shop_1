import Router from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { resultTemplate } from '../model/repos';
import fs from 'fs';
import { getExtensionOfFile } from '../model/service/fileSystem/logic/function';
import { logMessage } from '../model/service/Common/logic/functions/function';
const router = Router();

router.get(
  '/image/product/:type/:sizePic/:colorFolder/:nameProduct/:namePic',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { type, colorFolder, nameProduct, namePic, sizePic } = req.params;
      const pathFile = path.join(
        __dirname +
          `../../../../../asset/image/product/${type}/${sizePic}/${colorFolder}/${nameProduct}/`,
      );
      const extension = getExtensionOfFile(pathFile, namePic);
      res.sendFile(pathFile + namePic + `.${extension}`);
    } catch (error) {
      logMessage(
        JSON.stringify(
          `/image/product/:type/:sizePic/:colorFolder/:nameProduct/:namePic, error: -> ${error}`,
        ),
      );
      res.send(false);
    }
  },
);

router.get(
  '/image/product/:type/:sizePic/general/:namePic',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { type, namePic, sizePic } = req.params;
      const pathFile = path.join(
        __dirname + `../../../../../asset/image/product/${type}/${sizePic}/general/`,
      );
      const extension = getExtensionOfFile(pathFile, namePic);
      res.sendFile(pathFile + namePic + `.${extension}`);
    } catch (error) {
      logMessage(
        `fileManager/get/image/product/:type/:sizePick/general/:namePic -> error: ${error}`,
      );
      res.send(false);
    }
  },
);
router.get(
  '/numberOfPic/:type/:sizePic/:colorFolder/:nameProduct',
  async (req: Request, res: Response): Promise<void> => {
    try {
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
    } catch (error) {
      logMessage(`/numberOfPic/:type/:sizePic/:colorFolder/:nameProduct -> error: ${error}`);
      res.send(false);
    }
  },
);

export { router as fileManager };
