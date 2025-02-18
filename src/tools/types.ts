import { OptionValues } from '../components/modules/modules';

export interface Settings {
  searchUrl: string;
}

export interface Config {
  name: string;
  services: serviceItem[];
  settings: Settings;
  modules: {
    [key: string]: ConfigModule;
  };
}

interface ConfigModule {
  title: string;
  enabled: boolean;
  options: {
    [key: string]: OptionValues;
  };
}

export const ServiceTypeList = [
  'Other',
  'Emby',
  'Deluge',
  'Lidarr',
  'Plex',
  'Radarr',
  'Readarr',
  'Sonarr',
  'qBittorrent',
];
export type ServiceType =
  | 'Other'
  | 'Emby'
  | 'Deluge'
  | 'Lidarr'
  | 'Plex'
  | 'Radarr'
  | 'Readarr'
  | 'Sonarr'
  | 'qBittorrent';

export interface serviceItem {
  id: string;
  name: string;
  type: string;
  url: string;
  icon: string;
  category?: string;
  apiKey?: string;
  password?: string;
  username?: string;
}
