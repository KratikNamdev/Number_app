import axios from "axios"
import { API_URI, headers, headersAuth } from "../utils/Global/main";
import { add, addOne, loading } from "../store/packageSlice";

export const createPackage = async (dispatch, data) => {
    dispatch(loading(true));
    const url = API_URI + `/api/packages/create`;
    const res = await axios.post(url, data, { headers: headersAuth });
    console.log(res);
    dispatch(addOne(res?.data?.data));
    dispatch(loading(false));
}

export const getPackages = async (dispatch) => {
    dispatch(loading(true));

    const url = API_URI + `/api/packages/getallpackage`;
    const res = await axios.get(url);


    dispatch(add(res?.data?.data));
    dispatch(loading(false));
}