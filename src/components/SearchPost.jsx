import React from 'react'
import NavBar from './NavBar'

const SearchPost = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>SEARCH POST CENTRE</b></h1></center><br />
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">POST CENTRE</label>
                    <input type="text" className="form-control" />
                    <br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-secondary">SEARCH</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPost