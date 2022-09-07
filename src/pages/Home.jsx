import React from 'react'
import ItemListContainer from '../components/containers/ItemListContainer'
//Components
import SlideShow from '../components/slideShow/SlideShow'

const Home = () => {
  return (
    <>
    <SlideShow/>
    <ItemListContainer greeting="Hola Bienvenidos a mi e-commerce"/>
    </>
  )
}

export default Home