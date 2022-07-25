import axios from "axios";

const URL = 'http://localhost:5000'

export const authenticatesSignup = async (data) => {
    try {
        await axios.post(`${URL}/signup`, data)
    }
    catch (error) {
        console.log('Error while calling signup api', error);
    }
}