import React, { useEffect } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { sponsorTableStructure } from '../../utils/Data/GeneologyData'
import { useDispatch, useSelector } from 'react-redux'
import { getdirectSponsors } from '../../apis/directSponsors'
import { getUpdatedData } from '../../utils/Global/main'

const Sponsor = () => {
    // const dispatch = useDispatch();
    // const { directSponsors, isLoading } = useSelector((state) => state.directSponsor);

    // useEffect(() => {
    //     const getData = async () => {
    //         await getdirectSponsors(dispatch);
    //     }
    //     getData();
    // }, [dispatch]);
    const { geneologyData, isLoading } = useSelector((state) => state.geneology);
    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Sponsor List'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={sponsorTableStructure}
                    data={getUpdatedData(geneologyData[1])}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Sponsor
