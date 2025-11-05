import React from 'react'
import { FaUserFriends, FaMapMarkerAlt, FaBoxOpen, FaCalendarAlt } from 'react-icons/fa'

const features = [
  { icon: <FaUserFriends />, title: 'People', desc: 'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.', cta: 'Connect' },
  { icon: <FaMapMarkerAlt />, title: 'Place', desc: 'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.', cta: 'Meet up' },
  { icon: <FaBoxOpen />, title: 'Product', desc: 'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.', cta: 'Get it' },
  { icon: <FaCalendarAlt />, title: 'Program', desc: 'Find events, meetups and workshops related to your hobby. Register or buy tickets online.', cta: 'Attend' },
]

export default function Features(){
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((f, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card feature-card h-100">
                <div className="card-body d-flex align-items-start">
                  <div className="feature-icon me-3">{f.icon}</div>
                  <div className="flex-grow-1">
                    <h5 className="card-title">{f.title}</h5>
                    <p className="card-text text-muted small">{f.desc}</p>
                    <button className="btn btn-sm btn-outline-accent mt-2">{f.cta}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
