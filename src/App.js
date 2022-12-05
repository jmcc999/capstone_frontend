import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginUser from './components/LoginUser'
import RegisterUser from './components/RegisterUser'
import ScriptContainer from './components/ScriptContainer'
// import Footer from './components/Footer'
import ScriptView from './components/ScriptView'


let baseUrl = 'http://localhost:3001'

export default function App() {
  const [scripts, setScripts] = useState([])
  const [oneScript, setOneScript] = useState({})

  const navigate = useNavigate()

  const getScripts = () => {
    // fetch to the backend
    fetch(baseUrl + "/scripts", {
      // credentials: "include"
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        console.log(data.data)
        setScripts(data.data)
      })
  }


  const loginUser = async (e) => {
    console.log('loginUser')
    console.log(e.target.email.value)
    e.preventDefault()
    const url = baseUrl + '/user/login'
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
    try {

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })

      console.log(response)
      console.log("BODY: ", response.body)

      if (response.status === 200) {
        getScripts()
        navigate("scripts")
        
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const register = async (e) => {
    e.preventDefault()
    console.log(e.target)
    const url = baseUrl + '/user/register'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
          email: e.target.email.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 201) {
        console.log("worked register")
        getScripts()
        navigate("login") 
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const handleAddScript = (script) => {
    const copyScript = [...this.state.scripts]
    copyScript.unshift(script)
    this.setState({script: copyScript})
  }

  const handleDelete = (id) => {
		fetch(baseUrl + id, {
			method: 'DELETE',
			credentials: "include"
		}).then( res => {
			const copyScript = [...this.state.scripts];
			const findIndex = this.state.scripts.findIndex(
					(script) => script._id === id
				);
			 copyScript.splice(findIndex, 1);
			 this.setState({ scripts: copyScripts });
		})
	}

  useEffect(() => {
    getScripts()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterUser register={register} />} />
        <Route path="login" element={<LoginUser loginUser={loginUser} />} />
        <Route path="scripts" element={<ScriptContainer scripts={scripts} />} />
        <Route path="/scripts/:id" element={<ScriptView />} />
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}
