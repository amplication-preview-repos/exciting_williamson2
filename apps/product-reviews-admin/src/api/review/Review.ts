import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  rating: number | null;
  product?: Product | null;
  user?: User | null;
};
