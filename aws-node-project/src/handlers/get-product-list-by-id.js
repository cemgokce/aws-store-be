import { succesResponse } from '../api-response/response'


import { FOOD_PRODUCTS } from "../../mocks/products";

export const handler = async (event) => {
    const {id } = event.pathParameters;

    const product = FOOD_PRODUCTS.find(product = product.id === id);

    return succesResponse(product);
};
