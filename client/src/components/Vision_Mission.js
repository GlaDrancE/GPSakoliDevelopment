import React from 'react'
export default function Vision_Mission({ vision, mission }) {
    return (
        <>
            <div className="vision-mission-container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto my-9">
                <div className="vision-container p-3 text-center text-white">
                    <h1>Vision</h1>
                    <p>{vision}</p>
                </div>
                <div className="mission-container p-3 text-center">
                    <h1>Mission</h1>
                    <ul>
                        {mission.map(m => (
                            <li className='list-style'>
                                {m}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
