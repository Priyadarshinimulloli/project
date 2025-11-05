import React from 'react'
import signIllustration from '../assets/Group 27.png'
import SignIn from './SignIn'

export default function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h1 className="display-6">Discover a new <span className="text-primary">hobby</span> today</h1>
            <p className="lead text-muted">Explore curated activities, classes and events near you. Learn, connect and grow.</p>
            <img src={signIllustration} alt="illustration" className="img-fluid hero-illustration mt-4" />
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  )
}

