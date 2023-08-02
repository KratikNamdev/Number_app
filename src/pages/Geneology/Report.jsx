import React from 'react'
import Header from '../../components/designs/TopComponents/Header'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { getUpdatedReportData, levelReportTableStructure } from '../../utils/Data/GeneologyData'
import { useSelector } from 'react-redux'

const Report = () => {
    const { geneologyData, isLoading } = useSelector((state) => state.geneology);
    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Level Report'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={levelReportTableStructure}
                    data={getUpdatedReportData(geneologyData)}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Report
