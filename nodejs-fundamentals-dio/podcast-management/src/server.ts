import * as http from 'http';
import { app } from './app';

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}`);
});