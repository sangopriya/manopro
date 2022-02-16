import React,{useState} from 'react';
import './Signinform.scss';
import * as AiIcons from 'react-icons/all';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



function Signinform() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(){
        try {
          const data = axios.post("https://crud-operation-auth.herokuapp.com/signin" ,{
            
            email,
            password
          })
          console.log("successfully stored",data)
          navigate('/dashboardview')
    
        } catch (error) {
          console.log("Error" , error)      
        }
      }

  return (
    <div>
        <div className='overall_conatiner_signin'>
            <div className="inner_container_signin">
                <div className="login_container">
                    <div className="head"><p>Sign in</p></div>
                    <form>
                        <div className="form_body">
                            <div className="form_row">
                                <div className='iconalign'><AiIcons.FaRegUserCircle /></div>
                                <input type="email" className='txtboxes' placeholder='Email@address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div className="form_row">
                                <div className='iconalign'><AiIcons.RiLockPasswordLine /></div>
                                <input type="password" className='txtboxes' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>
                            <div className="btnbody">
                                <button className='btn' onClick={onSubmit}>Sign in</button>
                            </div>
                            <div className='registerlink'>
                               <Link to={'/signup'}><p>Already have an account .?</p></Link> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signinform