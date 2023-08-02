export const levelGeneologyTableStructure = [
    {
        header: 'S.NO',
        accessKey: 'index'
    },
    {
        header: 'MEMBER ID',
        accessKey: 'userId'
    },
    {
        header: 'MEMBER NAME',
        accessKey: 'fullName',
    },
    {
        header: 'JOIN DATE',
        accessKey: 'createdAt'
    },
    {
        header: 'TOPUP DATE',
        accessKey: 'lastTopUpData'
    },
    {
        header: 'TOPUP PACK',
        accessKey: 'lastTopUpAmount'
    },
    {
        header: 'SPONSOR',
        accessKey: 'parentId'
    },
    {
        header: 'SPONSOR NAME',
        accessKey: 'redirectUrl'
    },
];

export const levelReportTableStructure = [
    {
        header: 'LEVEL',
        accessKey: 'level'
    },
    {
        header: 'TOTAL DOWNLINE',
        accessKey: 'downlineCount'
    },
];

export const sponsorTableStructure = [
    {
        header: 'S.NO',
        accessKey: 'index'
    },
    {
        header: 'MEMBER ID',
        accessKey: 'userId'
    },
    {
        header: 'MEMBER NAME',
        accessKey: 'fullName',
    },
    {
        header: 'SPONSOR ID',
        accessKey: 'parentId'
    },
    {
        header: 'DIRECT SPONSOR',
        accessKey: 'sponsor'
    },
];

export const getUpdatedReportData = (data) => {
    let newData = [];
    for (let i in data) {
        newData = [...newData, { level: i, downlineCount: data[i]?.length }];
    }
    return newData;
}

export const getUpdatedLevelData = (data) => {
    let newData = [];
    for (let i in data) {
        newData = [...newData, ...data[i]];
    }
    return newData;
}