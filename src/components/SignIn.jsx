import React, { useState } from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function SignIn(){
  const [show, setShow] = useState(false)

  return (
    <div className="card p-4 shadow-sm signin-panel" id="signin">
      <ul className="nav nav-tabs mb-3" role="tablist">
        <li className="nav-item" role="presentation"><button className="nav-link active">Sign In</button></li>
        <li className="nav-item" role="presentation"><button className="nav-link">Join In</button></li>
      </ul>

      <div className="d-grid gap-2 mb-3">
        <button type="button" className="btn btn-outline-secondary d-flex align-items-center gap-2 w-100" aria-label="continue with google">
          <FaGoogle size={18} aria-hidden="true" />
          <span className="flex-grow-1 text-start">Continue with Google</span>
        </button>
        <button type="button" className="btn btn-outline-primary d-flex align-items-center gap-2 w-100" aria-label="continue with facebook">
          <FaFacebook size={18} aria-hidden="true" />
          <span className="flex-grow-1 text-start">Continue with Facebook</span>
        </button>
      </div>

      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="flex-grow-1"><hr/></div>
        <div className="small text-muted">Or connect with</div>
        <div className="flex-grow-1"><hr/></div>
      </div>

      <form>
        <div className="mb-2">
          <input className="form-control" type="email" placeholder="Email" aria-label="Email" />
        </div>

        <div className="mb-2 position-relative">
          <input className="form-control" type={show? 'text': 'password'} placeholder="Password" aria-label="Password" />
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="btn btn-sm btn-link position-absolute top-50 end-0 translate-middle-y me-2"
            aria-pressed={show}
            aria-label={show? 'Hide password' : 'Show password'}
          >
            {show ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 small">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="small">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-dark w-100">Continue</button>
      </form>
    </div>
  )
}
