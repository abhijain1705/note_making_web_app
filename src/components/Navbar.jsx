import React from 'react';
import logo from '../images/logo.png';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    let LocalUser = window.localStorage.getItem("noteByUser");

    return (
        <div className='navbar'>
            <div className='logo_div'>
                <img alt='logo' src={logo} />
                <h2>Notary</h2>
            </div>
            <div className='button_div'>
                <a href='#Note' ><button>Make a Note</button></a>
                {LocalUser !== null && <Link to={`/YourNote/${LocalUser}`} ><button>View Notes</button></Link>}
            </div>
        </div>
    )
}

export default Navbar;