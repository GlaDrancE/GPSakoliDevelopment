import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SideMenu({ links }) {
    const [showMenu, setShowMenu] = useState(false);
    function handleMenu() {
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <div className={`mobile-side-menu lg:hidden flex`} onClick={handleMenu}>
                <span className="material-symbols-outlined">
                    {showMenu ? 'close' : 'widgets'}
                </span>
            </div>
            <div className={`main-menu relative ${showMenu && 'show-menu'}`}>
                <div className="inner-main-menu absolute w-100 border-card">

                    <h1>Main <span className='heading-red'>Menu</span></h1>
                    <ul>
                        {links.map((link, index) =>
                            <Link to={link.path} key={index}>{link.name}<span className="hover-line"></span></Link>
                            // handleContent ? <li key={index} onClick={() => { handleMenu(); handleContent(link.path) }}>{link.name}<span className="hover-line"></span></li> : <Link to={link.path} onClick={() => { handleMenu(); }}>{link.name}<span className="hover-line"></span></Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
