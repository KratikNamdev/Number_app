import axios from "axios"
import { API_URI } from "../utils/Global/main";
import { add, loading } from "../store/earningSlice";

export const getEarnings = async (dispatch) => {
    dispatch(loading(true));

    const url = API_URI + `/api/genealogy/getuserincomehistory`;
    const res = await axios.get(url);
    // console.log(res);

    dispatch(add(res?.data?.data));
    dispatch(loading(false));
}