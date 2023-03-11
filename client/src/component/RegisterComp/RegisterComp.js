import React from 'react';
import "./registercomp.css";

export default function RegisterComp() {
  return (
    <div className='container'>
        <form className='rounded-4 p-2 bg-secondary' >
            <div className='row'>  
            <h3 className='text-center p-3'>Register</h3>
                <div className='col p-2'>
                    <div className='form-group'>
                        <label className='p-2' >UserName</label>
                        <input className="input" type="text" name="username" placeholder='Username'/>
                    </div>
                    <div className='form-group'>
                        <label className='p-2'>Email</label>
                        <input className="input" type="email" name="email" placeholder='Email'/>
                    </div>
                    <div className='form-group '>
                        <label className='p-2'>Password</label>
                        <input className="input" type="password" name="password" placeholder='Password'/>
                    </div>
                    <div className='form-group p-2'>
                        <label className='p-2'>Confirm Password</label>
                        <input className="input" type="confirm password" name="confirm password" placeholder='Confirm Password'/>
                    </div>
                    <div className='form-group p-3'>
                    <button className='btn bg-success'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
  )
}
