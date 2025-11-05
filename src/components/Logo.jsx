import React from 'react'

export default function Logo({height=40}){
  return (
    <svg height={height} viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HobbyCue logo">
      <defs>
        <style>{`.wordmark{font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight:700; font-size:24px; fill: var(--accent);}`}</style>
      </defs>
      <g>
        <circle cx="20" cy="20" r="14" fill="var(--accent)" opacity="0.12" />
        <text x="48" y="26" className="wordmark">HobbyCue</text>
      </g>
    </svg>
  )
}
