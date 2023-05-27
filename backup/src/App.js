import { useState, useEffect } from "react";
import Angkot from "./Angkot";
import Search from "./components/Search";
import Login from "./components/Login";
import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';

export default function App() {
  const [angkots, setAngkot] = useState([]);

  const fetchAngkotData = () => {
    const headers = { 'Authorization': 'Bearer 14|rMdRjJndkRQiQ4sMvDhUWhZz04DZUw1myE87u47D' };
    fetch("http://localhost:8000/api/angkot", { headers })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setAngkot(data.data)
      // console.log(data.data);
    })
  }

  const fetchOneAngkot = () => {
    const headers = { 'Authorization': 'Bearer 14|rMdRjJndkRQiQ4sMvDhUWhZz04DZUw1myE87u47D' };
    fetch("http://localhost:8000/api/angkot/"+1, { headers })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setAngkot(data.data)
      // console.log(data.data);
    })
  }

  useEffect(function() {
    fetchAngkotData()
  }, [])
  
  return (
    <div className="container">
      <Search angkot={angkots}/>
      <Login/>
      <Grid container spacing={0} sx={{ p:2, width:1000 }}>
        {angkots.length > 0 && (angkots.map(angkot => (
            <Grid key={angkot.no} item xs={3}>
              <Angkot angkot={angkot} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}