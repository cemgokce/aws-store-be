import { succesResponse } from '../api-response/response'
import { FOOD_PRODUCTS } from "../../mocks/products";

export const handler = async () => succesResponse(FOOD_PRODUCTS);
