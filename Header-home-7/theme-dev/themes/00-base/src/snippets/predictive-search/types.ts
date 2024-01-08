export interface ResultTemplateRctData {
  products: IProduct[];
  articles: IArticle[];
  pages: IPage[];
  collections: ICollection[];
  isLoading: boolean;
  canLoadMore: boolean;
  searchQuery: string;
}

export interface IProduct {
  available: boolean;
  body: string;
  compare_at_price_max: string;
  compare_at_price_min: string;
  handle: string;
  id: number;
  image: string;
  price: string;
  price_max: string;
  price_min: string;
  tags: string[];
  title: string;
  type: string;
  url: string;
  variants: Variant[];
  vendor: string;
  featured_image: FeaturedImage;
}

export interface Variant {
  available: boolean;
  compare_at_price: any;
  id: number;
  image?: string;
  price: string;
  title: string;
  url: string;
  featured_image: FeaturedImage;
}

export interface FeaturedImage {
  alt: string;
  aspect_ratio: number;
  height: number;
  url: string;
  width: number;
}

export interface IArticle {
  author: string;
  body: string;
  handle: string;
  id: number;
  image: string;
  published_at: string;
  summary_html: string;
  tags: string[];
  title: string;
  url: string;
  featured_image: FeaturedImage;
}

export interface IPage {
  author: any;
  body?: string;
  handle: string;
  id: number;
  published_at: number;
  title: string;
  url: string;
}

export interface ICollection {
  id: number;
  body?: string;
  handle: string;
  published_at: string;
  title: string;
  url: string;
  featured_image: FeaturedImage;
}

export interface Nodes {
  input: HTMLInputElement;
  submit: HTMLButtonElement;
  result: HTMLDivElement;
}
