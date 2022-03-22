import { Link } from "react-router-dom";
import HeaderImg from "../../assets/asset2.svg";
/**
* @author traj3ctory
* @function Header
**/

const Header = () => {
    return (
       <header>
               <Link to="/"><img src={HeaderImg} alt="Logo" width="60%" /></Link>
       </header>
    );
}

export default Header;
