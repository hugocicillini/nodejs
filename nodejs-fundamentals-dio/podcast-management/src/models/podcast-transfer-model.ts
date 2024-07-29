import { PodcastModel } from "./interface-model"

export interface PodcastTransferModel {
  statusCode: number
  body: PodcastModel[]
}