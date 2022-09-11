import { Router, Response, Request } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const data = 'teste';

  res.status(201).send(data);
});