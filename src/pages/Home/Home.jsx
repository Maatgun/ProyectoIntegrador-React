import React from 'react'
import { HomeContainerStyled } from './HomeStyle'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <HomeContainerStyled>
        <Hero/>
    </HomeContainerStyled>
  )
}

export default Home