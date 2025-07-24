import React from 'react'
import Nav from '../Components/nav'
import Footer from '../Components/Footer'
import JobPoster from '../Components/JobPoster'
import CompanyCard from '../Components/CompanyCard'

const Home = () => {
  return (
    <div>
      <Nav/>
      <JobPoster/>
      <CompanyCard/>
      <Footer/>
    </div>
  )
}

export default Home
