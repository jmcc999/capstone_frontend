import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const ScriptView = (props) => {
    let [script, setScript] = useState({});
    let {id} = useParams()
    
    let baseUrl = 'http://localhost:8000'

    const getOneScriptById = (id) => {
        // fetch to the backend
        fetch(baseUrl + "/api/v1/scripts/" + id,{
          credentials: "include"
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
          console.log(data.data)
          setScript(data.data)
        })
      }

      useEffect(()=>{
        getOneScriptById(id)
      },[])

    return(
        <>
        <img src="https://cdn0.iconfinder.com/data/icons/script-and-cat-4/64/12-siberian_husky-canine-puppy-pets-avatar-animals-animal-script-512.png"></img>
        <h1>{script.name}</h1>
        <h2>Breed:</h2><h3>{script.breed}</h3>
        <h2>Owner:</h2><h3>{script.owner}</h3>
        </>
    )
}

export default ScriptView