import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  content?: string | null;
  rating?: number | null;
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
