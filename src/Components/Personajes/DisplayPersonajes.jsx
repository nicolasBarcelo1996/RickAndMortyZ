import React from 'react'
import '../MapAll.css' 
import Items from './Items' 

import CircularProgress from '@material-ui/core/CircularProgress';

const ItemsCard = ({items, cargando}) =>{
    return cargando ? (<CircularProgress style={{color: 'red', height: '200px', width: '100px'}} />) :  (
         <section className='cards'>
          {items.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </section>
      )
}



export default ItemsCard
