import Item from "../item/Item"
import styled from "styled-components"

const ItemList = ({articulos}) => {

  return (
    <ContainerProducts>
    <div className="container">{
      articulos.map((articulo)=>{
         return <Item key={articulo.id} articulo={articulo}/>
      })
    }</div>
    </ContainerProducts>
  )
}

export default ItemList

const ContainerProducts = styled.div`
margin: 2rem auto;
@media (min-width: 768px) {
   .container{
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
   }
}
`