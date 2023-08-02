import React, { useEffect } from 'react'
import NormalTable from '../../components/designs/Tables/NormalTable'
import Header from '../../components/designs/TopComponents/Header'
import { earningsTableStructure, getEarningData } from '../../utils/Data/EarningsAndPayoutsData'
import { useDispatch, useSelector } from 'react-redux'
import { getEarnings } from '../../apis/earningApis'
import { getUpdatedData } from '../../utils/Global/main'

const Earning = () => {
    const { earnings, isLoading } = useSelector((state) => state.earning);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            await getEarnings(dispatch);
        }
        getData();
    }, [dispatch]);
    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Earning Report'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={earningsTableStructure}
                    data={getUpdatedData(getEarningData(earnings))}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Earning
