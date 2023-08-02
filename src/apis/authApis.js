import axios from "axios"
import { API_URI } from "../utils/Global/main";
import { add, loading } from "../store/authSlice";

export const createMember = async (dispatch, data) => {
    try {
        dispatch(loading(true));
        const url = API_URI + `/api/auth/create`;
        const res = await axios.post(url, data);
        console.log(res);
        if (res?.status === 200)
            return true;
        return false;
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}

export const login = async (dispatch, data) => {
    try {
        dispatch(loading(true));

        const url = API_URI + '/api/auth/login';
        const res = await axios.post(url, data);
        console.log(res);

        if (res?.data?.statusCode === 200) {
            const res_data = { user: res?.data?.data?.findUser, token: res?.data?.data?.token }
            localStorage.setItem('mtrade', JSON.stringify(res_data));
            dispatch(add(res_data));
        }

        return res?.data?.statusCode;
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loading(false));
    }
}