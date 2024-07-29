import { IncomingMessage, ServerResponse } from 'http'
import { serviceFilterEpisodes } from '../services/filter-episodes'
import { serviceListEpisodes } from '../services/list-episodes'
import { StatusCode } from '../utils/status-code'

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(StatusCode.OK, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(await serviceListEpisodes()))
  res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(StatusCode.OK, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(await serviceFilterEpisodes(req.url as string)))
  res.end()
}