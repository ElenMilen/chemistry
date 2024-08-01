import { Link } from 'react-router-dom';
import './header.scss';
import { useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className='header'>
      <Link to='/'>
        <span className={`header-title ${currentPath === "/" || currentPath === "/chemistry" ? "active" : ""}`}> Periodic Table </span>
      </Link>
      <Link to='/reaction'>
        <span className={`header-title ${currentPath === "/reaction" ? "active" : ""}`}> Reaction </span>
      </Link>
    </div>
  )
}

export default Header;