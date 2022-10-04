import React from 'react'
import ItemListContainer from '../components/containers/ItemListContainer'
//Components
import SlideShow from '../components/slideShow/SlideShow'

const Home = () => {
  return (
    <>
    <SlideShow/>
    <ItemListContainer greeting="TODOS LOS PRODUCTOS"/>
    </>
  )
}

export default Home