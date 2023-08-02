import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Auth from './pages/Auth';
import MemberList from './pages/Members/MemberList';
import Epin from './pages/Epin/Epin';
import History from './pages/Funds/History';
import Earning from './pages/EarningsAndPayouts/Earning';
import Tds from './pages/EarningsAndPayouts/Tds';
import Payouts from './pages/EarningsAndPayouts/Payouts';
import Level from './pages/Geneology/Level';
import Report from './pages/Geneology/Report';
import Sponsor from './pages/Geneology/Sponsor';
import Transfer from './pages/Funds/Transfer';
import Achiever from './pages/Utilities/Achiever';
import ManagePackage from './pages/Utilities/ManagePackage';
import Requests from './pages/Epin/Requests';
import Tree from './pages/Geneology/Tree';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, loading } from './store/authSlice';
import { getGeneology } from './apis/geneologyApis';
import SlideOver from './components/Sidebar/SlideOver';
import Profile from './pages/Profile/Profile';
import AllGameList from './pages/Games/AllGameList';
import AddGame from './pages/Games/AddGame';
import Payment from './pages/Payments/Payment';
import Wallet from './pages/Payments/Wallet';
import UserList from './pages/Users/UserList';

function App() {

  const { user } = useSelector((state) => state.auth);
  const localUser = JSON.parse(localStorage.getItem('mtrade'));
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('mtrade')) {
      const user = JSON.parse(localStorage.getItem("mtrade"));
      dispatch(add(user));
      dispatch(loading(false));
    }

  }, [dispatch]);

  useEffect(() => {
    const getData = async () => {
      await getGeneology(dispatch, user?.user?._id);
    }
    if (user) {
      getData();
    }
  }, [user, dispatch]);

  return (
    <BrowserRouter>
      <div className={`bg-gray-100`}>
        <div className='flex w-full h-screen max-h-screen'>
          <div className='h-full p-1 max-w-[300px] w-full hidden md:block'>
            <div className='flex flex-col rounded-xl h-full w-full grow gap-y-5 overflow-y-auto border py-2 pt-8 px-4 bg-white'>
              <Sidebar />
            </div>
          </div>
          <div className='md:hidden'>
            <SlideOver />
          </div>
          <Routes>
            {
              localUser ?
                <>
                  <Route path="/" element={<Navigate to={'/dashboard'} />} />
                  <Route path='/dashboard' element={<Home />} />
                  <Route path='/allgamelist' element={<AllGameList/>} />
                  <Route path='/addgame' element={<AddGame/>} />
                  <Route path='/payment' element={<Payment/>} />
                  <Route path='/wallet' element={<Wallet/>} />
                  <Route path='/userlist' element={<UserList/>} />




                  <Route path='/epins/all' element={<Epin />} />
                  <Route path='/epins/requests' element={<Requests />} />
                  <Route path='/funds/history' element={<History />} />
                  <Route path='/funds/transfer' element={<Transfer />} />
                  <Route path='/earnings' element={<Earning />} />
                  <Route path='/admincharge' element={<Tds />} />
                  <Route path='/payouts' element={<Payouts />} />
                  <Route path='/geneology/tree' element={<Tree />} />
                  <Route path='/geneology/tree/:userId' element={<Tree />} />
                  <Route path='/geneology/level' element={<Level />} />
                  <Route path='/geneology/report' element={<Report />} />
                  <Route path='/geneology/sponsor' element={<Sponsor />} />
                  <Route path='/package' element={<ManagePackage />} />
                  <Route path='/achiever' element={<Achiever />} />
                  <Route path='/auth/signin' element={<Navigate to={'/dashboard'} />} />
                  <Route path='/profile' element={<Profile />} />
                  
                </>
                :
                <>
                  <Route path='*' element={<Navigate to={'/auth/signin'} />} />
                  <Route path='/auth/signin' element={<Auth />} />
                </>
            }
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;