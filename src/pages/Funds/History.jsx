import React from 'react'
import Header from '../../components/designs/TopComponents/Header'
import { historyTableStructure } from '../../utils/Data/FundsData'
import NormalTable from '../../components/designs/Tables/NormalTable'

const History = () => {
    return (
        <div className='my-2 flex-1 mr-2 p-6 rounded-2xl bg-blue-50 border shadow overflow-y-auto'>
            <Header title={'History'} />
            <div className="my-8 mx-4">
                <NormalTable
                    tableStructure={historyTableStructure}
                    data={[]}
                />
            </div>
        </div>
    )
}

export default History
