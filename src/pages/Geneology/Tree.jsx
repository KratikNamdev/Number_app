import React, { useEffect } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import ProfileCard from '../../components/designs/Cards/ProfileCard'
import Accordion1 from '../../components/designs/Accordion/Accordion1'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGeneologyById } from '../../apis/geneologyApis'
import { getUser } from '../../apis/userApis'

const Tree = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.user);
    const adminUser = useSelector((state) => state?.auth?.user?.user);
    const { isLoading, currentUserGeneology } = useSelector((state) => state.geneology);

    const { userId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const id = userId ? userId : adminUser?._id;
            await getUser(dispatch, id);
            await getGeneologyById(dispatch, id);
        }
        if (adminUser)
            getData();
    }, [dispatch, userId, adminUser]);

    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Level Tree'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                {
                    isLoading ?
                        <div className='w-60 mx-auto h-32 bg-gray-200'></div>
                        :
                        <ProfileCard data={user} />
                }

                <div className='mt-8'>
                    {
                        isLoading ?
                            [1, 2, 3, 4, 5].map((item) =>
                                <div className='w-full h-16 my-2 bg-gray-200' key={item}></div>
                            )
                            :
                            Object.keys(currentUserGeneology)?.map((item, index) =>
                                <Accordion1 item={currentUserGeneology[item]} level={item} key={index} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Tree
