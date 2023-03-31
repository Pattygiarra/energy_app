import { categoryAction } from "./category/category.slice";
import prodReducer from "./product/product.slice";
import { userAction } from "./user/user.slice";

export const reducers = {
  products: prodReducer,
  users: userAction,
  categories: categoryAction,
};
