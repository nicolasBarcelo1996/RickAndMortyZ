import React, {useEffect, useState} from 'react'
import '../MapAll.css' 
import axios from 'axios'

import DisplayLugares from './DisplayLugares'
import foto1 from '../../img/1.png'
import foto3 from '../../img/3.png'
import foto2 from '../../img/2.png'



function Lugares() {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)
   
   
   
    useEffect(()=>{
        const fetchEpisodios = async () => {
            setCargando(true)
            const result = await axios(`https://rickandmortyapi.com/api/location/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42
        ,43,44,45,46,47,48,49,50,51,52,53,54,55]`)
            
            console.log(result.data)
   
            setItems(result.data);
            setCargando(false);
   }
   fetchEpisodios();
     
    }, [])


    return (
        <div className="content">
             <img className="fotoLugares1" src={foto1} alt=""/>
             <img className="fotoLugares3" src={foto3} alt=""/>
             <img className="fotoLugares2" src={foto2} alt=""/>

            <DisplayLugares  cargando={cargando} items={items} />
        </div>
    )
}

export default Lugares
