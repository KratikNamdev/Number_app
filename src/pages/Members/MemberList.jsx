import React, { useEffect, useState } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import NormalTable from '../../components/designs/Tables/NormalTable'
import { memberTableStructure } from '../../utils/Data/MembersData'
import { useDispatch, useSelector } from 'react-redux'
import { getMembers } from '../../apis/memberApis'
import { getUpdatedData } from '../../utils/Global/main'
import RegistrationCard from '../../components/designs/Cards/RegistrationCard'

const MemberList = () => {
    const { members, isLoading } = useSelector((state) => state.member);
    const dispatch = useDispatch();

    const [showAdd, setShowAdd] = useState(false);

    const handleToggleAddModal = () => {
        setShowAdd((prev) => !prev);
    }

    useEffect(() => {
        const getData = async () => {
            await getMembers(dispatch);
        }
        getData();
    }, [dispatch]);
    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Members List'} add={true} handleClick={handleToggleAddModal} addTitle={'Members'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <NormalTable
                    tableStructure={memberTableStructure}
                    data={getUpdatedData(members)}
                    isLoading={isLoading}
                />
            </div>
            {
                showAdd &&
                <div className='flex fixed inset-0 justify-center items-center z-10 bg-[rgba(0,0,0,0.4)]'>
                    <RegistrationCard handleToggle={handleToggleAddModal} />
                </div>
            }
        </div>
    )
}

export default MemberList
