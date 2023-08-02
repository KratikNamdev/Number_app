import React from 'react'
import Header from '../../components/designs/TopComponents/Header'
import TransactionCard from '../../components/designs/Cards/TransactionCard'

const Transfer = () => {
    return (
        <div className='my-2 flex-1 mr-2 p-6 rounded-2xl bg-blue-50 border shadow overflow-y-auto'>
            <Header title={'Transfer Funds'} />
            <div className="my-8 mx-4 flex justify-center">
                <TransactionCard />
            </div>
        </div>
    )
}

export default Transfer
