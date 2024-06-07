import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewPost = () => {
  const [data,setdata]=useState(

    [
        {"postid":102,"name":"sree","type":"speed"},
        {"postid":103,"name":"priya","type":"logistics"},
        {"postid":104,"name":"anna","type":"expree"},
        {"postid":105,"name":"sreya","type":"speed"},
        {"postid":106,"name":"anu","type":"logistics"},
        {"postid":107,"name":"ananya","type":"media"},
        {"postid":108,"name":"hari","type":"speed"},
        {"postid":109,"name":"rohith","type":"express"},
        {"postid":110,"name":"amal","type":"speed"},
        {"postid":111,"name":"neha","type":"media"},
        {"postid":112,"name":"niya","type":"logistics"},
        {"postid":113,"name":"anet","type":"speed"},
        {"postid":115,"name":"sreedevi","type":"express"}
    ]


  )
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
      <th scope="col">POST ID</th>
      <th scope="col">NAME</th>
      <th scope="col">TYPE OF POST</th>
    </tr>
  </thead>
 {data.map(
  (value, index) => {
    return  <tbody>
    <tr>
      <td>{value.postid}</td>
      <td>{value.name}</td>
      <td>{value.type}</td>
    </tr>
    
  </tbody>
  }
 )

 }
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPost