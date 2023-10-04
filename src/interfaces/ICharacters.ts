interface IComicsItem {
  resourceURI: string;
  name: string;
}

interface IStoriesItem extends IComicsItem {
  type: string;
}

interface IUrl {
  type: string;
  url: string;
}

export interface ICharacters {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: IComicsItem[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: IComicsItem[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: IStoriesItem[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: IComicsItem[];
    returned: number;
  };
  urls: IUrl[];
}
