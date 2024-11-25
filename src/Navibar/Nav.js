import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const menuList = [
        "Women",
        "Men",
        "Baby",
        "Kids",
        "Sale"
    ];
    
    const navigate = useNavigate()
    const gotoLogin = () => {
        navigate("/Login")
    }

    const gotoLogo = () => {
navigate("/")
    }

    return (
        <div>
            <div className='Login-button'>
                <div> <FontAwesomeIcon icon={faUser} /> </div>
                <div onClick={gotoLogin}> 로그인 </div>
            </div>

            <div className='logo-img' onClick={gotoLogo}>
                <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png' />
            </div>

            <div className='menu-area'>
                <ul className='menu-List'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
            </div>

            <div className='insearch-search'>
                <FontAwesomeIcon icon={faSearch} />
                <input className='insearch-box' placeholder='검색'></input>
            </div>

            <div className='text-menu'> 회원혜택: 3만원 이상 무료배송 & 첫구매 10% 할인 </div>

        </div>
    )
};

export default Nav;