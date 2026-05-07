export interface ItemProperty {
  label: string;
  value: string;
}

export interface Product {
  itemname: string;
  category: string;
  image: string;
  itemprops: ItemProperty[];
}