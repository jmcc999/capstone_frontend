import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const ScriptView = (props) => {
    let [scripts, setScript] = useState({});
    let {id} = useParams()
    
    let baseUrl = 'http://localhost:3001'

    const getOneScriptById = (id) => {
        // fetch to the backend
        fetch(baseUrl + "/scripts" + id,{
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
        <td onClick={() => this.handleDelete(holiday._id)}>X</td>
        <h1>{scripts.name}</h1>
        <h2>Pharmacy:</h2><h3>{scripts.Pharmacy}</h3>
        <h2>NDC</h2><h3>{scripts.NDC}</h3>

        </>
    )
}

export default ScriptView