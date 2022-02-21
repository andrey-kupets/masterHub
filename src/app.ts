import * as express from 'express';
import { options } from "joi";

class App {
  public readonly app: express.Application = express();

  constructor() {
    // TODO helmet, cors, fileUpload

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
  }

  //    TODO setup DB
}

export const app = new App().app;


