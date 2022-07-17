
import {useNavigate} from 'react-router-dom'
import React,{useState} from 'react'
import {useParams} from 'react-router-dom'

function EditUser(props){
	let params = useParams();
  let [firstName,setFName] = useState(props.data.user[params.id].firstName)
  let [lastName,setLName] = useState(props.data.user[params.id].lastName)
  let [email,setEmail] = useState(props.data.user[params.id].email)
  let [dob,setDOB] = useState(props.data.user[params.id].dob)
  let [mobile,setMobile] = useState(props.data.user[params.id].mobile)
  let [location,setLocation] = useState(props.data.user[params.id].location)

  let navigate = useNavigate()

  let handleSubmit = ()=>{
    let data = {
      firstName,
      lastName,
      email,
      dob,
      mobile,
      location
    }
    let user = [...props.data.user]

    user.splice(params.id,1,data)

    props.data.setUser(user)
    navigate('/')
    
  }

	return (
		<div>
			<form>
			  <div className="mb-3">
			    <label  className="form-label">First Name</label>
			    <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setFName(e.target.value)} />
			  </div>
			  <div className="mb-3">
			    <label className="form-label">Last Name</label>
			    <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setLName(e.target.value)}/>
			  </div>
			  <div className="mb-3">
		        <label>Email</label>
		        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
		      </div>

		      <div className="mb-3">
		        <label>Mobile</label>
		        <input type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
		      </div>

		      <div className="mb-3">
		        <label>DOB</label>
		        <input type="date" placeholder="dd-mm-yy" value={dob} onChange={(e)=>setDOB(e.target.value)}/>
		      </div>

		      <div className="mb-3">
		        <label>Location</label>
		        <input type="text" placeholder="Enter Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
		      </div>
			  <button type="submit" className="btn btn-primary"  onClick={()=>handleSubmit()}>Submit</button>
			</form>
		</div>
	)
}

export default EditUser;