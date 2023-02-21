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

// Props for Pagination component
export interface PaginationProps {
  itemNumber: number;
  noItems?: number;
  pageNumber?: any;
  pageChange: any;
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

// Props for PartialSearch component
export interface PartialSearchProps {
  size?: string;
  country?: string;
  categories?: string;
  pet?: string;
  label?: string;
  searchString?: string;
  page?: string;
}
