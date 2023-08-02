export const epinTableStructure = [
    {
        header: 'S.NO',
        accessKey: 'index'
    },
    {
        header: 'ID',
        accessKey: '_id'
    },
    {
        header: 'E-PIN',
        accessKey: 'ePinId',
    },
    {
        header: 'AMOUNT',
        accessKey: 'amount'
    },
    {
        header: 'ISSUE DATE',
        accessKey: 'packageDetails.createdAt'
    },
];

export const requestTableStructure = [
    {
        header: 'S.NO',
        accessKey: 'index'
    },
    {
        header: 'REQUEST ID',
        accessKey: 'ePinId'
    },
    {
        header: 'MEMBER ID',
        accessKey: 'userId',
    },
    {
        header: 'EPIN FOR PACKAGE',
        accessKey: 'packageDetails.packageTitle'
    },
    {
        header: 'QUANTITY',
        accessKey: 'creationDate'
    },
    {
        header: 'AMOUNT PAID',
        accessKey: 'creationDate'
    },
    {
        header: 'REQUESTED ON',
        accessKey: 'creationDate'
    },
    {
        header: 'PAYMENT MODE',
        accessKey: 'creationDate'
    },
    {
        header: 'UTR/TXN NUMBER',
        accessKey: 'creationDate'
    },
    {
        header: 'STATUS',
        accessKey: 'creationDate'
    },
];