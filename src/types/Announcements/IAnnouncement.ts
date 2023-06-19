export interface IAnnouncementsResponse {
  data: IAnnouncement[];
  count: number;
}

export interface IAnnouncement {
  id: number;
  title: string;
  price: number;
  discount: number;
  status: IAnnouncementStatus;
  images: [
    {
      id: number;
      imageUrl: string;
    }
  ];
}

export interface IAnnouncementStatus {
  id: number;
  avg: number;
  commentCount: number;
}
