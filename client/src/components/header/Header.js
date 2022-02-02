import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './Header.css'

const Header = () =>{
    return(
        <div className='header'>
            <nav className='nav__bar'>
                <div className='header__logo'>
                    <img 
                    src = 'https://avatars.githubusercontent.com/u/98540847?s=400&u=62abf6625f4b2b664e9dc2114315af6fbe8f9e2f&v=4' 
                    alt='logo'
                    />
                </div>
                <div className='search__bar'>
                    <form>
                        <div className='input__field'>
                            <input type='text' id='search' />
                            <SearchIcon />
                        </div> 
                    </form>    
                </div>
                <div className='nav__links'>
                    <span>
                        <AccountCircleIcon />
                        <small>Account</small>
                    </span>
                    <span>
                        <HelpOutlineIcon />
                        <small>Help</small>
                    </span>
                    <span>
                        <AddShoppingCartIcon className='icon' />
                        <small>Cart</small>
                    </span>
                </div>
            </nav>
        </div>
    )
}
export default Header
