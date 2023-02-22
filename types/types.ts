// Props for BestTile component
export interface BestTileProps {
  oldPrice: number;
  price: number;
  title: string;
  image: string;
  color: string;
  shape: string;
}

// Props for Home component
export interface HomeProps {
  searchParams?: {
    Categories?: string;
    Size?: string;
    Country?: string;
    Pet?: string;
    searchString?: string;
    page?: number;
  };
}

// Props for SearchCategory component
export interface SearchCategoryProps {
  label: string;
  title: string;
  items: string[];
}

// Props for usePerformChange hook
export interface PerformChangeProps {
  label: string;
}

// Props for Category component
export interface CategoryProps {
  label: string;
  title: string;
  items: string[];
}

// Props for MiniTile component
export interface MiniTileProps {
  id: string;
  price: number;
  name: string;
  oldPrice: number;
  discounted: boolean;
  image: string;
  rating: number;
}

// LocalProduct export interface
export interface LocalProduct extends Omit<Product, "quantity"> {
  quantity: number;
}

// CounterState export interface
export interface CounterState {
  products: LocalProduct[];
}

// Props for PartialSearch helper function
export interface PartialSearchProps {
  size?: string;
  country?: string;
  categories?: string;
  pet?: string;
  label?: string;
  searchString?: string;
  page?: string;
}

// Props for Product component
export interface Product {
  _id: string;
  pet_types: string;
  categories: string;
  countries: string;
  sizes: string;
  price: number;
  discounted: boolean;
  old_price: number;
  rating: number;
  product_name: string;
  product_description: string;
  product_image: string;
}

// Props for Pagination component
export interface PaginationProps {
  noItems: number;
  pageNumber: any;
  setPage: (page: number) => void;
  productLength: number;
}

// Props for usePerformChange hook
export interface usePerformChangeProps {
  label: string;
}
