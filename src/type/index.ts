export interface FetchedProduct {
  _id: string;
  title: string;
  desc: string;
  img: string[];
  categories: string;
  gender: string;
  price: number;
  existedSize: number[];
  createdAt?: Date;
}

export interface UserRedux {
  _id?: string;
  username: string;
  email?: string;
  favorites?: string[];
  accessToken?: string;
}

export interface CatItem {
  id: number;
  message: string;
  img: string;
  title: string;
  cat: string;
}
