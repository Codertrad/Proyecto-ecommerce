import Item from "../item/Item"
import styled from "styled-components"

const ItemList = ({articulos}) => {

  return (
    <ContainerProducts>
    <div className="container">{
      articulos.map((articulo)=>{
         return <Item articulo={articulo}/>
      })
    }</div>
    </ContainerProducts>
  )
}

export default ItemList

const ContainerProducts = styled.div`
@media (min-width: 768px) {
   .container{
      display: flex;
      justify-content: space-evenly;
   }
}
`