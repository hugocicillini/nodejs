import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string): Promise<PodcastTransferModel> => {
  let filterEpisodes: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }
  const queryString = podcastName?.split('?p=')[1] || ''
  const data = await repositoryPodcast(queryString)

  filterEpisodes.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT

  filterEpisodes.body = data

  return filterEpisodes
}