import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { epinTableStructure } from '../../utils/Data/EpinData'
import EpinCard from '../../components/designs/Cards/EpinCard'
import { useDispatch, useSelector } from 'react-redux'
import { getEpins } from '../../apis/epinApis'
import { getUpdatedData } from '../../utils/Global/main'

const Epin = () => {
    const [showAdd, setShowAdd] = useState(false);

    const { epins, isLoading } = useSelector((state) => state.epin);
    const dispatch = useDispatch();

    const handleToggleAddModal = () => {
        setShowAdd((prev) => !prev);
    }

    useEffect(() => {
        const getData = async () => {
            await getEpins(dispatch);
        }
        getData();
    }, [dispatch]);

    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'E-Pin Lists'} add={true} handleClick={handleToggleAddModal} addTitle={'E-Pins'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={epinTableStructure}
                    data={getUpdatedData(epins)}
                    isLoading={isLoading}
                />
            </div>
            {
                showAdd &&
                <div className='flex fixed inset-0 justify-center items-center z-10 bg-[rgba(0,0,0,0.4)]'>
                    <EpinCard handleToggle={handleToggleAddModal} />
                </div>
            }
        </div>
    )
}

export default Epin