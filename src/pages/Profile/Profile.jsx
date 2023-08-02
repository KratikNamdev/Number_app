import React, { useEffect, useState } from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import OutlineBtn2 from '../../components/designs/Buttons/OutlineBtn2';
import { VscSignOut } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import ReadableInput from '../../components/designs/Inputs/ReadableInput';
import { getBasicUserInfo, getMoreUserInfo } from '../../utils/Data/ProfileData';
import { MdVerified } from 'react-icons/md';

const Profile = () => {
    const { user, isLoading } = useSelector((state) => state.auth);
    console.log(user);
    const [userInfo, setUserInfo] = useState(user?.user);

    const naivgate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('mtrade');
        naivgate('/auth/signin');
        window.location.reload();
    }

    useEffect(() => {
        setUserInfo(() => user?.user);
    }, [user]);

    return (
        <div className='md:p-8 p-4 bg-white w-full rounded-lg md:mr-1 md:my-1.5 flex-1 overflow-y-auto'>
            {
                isLoading ?
                    <div className='grid grid-rows-2 h-full gap-6'>
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='w-40 h-40 rounded-full bg-gray-200'>
                            </div>
                            <div className='flex-1 bg-gray-200 rounded-lg'>
                            </div>
                        </div>
                        <div className='rounded-lg bg-gray-200'>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col gap-12'>
                        {/* basic info section  */}
                        <div className='flex justify-between gap-12'>
                            {/* photo section  */}
                            <div className='flex flex-col'>
                                <div className='w-40 h-40 rounded-full bg-gray-100 flex justify-center items-center text-gray-400 text-7xl'>
                                    <FaUserLarge />
                                </div>
                                <div className='flex flex-col gap-3 items-center mt-2'>
                                    <div className='font-medium text-lg flex gap-1 items-center'>
                                        {userInfo?.userId} {userInfo?.accountStatus === 'ACTIVE' && <MdVerified className='text-blue-500' />}
                                    </div>
                                    <div className=''>
                                        <OutlineBtn2
                                            btnText={'Logout'}
                                            extendedClass={'border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'}
                                            icon={<VscSignOut />}
                                            handleClick={handleLogout}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* normal info section */}
                            <div className='h-fit flex-1 p-8 pt-10 border rounded-lg border-gray-600 relative'>
                                <div className='text-4xl font-semibold text-gray-500 absolute -top-5 bg-white left-4 px-2'>
                                    Basic Info
                                </div>
                                <div className='grid sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4'>
                                    {
                                        getBasicUserInfo(userInfo)?.map((item, index) =>
                                            <ReadableInput item={item} key={index} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        {/* more info section */}
                        <div className='h-fit flex-1 p-8 pt-10 border rounded-lg border-gray-600 relative'>
                            <div className='text-4xl font-semibold text-gray-500 absolute -top-5 bg-white left-4 px-2'>
                                More Info
                            </div>
                            <div className='grid sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4'>
                                {
                                    getMoreUserInfo(userInfo)?.map((item, index) =>
                                        <ReadableInput item={item} key={index} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Profile
