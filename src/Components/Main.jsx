import React from 'react'

import './Main.css'
import { BrowserRouter as Router, Switch, Link,Route} from 'react-router-dom'
import Personajes from './Personajes/Personajes'
import Episodios from './Episodios/Episodios'
import Lugares from './Lugares/Lugares'
import Header from './Header'


function Main() {
 
    return(
        <div className="mainContainer">
            <Header/>
            <Router>
            <div className="navBar">

            <Link to="/Personajes">Characters</Link>
            <Link to="/Episodios">Episodes</Link>
            <Link to="/Lugares">Locations</Link>
            </div>
              
     
            
     
      <Switch>
      <Route path="/" exact component={""} />
      <Route path="/personajes"  component={Personajes} />
      <Route path="/Episodios"  component={Episodios} />
      <Route path="/Lugares"  component={Lugares} />
      </Switch>
      </Router>
        </div>
      )
    
}

export default Main
