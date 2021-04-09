import React, { useState } from 'react'
import axios from 'axios';
import './index.css';
import RecepieTile from './RecepieTile';

const App = () =>{

    const [query,setQuery] = useState("");
    const [recipes,setRecipes] = useState([]);

    // const YOUR_APP_ID = add your app id;
    // const YOUR_APP_KEY = add your app key;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&health=alcohol-free`;

    const getData = async() =>{
        const result = await axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data);
    }

    const submit = (e) =>{
        e.preventDefault();
        getData();
    }
    return(
        <>
        <div className="app_center">
            <h1>Food Receipe Search 🍔</h1>
            <form className="app_form" onSubmit={submit}>
                <input className="add_input" type="text" placeholder="Enter Ingridents" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <input className="add_submit" type="submit" value="Search"/>
            </form>

            <div className="col-10">
            <div className="app_recepies">
                {recipes.map((recipe)=>{
                    return <RecepieTile recipe={recipe}/>
                })}
            </div>
            </div>
            
        </div>
           
        </>
    )
}

export default App;