import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Icon from '../components/designs/Icons/Icon';
import { handleChange } from '../utils/Global/main';
import { ImSpinner2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../apis/authApis';

const initialState = {
    userId: '',
    password: ''
}

const Auth = () => {
    const [user, setUser] = useState(initialState);
    const { isLoading } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const { userId, password } = user;
        if (userId === '' || password === '') {
            return;
        }
        const res = await login(dispatch, user);
        if (res === 200)
            navigate('/dashboard');
        else {
            window.alert('error in signin')
        }
    }
    return (
        <div className='flex justify-center items-center absolute inset-0 bg-gray-100'>
            <div className='bg-white p-8 w-[350px] flex flex-col gap-6 justify-center items-center'>
                {/* <div className=''>
                    <Icon />
                </div> */}
                <div className='font-semibold text-2xl text-blue-600'>
                    Welcome to MTrade!
                </div>
                <div className='flex flex-col gap-3 w-full'>
                    <input type='text' onChange={(e) => handleChange(e, setUser)} name='userId' value={user?.userId} className='border text-gray-900 outline-none p-2 rounded-lg w-full focus-within:border-indigo-300' placeholder='UserId' />
                    <input type='password' onChange={(e) => handleChange(e, setUser)} name='password' value={user?.password} className='border text-gray-900 outline-none p-2 rounded-lg w-full focus-within:border-indigo-300' placeholder='Password' />
                </div>
                <button disabled={isLoading} onClick={handleSubmit} className={`flex items-center justify-center gap-2 w-full border p-2 rounded-lg text-gray-500 ${!isLoading && 'hover:text-white hover:bg-blue-500 cursor-pointer'} bg-gray-200`}>
                    {isLoading && <ImSpinner2 className='animate-spin' />} Submit
                </button>
            </div>
        </div>
    )
}

export default Auth
