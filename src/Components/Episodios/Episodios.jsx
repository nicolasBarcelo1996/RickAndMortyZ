import React, {useState, useEffect} from 'react'
import '../MapAll.css'   
import axios from 'axios'

import DisplayEpisodios from './DisplayEpisodios'

function Episodios() {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)
   
   
   
    useEffect(()=>{
        const fetchEpisodios = async () => {
            setCargando(true)
            const result = await axios(`https://rickandmortyapi.com/api/episode/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]`)
            
            console.log(result.data)
   
            setItems(result.data);
            setCargando(false);
   }
   fetchEpisodios();
     
    }, [])


    return (
        <div className="content">
            <DisplayEpisodios items={items} cargando={cargando}  />
        </div>
    )
}

export default Episodios
