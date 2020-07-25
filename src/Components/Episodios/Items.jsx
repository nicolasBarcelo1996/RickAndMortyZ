import React from 'react'
import '../Main.css'

function Items({item}) {
    return (
        <div>
            <ul>
                <li>
            <strong className="episodeList">{item.name} </strong>
            <span>{item.episode} </span>
             <span className="episodeSpan">{item.air_date} </span>
            </li>
            </ul>
        </div>
    )
}

export default Items
