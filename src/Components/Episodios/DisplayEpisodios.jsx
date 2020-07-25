import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import Items from './Items'

function DisplayEpisodios({items, cargando}) {
    return cargando ? (<CircularProgress style={{color: 'red', height: '200px', width: '100px'}} />) : <section>
        {items.map(item =>(
            <Items key={item.id} item={item}/>
        ))}
    </section>
}

export default DisplayEpisodios
