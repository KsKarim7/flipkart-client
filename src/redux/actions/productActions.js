import axios from "axios";
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_SUCCESS } from "../constants/productConstant";


const url = 'http://localhost:5000'

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`)
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({ type: GET_PRODUCTS_FAILED, payload: error.message })
    }
}