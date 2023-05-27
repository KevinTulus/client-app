import { useState, useEffect } from "react";


export default function Login() { 
    const url = ""
    const [token, setToken] = useState([])

    const login = () => {
        const myData = {
            // name: 'hara',
            email: 'kevintulussilitonga@gmail.com',
            password: '12345678',
            // password_confirmation: '123456',
        }
        fetch("http://localhost:8000/api/angkot/login", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(response => {
          return response.json()
        })
        .then(data => {
        //   setAngkot(data.data)
          console.log(data);
        })
    }
    
    useEffect(function() {
      login()
    }, [])
    return (
        <div>
            <form>
                <input placeholder="name" type="text" name="name" id="name"></input>
                <input placeholder="email" type="text" name="email" id="email"></input>
                <input placeholder="password" type="password" name="password" id="password"></input>
                <input placeholder="password_confirmation" type="password" name="password_confirmation" id="password_confirmation"></input>
            </form>
        </div>
    );
}