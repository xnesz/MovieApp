import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const links = {
    'Popular': '/popular',
    'Categories': '/categories',
    'All': '/all',
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
    return <form action="/search" method='get'>
        <input name="query" className='searchbar' type='text' placeholder={'Search'} />
        <button type="submit">Search</button>
    </form>
}