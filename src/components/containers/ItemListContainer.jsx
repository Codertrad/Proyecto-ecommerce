import styled from "styled-components"

const ItemListContainer = ({greeting}) => {
  return (
    <Container>{greeting}</Container>
  )
}

export default ItemListContainer

const Container = styled.div`
position: relative;
text-align: center;
font-size: 2rem;
margin-top: 2rem;
z-index: -1000;
`