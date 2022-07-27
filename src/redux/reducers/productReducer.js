import { GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case GET_PRODUCTS_FAILED:
            return { error: action.payload }
        default:
            return state;
    }
}