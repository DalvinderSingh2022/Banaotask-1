import React, { useState } from 'react'

const ListItem = ({ name, image }) => {
    const [follow, setFollow] = useState(false);

    return (
        <div className='item'>
            <img src={image} alt={name} />
            <span>{name}</span>
            <button onClick={() => setFollow(prev => !prev)} className={follow ? "active" : ""}>{follow ? "Followed" : "Follow"}</button>
        </div>
    )
}

export default ListItem;