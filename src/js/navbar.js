import React from 'react'
import '../style/navbar.css'
export default function Navbar(){
    return(
        <div className='backdiv'>
            <div className='nav-title nav-div'>
                <h1>Khatamat</h1>  {/*TODO: link to {loged} ? homepage : intropage*/}
            </div>
            <div className='nav-div'>
                <h2>Home</h2>  {/*TODO: link to */}
            </div>
            <div className='nav-div'>
                <h2>Dashboard</h2>  {/*TODO: link to */}
            </div>
            <div className='nav-div'>
                <h2>Group</h2>  {/*TODO: link to */}
            </div>
            <div className='nav-div'>
                <h2>Contact</h2>
            </div>
            <div className='nav-div profile'>
                <h3>username</h3>  {/*TODO: User name goes here */}
                <img className='profile-pic'
                 src={ require('../img/Default-Profile-pic.jpg') } 
                 alt='profile-pic'/> {/*TODO: link to profiel page */}
            </div>
        </div>
    )
}