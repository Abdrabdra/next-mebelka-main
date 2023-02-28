export interface IGetCategoryResponse {
  data: ICategory[];
  count: number;
}

export interface ICategory {
  id: number;
  title: string;
  icon: string;
}
