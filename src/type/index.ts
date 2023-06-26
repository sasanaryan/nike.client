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
