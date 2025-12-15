export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface Ingredient {
  id: number;
  name: string;
  description: string;
  image: string;
  benefit: string;
}

export interface NavItem {
  label: string;
  href: string;
}
