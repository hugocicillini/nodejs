import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/interface-model';

const pathData = path.join(__dirname, '..', 'repositories', 'podcasts.json');

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
  const rawData = fs.readFileSync(pathData, 'utf8');

  if (podcastName) {
    return JSON.parse(rawData).filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
  }

  return JSON.parse(rawData);
}