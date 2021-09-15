import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) =>{
    const [pokeData, setPokeData] = useState([])

    // useEffect(() =>{
    //     axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
    //         .then(response=>{
    //             console.log(response)
    //             setPokeData(response.data.results)
    //         })
    // }, []);

    const clickHandler = ()=>{
        console.log("clicked!")
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response=>{
            console.log(response)
            setPokeData(response.data.results)
    })}
    
    return (
        <div>
            <button onClick= {clickHandler} className="btn btn-success">Fetch Pokemon</button>
            {
                pokeData.map((poke, idx)=>{
                    return <div style = {{backgroundColor: "gray"}} key = {idx} className="card">
                    <div className="card-body">
                    <h4 className="card-title">{poke.name}</h4>
                    {/* <img src={coin.image} alt="" /> */}
                    {/* <a href="#!" className="btn btn-primary mb-3">Go somewhere</a> */}
                    </div>
                </div>
                })
            }
        </div>
    );
}

export default Pokemon