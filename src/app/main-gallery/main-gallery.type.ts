export interface Gallery {
    id: string
    name: string
    description: string
    createdAt: Date;
    updatedAt: Date;
    date: Date
}

export interface Image {
  id: string
  name: string
  key: string
  GalleryId: string
  description: string
  createdAt: Date;
  updatedAt: Date;
  TagId: string;
  orientation: string
}

export interface GetGallery {
  data?
}
export interface GalleryPagination
{
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}
