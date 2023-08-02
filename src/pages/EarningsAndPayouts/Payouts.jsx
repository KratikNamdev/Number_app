import React, { useEffect } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { payoutsTableStructure } from '../../utils/Data/EarningsAndPayoutsData'
import { useDispatch, useSelector } from 'react-redux'
import { getPayouts } from '../../apis/withdrawlApis'
import { getUpdatedData } from '../../utils/Global/main'

const Payouts = () => {
    const { withdrawls, isLoading } = useSelector((state) => state.withdrawl);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            await getPayouts(dispatch);
        }
        getData();
    }, [dispatch])

    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Payout Report'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={payoutsTableStructure}
                    data={getUpdatedData(withdrawls)}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Payouts
