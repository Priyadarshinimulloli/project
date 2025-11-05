import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function AddYourOwn(){
  return (
    <section className="py-5 bg-soft-blue">
      <div className="container">
        <div className="card callout p-4">
          <div className="d-flex align-items-start">
            <div className="callout-icon me-3"><FaPlus /></div>
            <div>
              <h5 className="mb-2">Add your own</h5>
              <p className="text-muted">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
              <button className="btn btn-sm btn-outline-accent mt-2">Add new</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
