import React from 'react'
import Header from '../../components/designs/TopComponents/Header'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { achieverTableStructure } from '../../utils/Data/UtilitiesData'
import AchieverCard from '../../components/designs/Cards/AchieverCard'

const Achiever = () => {
    return (
        <div className='my-2 flex-1 mr-2 p-6 rounded-2xl bg-blue-50 border shadow overflow-y-auto'>
            <Header title={'Publish Achiever'} />
            <div className="my-8 mx-4 flex flex-col gap-8">
                <AchieverCard />
                <NormalTable
                    tableStructure={achieverTableStructure}
                    data={[]}
                />
            </div>
        </div>
    )
}

export default Achiever
