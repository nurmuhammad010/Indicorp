import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProducInfo() {
    const ProducInfo = useLocation()
  return (
    <div>
      <h1>{ProducInfo.state.fullInfo.name}</h1>
    </div>
  )
}


