import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './Header.css'

const Header = () =>{
    return(
        <nav className='header'>
            <a href ='/home'>
                <img 
                src = 'https://avatars.githubusercontent.com/u/98540847?s=400&u=62abf6625f4b2b664e9dc2114315af6fbe8f9e2f&v=4'
                alt = ''
                className='nav__logo'
                />
            </a>
            <div className='nav__search'>
                <input type='text' className='search' placeholder='Search items' />
                <SearchIcon className='search__icon'/>
            </div>
            {/* nav__links */}
            <div className='nav__links'>
                <div className='nav__options'>
                    <AccountCircleIcon className='optionlineOne' />
                    <span className='optionlineTwo'>Account</span>
                </div>
                <div className='nav__options'>
                    <HelpOutlineIcon className='optionlineOne' />
                    <span className='optionlineTwo'>Help</span>
                </div>
                <div className='nav__options'>
                    <a href='/'>
                    <AddShoppingCartIcon className='optionlineOne' />
                    <span className='optionlineTwo'>Cart</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header