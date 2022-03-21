import "./Cocktail.css";
import {useState,useEffect} from 'react'
import {getAllDrinks} from '../DataFactory/ApiCalls.js'
import { useHistory } from 'react-router-dom'
import { Link} from "react-router-dom";
import Cocktail from "./Cocktail.js";
function CockTailList({drinks}) {
  const history = useHistory();
  console.log('drinks',drinks)
  return (
    <section>
      <h2 className="cocktailTitle">Cocktails</h2>
      <div className="cocktail-center">
        <p> DIsplay Cocktails here..</p>
        {drinks.map((drink)=>{
          return (
          <div className="cocktail-center"> 
            <div className="cocktail" style={{border:'1px solid', width:'50%'}}>
              <div className="cocktailTitle">{drink.strDrink}</div>
              <img src={drink.strDrinkThumb} alt="Girl in a jacket" width="400" height="300" />
              
             <button onClick={()=>{
                  history.push(`/${drink.idDrink}`);
             }}>
               More Details...
             </button>
              
            </div>
          </div>
         
          )
        })}
      </div>
    </section>
  );
}

export default CockTailList;
