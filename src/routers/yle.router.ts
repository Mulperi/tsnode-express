import * as express from 'express';
import YleService from '../services/yle.service';
const yleService = new YleService();
const yle: express.Router = express.Router();

yle.get('/', (req: express.Request, res: express.Response) => {
  console.log('GET: yle');
  let articles = [];
  yleService.getNews().subscribe(
    article => {
      articles.push(article);
    },
    error => {
      console.log(error);
    },
    () => res.json(articles)
  );
});

export default yle;
