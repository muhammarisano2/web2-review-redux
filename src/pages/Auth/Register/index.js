import React from 'react'
import styles from './register.module.css'

const Register = () => {
  return (
    <div>
        <h1 className='text-center'>Page Login</h1>
        <div className={styles.formInput}>
            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="text" name="email" id='email' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">FullName</label>
                <input type="fullname" name="fullname" id="fullname" className='form-control' />
            </div>
            <button className='btn btn-primary'>Login</button>
            </div>
    </div>
  )
}

export default Register