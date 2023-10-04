import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div >
                <img className="w-80 flex justify-center" src="/src/assets/logo.png" alt="logo" />
                <p className="text-center">Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

        </div>
    );
};

export default Header;