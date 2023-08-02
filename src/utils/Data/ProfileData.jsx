export const getBasicUserInfo = (data) => {
    const updatedData = [
        {
            name: 'Full name',
            value: checkData(data?.fullName),
        },
        {
            name: 'Email',
            value: checkData(data?.email),
        },
        {
            name: 'Gender',
            value: checkData(data?.gender),
        },
        {
            name: 'Mobile',
            value: checkData(data?.phoneNumber),
        },
        {
            name: 'Wallet',
            value: checkNumber(data?.wallet),
        }
    ];
    return updatedData;
}

export const getMoreUserInfo = (data) => {
    const updatedData = [
        {
            name: 'Total Investments',
            value: checkNumber(data?.totalInvestment),
        },
        {
            name: 'Total Earnings',
            value: checkNumber(data?.totalEarnings),
        },
        {
            name: 'Total InvestMent Profit',
            value: checkData(data?.totalInvestmentEarning),
        },
        {
            name: 'Total Network Profit',
            value: checkData(data?.totalNetworkEarning),
        },
        {
            name: 'Total Profit',
            value: checkNumber(data?.totalProfit),
        },
        {
            name: 'Last Withdrawn',
            value: checkNumber(data?.lastWithdrawlAmount),
        },
        {
            name: 'Last Topup Amt.',
            value: checkNumber(data?.lastTopUpAmount),
        },
        {
            name: 'Last Topup On',
            value: checkData(data?.lastTopUpDate)
        },
    ];
    return updatedData;
}

const checkData = (data) => {
    if (data && data !== '')
        return data;
    return 'N/A';
}

const checkNumber = (data) => {
    if (data && data !== '')
        return data;
    return 0;
}