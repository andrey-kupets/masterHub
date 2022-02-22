import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';
import helmet from 'helmet';
import { config } from "./config";

class App {
  public readonly app: express.Application = express();

  constructor() {
    // TODO helmet, cors, fileUpload
    this.app.use(cors(this.configureCors));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(helmet());

    this.setupDB();
  }

  //    TODO setup DB
  private configureCors(origin: any, callback: any) {
    const whiteList = config.ALLOWED_ORIGIN.split(';');

    if (!origin) {
      return callback(null, true);
    }

    if (!whiteList.includes(origin)) {
      callback(new Error('Cors not allowed'), false);
    }

    return callback(null, true);
  }

  private setupDB() {
    mongoose.connect(config.MONGO_URI);
    const db = mongoose.connection;

    db.on('error', () => {
      console.log('DB ERROR');
    })
  }
}

export const app = new App().app;


