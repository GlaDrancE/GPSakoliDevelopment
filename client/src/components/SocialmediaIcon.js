import React from 'react'

export default function SocialmediaIcon(props) {
    return (
        <div className='socialMediaIcon my-2'>
            <a href={props.icons.iconUrl} className='mx-1'>
                <img src={props.icons.iconSvg} alt="" />
            </a>
        </div>
    )
}
