import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <span className='header-title'> Periodic Table </span>
      </Link>
      <Link to='/reaction'>
        <span className='header-title'> Reaction </span>
      </Link>
    </div>
  )
}

export default Header;