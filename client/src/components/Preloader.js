import { React, useState, useEffect } from 'react'

import preloader from '../images/loading.gif'

export default function Preloader() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        window.addEventListener('load', () => {
            setLoading(false);
            console.log(loading);
        })
    }, []);
    return (
        <>
            {loading && <div className="preloader bg-white">
                <img src={preloader} width={70} height={70} alt="" />
            </div>}
        </>
    )
}
