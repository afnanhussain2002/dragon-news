import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} >
                <Link className="mx-2" to={'/'}>Bangladesh are ready for world cup</Link>
                <Link className="mx-2"to={'/'}>Can India won this world cup. whats!</Link>
                <Link className="mx-2"to={'/'}>What sciencetist say about Bangladesh earthqueq</Link>
            </Marquee>

        </div>
    );
};

export default BreakingNews;