export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
};
export type ProductProps = ProductType & {
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};
