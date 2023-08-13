import React from 'react'
import Nav from '../components/Nav'
import Movies from '../components/Movies'

function MoviesPage() {
  return (
    <div className='flex flex-col'>
        <Nav/>
        <Movies/>
    </div>
  )
}

export default MoviesPage