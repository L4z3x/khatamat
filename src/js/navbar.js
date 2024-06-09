import React from 'react'
import '../style/navbar.css'
import Profile from './profile'
export default function Navbar(){
const GoProfile = ()=>{window.location.href = '/profile'}
    return(
        <div className='backdiv'>
            <ul className='ul-nav '>
                <li className='li-nav'>
                    <a className='li-nav'>Khatamat</a>
                </li>
                <li className='li-nav'>
                    <a className='li-nav'>Home</a>
                </li>
                <li className='li-nav'>
                    <a className='li-nav'>Contact</a>
                </li>
                <li className='li-nav'>
                    <a className='li-nav'>About</a>
                </li>
                <li className='user1'>
                    <div className='user'>
                        <a>username</a>
                        <img className='profile-pic' onClick={GoProfile} src={require('../img/Default-Profile-pic.jpg')}/>
                    </div>
                </li>
            </ul>
        </div>
            
    )
}