import { useState ,useEffect} from "react";
import CockTailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import {getAllDrinks} from '../DataFactory/ApiCalls.js'
function Home() {
  const [searchVal,setSearchVal] = useState('')
  const [drinks,setDrinks] = useState([])
 
  const onchangeHandler = (val)=>{
    setSearchVal(val)
  }

  useEffect(async ()=>{
    const data = await getAllDrinks(searchVal)
    setDrinks(()=>data.drinks)
    },
    [searchVal])
  return (
    <div>
      <SearchForm searchVal = {searchVal} setSearchVal = {onchangeHandler} />
      <CockTailList  drinks = {drinks} />
    </div>
  );
}

export default Home;
