import axios from "axios";
import { API_URI } from "../utils/Global/main";
import { add, loading } from "../store/withdrawlSlice";

export const getPayouts = async (dispatch) => {
    dispatch(loading(true));
    try {
        const url = API_URI + `/api/payment/getallwithdrawlrequest`;
        const res = await axios.get(url);
        console.log(res);
        dispatch(add(res?.data?.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}