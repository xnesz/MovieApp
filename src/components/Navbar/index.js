
import { NavLink } from 'react-router-dom';
import './navbar.css';

const links = {
    'Popular': '/popular',
    'Categories': '/categories',
    'All': '/all',
    'Sign Up': '/signup',
};

export default function Navbar() {
    const Links = Object.entries(links).map(([title, link]) => {
        return <NavBtn {...{ link }} key={link}>
            {title}
        </NavBtn>
    });
    return <div id="navbar">
        <NavBtn className='homelink' link={'/'}>
            <h1>MovieTime</h1>
        </NavBtn>
        <SearchBar />
        <div className={'navlinks'}>
            {Links}
        </div>
    </div>
}

function NavBtn({ children, link, className = '' }) {
    return <NavLink className={['navbtn', className].join(' ')} to={link} activeStyle>
        <button>
            {children}
        </button>
    </NavLink>
}

function SearchBar() {
    return <input className='searchbar' type={'text'} placeholder={'Search'} />
}