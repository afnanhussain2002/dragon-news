import moment from 'moment';
import BreakingNews from './BreakingNews/BreakingNews';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className="mx-auto" src="/src/assets/logo.png" alt="logo" />
                <p >Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>

            </div>
            <div>
                <BreakingNews></BreakingNews>
            </div>
            <div>
                <Navbar></Navbar>
            </div>

        </div>
    );
};

export default Header;