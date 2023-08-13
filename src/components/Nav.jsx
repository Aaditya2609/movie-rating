import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import AddMovie from './AddMovie';

function Nav() {
    const location = useLocation();
    const [showModal,setShowModal]=useState(false);
    return (
        <div className='flex gap-8 bg-[rgba(0,0,0,0.9)] py-4 px-8 font-bold text-xl items-center justify-between'>
            <div className='text-white w-[20%]'>
                Movie Ratings
            </div>
            <div className='flex gap-8 w-[40%]'>
            <NavLink to="/" className={`flex items-center justify-center ${location.pathname === '/' ? 'text-[#29b9f0ff]' : ' text-[white]'
                }`}>
                Movies
            </NavLink>
            <NavLink to="/watchlist" className={`flex items-center justify-center ${location.pathname === '/watchlist' ? 'text-[#29b9f0ff]' : 'text-[white]'
                }`}>
                Watch List
            </NavLink>
            <NavLink to="/starred" className={`flex items-center justify-center ${ location.pathname.includes('/starred') ? 'text-[#29b9f0ff]' : ' text-[white]'
                }`}>
                Starred Movies
            </NavLink>
            <button className=' bg-[#29b9f0ff] text-white p-2 rounded-xl text-md font-semibold' onClick={()=>setShowModal(true)}>Add Movie</button>
            </div>
            {showModal&&<AddMovie setShowModal={setShowModal}/>}
        </div>
        
    ) 
}

export default Nav