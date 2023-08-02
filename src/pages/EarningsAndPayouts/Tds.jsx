import React from 'react'
import NormalTable from '../../components/designs/Tables/NormalTable'
import Header from '../../components/designs/TopComponents/Header'
import { earningsTableStructure } from '../../utils/Data/EarningsAndPayoutsData'

const Tds = () => {
    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Admin Charges'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={earningsTableStructure}
                    data={[]}
                />
            </div>
        </div>
    )
}

export default Tds
