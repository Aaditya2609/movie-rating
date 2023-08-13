import React from 'react'
import Nav from '../components/Nav'
import SingleMovie from '../components/SingleMovie'

function SingleMoviePage() {
  return (
    <div className='flex flex-col'>
        <Nav/>
        <div className='flex items-center justify-center'>
        <SingleMovie />
        </div>
    </div>
  )
}

export default SingleMoviePage