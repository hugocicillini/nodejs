import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const baseUrl = req.url?.split('?')[0] ?? [];
  console.log({ baseUrl });

  if (req.method === HttpMethods.GET && baseUrl === Routes.ListEpisodes) {
    await getListEpisodes(req, res);
  }

  if (req.method === HttpMethods.GET && baseUrl === Routes.FilterEpisodes) {
    await getFilterEpisodes(req, res);
  }
}