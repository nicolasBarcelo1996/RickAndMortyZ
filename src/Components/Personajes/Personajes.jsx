import React, {useState, useEffect} from 'react'
import '../MapAll.css'   
import axios from 'axios'
import DisplayPersonajes from './DisplayPersonajes'

function Personajes() {
 const [items, setItems] = useState([])
 const [cargando, setCargando] = useState(true)



 useEffect(()=>{
     const fetchPersonajes = async () => {
         setCargando(true)
         const result = await axios(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20,21,22,23,24
         ,25,26,27,28,29,30,31,32,33,34,35,36,38,40,41,42,43,44,46
         ,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,69,70,71,72,73`)
         
         console.log(result.data)

         setItems(result.data);
         setCargando(false);
}
     fetchPersonajes();
  
 }, [])

    return (
        <div className="content">
            <DisplayPersonajes items={items} cargando={cargando} />
        </div>
    )
}

export default Personajes;
