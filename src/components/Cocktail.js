import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import {getDrinkById} from '../DataFactory/ApiCalls'
export default function Cocktail(props)

{
  const [data,setData] = useState({})
  const {id} = useParams()
  useEffect(async()=>{
    const resp = await getDrinkById(id)
    setData(resp.drinks[0])
  },[])
  return (
    <div className="cocktail-center"> 
    <div className="cocktail" style={{border:'1px solid', width:'50%'}}>
      <div className="cocktailTitle">{data.strDrink}</div>
      <img src={data.strDrinkThumb} alt="Girl in a jacket" width="400" height="300" />
      
    
    </div>
  </div>
 
  )
}