export const earningsTableStructure = [
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
        header: 'DAILY TRADING PROFIT',
        accessKey: 'tradingProfit',
    },
    {
        header: 'INCENTIVE LEVEL',
        accessKey: 'incentiveProfit',
    },
    {
        header: 'AMOUNT',
        accessKey: 'totalAmount'
    },
    {
        header: 'DEDUCTION',
        accessKey: 'deduction',
    },
    {
        header: 'PAID AMOUNT',
        accessKey: 'totalEarnings'
    },
    {
        header: 'DATE',
        accessKey: 'createdAt'
    },
];

export const payoutsTableStructure = [
    {
        header: 'S.NO',
        accessKey: 'index'
    },
    {
        header: 'ID',
        accessKey: 'userId'
    },
    {
        header: 'NAME',
        accessKey: 'bankDetails.accountNameHolder',
    },
    {
        header: 'AMOUNT',
        accessKey: 'amount'
    },
    {
        header: 'A/C NO',
        accessKey: 'bankDetails.accountNumber'
    },
    {
        header: 'BANK',
        accessKey: 'bankDetails.bankName'
    },
    {
        header: 'IFSC',
        accessKey: 'bankDetails.ifsc'
    },
    {
        header: 'WITHDRAWN ON',
        accessKey: 'date'
    },
];

export const tdsTableStructure = [
    {
        header: 'S.NO',
        accessKey: 'index'
    },
    {
        header: 'MEMBER ID',
        accessKey: 'memberId'
    },
    {
        header: 'MEMBER NAME',
        accessKey: 'name',
    },
    {
        header: 'AMOUNT',
        accessKey: 'mobile'
    },
    {
        header: 'DEDUCTION',
        accessKey: 'creationDate'
    },
    {
        header: 'PAID AMOUNT',
        accessKey: 'redirectUrl'
    },
    {
        header: 'DATE',
        accessKey: 'redirectUrl'
    },
    {
        header: 'INCOME TYPE',
        accessKey: 'redirectUrl'
    },
];

export const getEarningData = (data) => {
    const updatedData = data?.map((item) => {
        return {
            ...item?.user,
            totalAmount: (item?.dailyTradingProfit ? item?.dailyTradingProfit?.amount : 0 + item?.levelIncentive ? item?.levelIncentive?.amount : 0)?.toFixed(2),
            totalEarnings: item?.user?.totalEarnings?.toFixed(2),
            tradingProfit: item?.dailyTradingProfit ? Number(item?.dailyTradingProfit?.amount)?.toFixed(2) : 0,
            incentiveProfit: item?.levelIncentive ? Number(item.levelIncentive?.amount)?.toFixed(2) : 0,
            deduction: (item?.dailyTradingProfit ? item?.dailyTradingProfit?.adminCharges : 0 + item?.levelIncentive ? item?.levelIncentive?.adminCharges : 0)?.toFixed(2),
        }
    });
    return updatedData;
}