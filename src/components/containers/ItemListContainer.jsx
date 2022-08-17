import styled from "styled-components"

const ItemListContainer = ({greeting}) => {
  return (
    <Container>{greeting}</Container>
  )
}

export default ItemListContainer

const Container = styled.div`
text-align: center;
font-size: 2rem;
margin-top: 2rem;
`