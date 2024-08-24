import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Dropdown(props) {
    const [showDD, setShowDD] = useState(false)
    const handleMouseEnter = () => {
        setShowDD(true);
    };

    const handleMouseLeave = () => {
        setShowDD(false);
    };

    return (
        <>
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>{props.link}</li></a>
            <div className={`dropdown-container absolute align-center min-w-0 bg-white ${showDD && 'showdd'}`} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                {
                    props.ddcontent.map((element, index) => (

                        <div className="dropdown-component" key={index}>
                            <h1 className="dropdown-heading text-center">
                                {element.headings}
                            </h1>
                            <ul className='p-2'>
                                {
                                    element.content.map((content, index) => (
                                        <Link to={content.contentUrl} key={index}>
                                            <li>{content.contentTitle}</li>
                                            <span className="hover-line"></span>
                                        </Link>
                                    ))
                                }
                            </ul>
                            <div className="hover-background"></div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export function CollapseDropdown(props) {

    const [showCD, setShowCD] = useState(props.data.showCD);
    const [ddIcon, setddIcon] = useState('add_circle')
    const toggleDD = () => {
        setShowCD(!showCD)
        setddIcon(!showCD ? 'remove' : 'add_circle')
    }
    return (
        <>
            <div className='w-full bg-red-600 text-white my-5'>
                <div className={`flex items-center p-4 justify-between dd-label cursor-pointer`} onClick={toggleDD}>
                    <header className='text-l'>{props.data.session}</header>
                    <span class="material-symbols-outlined">
                        {ddIcon}
                    </span>
                </div>
                <div className={`collapse-dd-body w-full h-screen ${showCD && 'showcd'}`}>
                    <iframe src={'https://gpsakoli.ac.in' + props.data.path} frameborder="0" className='w-full h-full'></iframe>
                </div>
            </div>
        </>
    )
}