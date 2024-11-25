import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
    const menuList = [
        "Women",
        "Men",
        "Baby",
        "Kids",
        "Sale"
    ];

    return (
        <div>
            <div className='Login-button'>
                <div> <FontAwesomeIcon icon={faUser} /> </div>
                <div> 로그인 </div>
            </div>

            <div className='logo-img'>
                <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png' />
            </div>

            <div className='menuList'>
                <ul>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
};

export default Nav;