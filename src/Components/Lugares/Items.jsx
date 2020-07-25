import React from 'react'
import '../Main.css'

function Items({item}) {
    return (
        <div>
           
         <ul>
         <li>
 <strong className="episodeList">{item.name} </strong>
 <span>{item.dimension} </span>
  <span className="episodeSpan">{item.type} </span>
         </li>
         </ul>
        </div>
        
    )
}

export default Items
