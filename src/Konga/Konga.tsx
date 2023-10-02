
import styled from "styled-components"
import Kongacards from "./Kongacards";
import data from "../Konga/data.json"
import { Link } from "react-router-dom";


const Konga = ()=>{
    return(
        <div>
<Container>
    <Wrapper>
       {
        data.map((el)=>(
           <Wrap  to={`/details/${el.id}`} key={el.id}>
             <Kongacards
          
            img={el.img}
            Cprice={el.Cprice}
            Oprice={el.oprice}
            Titles={el.Titles}
            percent={el.percent}
            save={el.save}
            />
           </Wrap>
        ))
       }
    </Wrapper>
</Container>
        </div>
    )
}
export default Konga;
const Wrap = styled(Link)`
text-decoration: none;
color: black;
`

const Wrapper = styled.div`
height: 60%;
width: 100%;
  display: flex;
    align-items: center;
    justify-content: center;
flex-wrap: wrap;
    flex-direction: row;
   gap: 30px;
   /* background-color: green; */
`
const Container = styled.div`
    height: 600px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: spa;
    flex-direction: row;
   gap: 30px;
 
`