import * as cors from 'cors';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import helmet from 'helmet';

import { config } from './config';
import { serviceRouter, serviceTypeRouter } from './routes';

class App {
  public readonly app: express.Application = express();

  constructor() {
    // TODO fileUpload
    this.app.use(cors(this.configureCors));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(helmet());
    this.app.use(morgan('dev'));

    this.mountRoutes();
    this.setupDB()

    this.app.use(this.mainErrorHandler);
  }

  private configureCors(origin: any, callback: any) {
    const whiteList = config.ALLOWED_ORIGIN.split(';');
    // TODO RequestExtended;
    // TODO fix
    return callback(null, true);

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

  private mountRoutes(): void {
    this.app.use('/services', serviceRouter);
    this.app.use('/service-types', serviceTypeRouter);
  }

  private mainErrorHandler(err: Error | any, req: Request, res: Response, next: NextFunction) {
    res
      .status(err.status | 500)
      .json({
        message: err.message || 'Server error'
      })
  }
}

export const app = new App().app;


