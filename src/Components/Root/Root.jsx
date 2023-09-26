
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
          <Header></Header>
          <div className='py-10 items-center flex justify-center'>
          <Outlet></Outlet> 
          </div>
        </div>
    );
};

export default Root;