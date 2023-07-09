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
  refreshToken?: string;
}
export interface UserPayloadAction {
  _id?: string;
  username: string;
  email?: string;
  favorites?: string[];
  accessToken?: string;
  refreshToken?: string;
}
export interface CatItem {
  id: number;
  message: string;
  img: string;
  title: string;
  cat: string;
}

export interface CartProduct {
  _id: string;
  title: string;
  desc: string;
  img: string[];
  categories: string;
  gender: string;
  price: number;
  quality: string;
  selectedSize: string;
  existedSize: number[];
  orderedProductId: string;
}

export interface FilterProducts {
  gender?: string;
  range?: number[];
  cat?: string;
  sort?: string;
  searchWord?: string;
}

export interface OrderedProduct {
  _id: string;
  userId: string;
  productId: string;
  productImg: string;
  productName: string;
  productSize: string;
  productPrice: number;
  createdAt: Date;
}

export interface userRegister {
  username: string;
  email: string;
  password: string;
}
export interface userLogin {
  username: string;
  password: string;
}
