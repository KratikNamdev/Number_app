import axios from "axios"
import { API_URI, headers, headersAuth } from "../utils/Global/main";
import { add, loading } from "../store/memberSlice";

export const getMembers = async (dispatch) => {
    dispatch(loading(true));

    const url = API_URI + `/api/user/getallusers`;
    const res = await axios.get(url);
    // console.log(res);

    dispatch(add(res?.data?.data));

    dispatch(loading(false));
}