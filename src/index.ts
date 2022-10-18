import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello From NodeJS");
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App is listening on ${port}`);
});
