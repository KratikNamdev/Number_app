import React, { useEffect } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import { requestTableStructure } from '../../utils/Data/EpinData'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { useDispatch, useSelector } from 'react-redux'
import { getEpinRequests } from '../../apis/epinApis'
import { getUpdatedData } from '../../utils/Global/main'

const Requests = () => {

    const { epinRequests, isLoading } = useSelector((state) => state.epin);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            await getEpinRequests(dispatch);
        }
        getData();
    }, [dispatch]);

    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'E-Pin Requests'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={requestTableStructure}
                    data={getUpdatedData(epinRequests)}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Requests
