import axios from "axios"
import { API_URI } from "../utils/Global/main";
import { add, addTree, loading } from "../store/geneologySlice";

export const getGeneology = async (dispatch, userId) => {
    dispatch(loading(true));
    try {
        const url = API_URI + `/api/genealogy/getnetworklevelwise/${userId}`;
        const res = await axios.get(url);
        console.log(res);

        dispatch(add(res?.data?.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}

export const getGeneologyById = async (dispatch, userId) => {
    dispatch(loading(true));
    try {
        const url = API_URI + `/api/genealogy/getnetworklevelwise/${userId}`;
        const res = await axios.get(url);
        console.log(res);

        dispatch(addTree(res?.data?.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}