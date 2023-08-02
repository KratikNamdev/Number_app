import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/designs/TopComponents/Header'
import ImageCard from '../../components/designs/Cards/ImageCard'
import PackageCard from '../../components/designs/Cards/PackageCard';
import { useDispatch, useSelector } from 'react-redux';
import { createPackage, getPackages } from '../../apis/packageApis';
import { handleChange } from '../../utils/Global/main';

const initialState = {
    packageTitle: '',
    packageAmount: '',
    packagePV_BV: '',
    image: ''
}

const ManagePackage = () => {
    const [showAdd, setShowAdd] = useState(false);
    const popupRef = useRef();

    const [data, setData] = useState(initialState);


    const { packages, isLoading } = useSelector((state) => state.package);
    const dispatch = useDispatch();

    const handleToggleAddModal = () => {
        setShowAdd((prev) => !prev);
    }

    const handleImage = (e) => {
        setData((prev) => { return { ...prev, image: e.target.files[0] } })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const { packageTitle, packageAmount, packagePV_BV, image } = data;
        if (packageAmount === '' || packagePV_BV === '' || image === '' || packageTitle.trim() === '') {
            window.alert('fill all the fields');
            return;
        }
        formData.append('packageTitle', packageTitle);
        formData.append('packageAmount', packageAmount);
        formData.append('packagePV_BV', packagePV_BV);
        formData.append('image', image);
        await createPackage(dispatch, formData);
    }


    useEffect(() => {
        const getData = async () => {
            await getPackages(dispatch);
        }
        getData();
    }, [dispatch]);


    return (
        <div className='my-2 flex-1 md:mr-2 md:p-6 pt-[60px] px-1 md:rounded-2xl bg-white border shadow overflow-y-auto'>
            <Header title={'Manage Package'} add={true} handleClick={handleToggleAddModal} addTitle={'Package'} />
            <div className="md:my-8 my-4 mx-auto md:mx-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        packages.map((item, index) =>
                            <ImageCard key={index} item={item} />
                        )
                    }
                </div>
            </div>
            {
                showAdd &&
                <div className='flex fixed inset-0 justify-center items-center z-10 bg-[rgba(0,0,0,0.4)]' ref={popupRef}>
                    <PackageCard
                        data={data}
                        setData={setData}
                        handleChange={handleChange}
                        handleImage={handleImage}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                        handleToggle={handleToggleAddModal}
                    />
                </div>
            }
        </div>
    )
}

export default ManagePackage
