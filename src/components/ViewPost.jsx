import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {
  const [data,setdata]=useState([])
  const fetchData=() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response)=>{
        console.log(response.data)
        setdata(response.data)
      }
    ).catch().finally()
  }
    useEffect(()=>fetchData(),[])
    return (
    <div>
      <NavBar/>
        <div className="container">
          <center><h1><b>DISPLAY POST ORDER</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table" border="3">
  <thead>
    <tr>
      <th scope="col">USER ID</th>
      <th scope="col">ID</th>
      <th scope="col">TITLE</th>
    </tr>
  </thead>
  <tbody>
 {data.map(
  (value, index) => {
    return <tr>
      <td>{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
    </tr>
    
  
  }
 )

 }
 </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPost