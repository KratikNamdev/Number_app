import React from 'react'

const ProfileCard = ({data}) => {
    // console.log(data)
    return (
        <div className='bg-white w-fit mx-auto shadow p-4 flex gap-8 rounded-lg border'>
            <div className=' w-4/12 min-w-[200px] rounded-lg flex justify-center items-center bg-gray-100'>
                Profile Image
            </div>
            <div className='flex gap-3 flex-col text-gray-500 font-medium'>
                <div className=''>
                    ID: {data?.userId}
                </div>
                <div className=''>
                    Name: {data?.fullName}
                </div>
                <div className=''>
                    Direct Sponsor: 2
                </div>
                <div className=''>
                    Total Downline: 287
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
