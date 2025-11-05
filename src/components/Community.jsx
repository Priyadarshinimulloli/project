import React from 'react'
import illustration from '../assets/Group 99.png'

export default function Community(){
  return (
    <section className="py-5 community-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="community-title">Your <span className="text-accent">Hobby</span>, Your <span className="text-highlight">Community</span>...</h2>
            <p className="text-muted">Join people nearby who share your interests — classes, meetups, listings and more. Get started and be part of the hobbycue community.</p>
            <button className="btn btn-sm btn-outline-accent mt-3">Get started</button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={illustration} alt="community" className="img-fluid community-illustration" />
          </div>
        </div>

        <div className="row mt-4 footer-links">
          <div className="col-6 col-sm-3">
            <h6>Hobbycue</h6>
            <ul className="list-unstyled small text-muted">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-6 col-sm-3">
            <h6>How Do I</h6>
            <ul className="list-unstyled small text-muted">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Post a Query</li>
            </ul>
          </div>
          <div className="col-6 col-sm-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small text-muted">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="col-6 col-sm-3">
            <h6>Social Media</h6>
            <div className="small text-muted">(icons)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
