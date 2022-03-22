const drinks = []
export const getAllDrinks = async(val = '')=>{
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`
    const data = await fetch(url)
    const resp = await data.json()
    return resp
}
export const getDrinkById = async(id = '')=>{
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const data = await fetch(url)
    const resp = await data.json()
    console.log(resp);
    return resp
}