import React from 'react'
import NavBar from './NavBar'

const AddPost = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>POST APPLICATION</b></h1></center>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">POST ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">POST CENTRE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PINCODE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TYPE OF POST</label>
                            <select name="" id="" className="form-control">
                                <option value="speed post">speed post</option>
                                <option value="express post">express post</option>
                                <option value="media post">media post</option>
                                <option value="logistics post">logistics post</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">BODY</label>
                            <textarea name="" id="" className="form-control">Type Here</textarea>
                            <br />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-success">REGISTER</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost