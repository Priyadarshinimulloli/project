import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import audioTrackImg from '../assets/Audio Track.png'
import avatar1 from '../assets/Group 99.png'
import avatar2 from '../assets/Group 108.png'

export default function Testimonials(){
  return (
    <section className="py-5 testimonial-section">
      <div className="container">
        <div className="testimonial-card p-4">
          <div className="d-flex align-items-start">
            <div className="quote-icon me-3"><FaQuoteLeft /></div>
            <div className="flex-grow-1">
              <h5 className="mb-2">Testimonials</h5>
              <p className="text-muted">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>

              <div className="d-flex align-items-center mt-3">
                <div className="audio-mock me-3" role="group" aria-label="Testimonial audio">
                  <button className="audio-play" aria-label="Play testimonial">▶</button>
                  <img src={audioTrackImg} alt="audio waveform" className="audio-track-img ms-3" />
                  <div className="audio-time ms-3">0:28</div>
                </div>

                <div className="d-flex align-items-center ms-auto">
                  <img src={avatar1} alt="SJ" className="avatar-img" />
                  <img src={avatar2} alt="SG" className="avatar-img ms-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
