import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async () : Promise<PodcastTransferModel> => {
  let listEpisodes: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }

  const data = await repositoryPodcast()

  listEpisodes.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT

  listEpisodes.body = data

  return listEpisodes
}