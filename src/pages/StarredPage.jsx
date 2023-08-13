import React from 'react'
import Nav from '../components/Nav'
import Starred from '../components/Starred'

function StarredPage() {
  return (
    <div className='flex flex-col'>
    <Nav />
    <Starred/>
    </div>
  )
}

export default StarredPage