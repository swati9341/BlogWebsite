import React from 'react'
import Search from '../components/Search'
import introPost from '../components/introPost'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

function home() {
  return (
    <div>
        {/*header*/}
      <Header/>
      
      <Search/>
    <introPost/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default home
