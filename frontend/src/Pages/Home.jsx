import React from 'react'
import HeroSection from '../components/HeroSection'
import Qualities from '../components/Qualities'
import About from '../components/About'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/footer'

const Home = () => {
    return (
        <>
            <HeroSection/>
            <About/>
            <Qualities/>
            <Menu/>
            <WhoAreWe/>
            <Team/>
            <Reservation/>
            <Footer/>
        </>
    )
}

export default Home