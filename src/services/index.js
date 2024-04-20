import axios from "axios";

export const BASE_URL = "https://darspro.pythonanywhere.com/darslar/";

export const GetSeminar = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};
