export const API_URI = 'https://mtrade-one.vercel.app';

export const updatedData = (data, page, pageSize) => {
    const newData = data?.map((d, index) => {
        return { ...d, index: page * pageSize + index + 1 };
    })

    return newData;
}

export const getUpdatedData = (data) => {
    const newData = data?.map((d, index) => {
        return { ...d, index: index + 1 };
    })

    return newData;
}

export const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmlzbWF0aWNfc3BhbTI1MzMiLCJleHAiOjE3MTk2ODU3NzYsImlhdCI6MTY4ODE0OTc3Nn0.cA3Wk_1PLexia7brajS_8RfhNgAArgrdwB_m_oR4ztSIYQpnY2rDEMQLhQRq3ThCuQ3uuB-nRxTqusfSfTT75A';

export const headersAuth = {
    'Content-Type': 'multipart/form-data',
    'Authorization': localStorage.getItem('unbind')
    // 'Authorization': `Bearer ${jwtToken}`

}

export const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwtToken}`
}

export const trimHeading = (data) => {
    if (data.length > 25) {
        return data.substring(0, 25) + '...';
    }
    return data;
}

export const trimContent = (data) => {
    if (data.length > 60) {
        return data.substring(0, 60) + '...';
    }
    return data;
}

export const handleChange = (e, setData) => {
    const { name, value } = e.target;

    setData((prev) => {
        return { ...prev, [name]: value };
    })
}


export const checkDateType = (value) => {
    if (value?.includes('createdAt') || value === 'creationDate' || value === 'date') {
        return true;
    }
    return false;
}

export const checkImageType = (value) => {
    if (value === 'imageUrl') {
        return true;
    }
    return false;
}