import styled from "styled-components"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all 1s ease;
    &:hover{
      transform: scale(0.95,0.95);
    }
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.img}/>
    </Container>
  )
}

export default CategoryItem