import React from 'react';
import './index.css';

export default function RecepieTile({recipe}) {
    return (
          
        <div className="recepieTile">
        <img className="recepie_tile_image" src={recipe["recipe"]["image"]}/>
        {/* <p className="recepie_tile_name">{recipe["recipe"]["label"]}</p> */}
        <a className="recepie_tile_name" href={recipe["recipe"]["url"]} target="_blank">{recipe["recipe"]["label"]}</a>
        </div>
        
    
    )
}

