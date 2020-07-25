import React from 'react'
import '../MapAll.css' 

function Items({item}) {
    return (
        <div className='card'>
        <div className='cardIn'>
          <div className='cardFront'>
            <img src={item.image} alt='' />
          </div>
          <div className='cardBack'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Gender:</strong> {item.gender}
              </li>
              <li>
                <strong>Location:</strong> {item.location.name}
              </li>
              <li>
                  <strong>Status:</strong>{item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Items
