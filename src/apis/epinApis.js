import axios from "axios"
import { API_URI, headers, headersAuth } from "../utils/Global/main";
import { add, addEpinRequests, loading } from "../store/epinSlice";

export const createEpin = async (dispatch, data) => {
    try {
        dispatch(loading(true));
        const url = API_URI + `/api/epins/createadminrequest`;
        const res = await axios.post(url, data);
        console.log(res);
        // dispatch(addOne(res?.data?.data));
        if (res?.status === 200)
            return true;
        return false;
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}

export const getEpins = async (dispatch) => {
    try {
        dispatch(loading(true));

        const url = API_URI + '/api/epins/getallepins';
        const res = await axios.get(url);
        // console.log(res);

        dispatch(add(res?.data?.data));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}

export const getEpinRequests = async (dispatch) => {
    try {
        dispatch(loading(true));

        const url = API_URI + '/api/epins/getallepins?status=PENDING';
        const res = await axios.get(url);
        console.log(res);

        dispatch(addEpinRequests(res?.data?.data));
    }
    catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}