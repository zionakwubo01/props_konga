
import styled from 'styled-components'
import bed from "../assets/bedbig.webp"
import { useState } from 'react'
import data from "../Konga/data.json"
import { useParams } from 'react-router-dom'


const Bigpage = ()=>{

const Params:any= useParams()

const details = data[Params.id - 1]

const [count, setcount] = useState(1)

const Increment = ()=>{
    if(count < 7){
        setcount(count + 1)
    }
}
const Decrement = ()=>{
    if(count > 1){
        setcount(count - 1)
    }
}

    return(
        <div>
  <Container>
    <Wrapper>
<Imageholder>
<img src={details.img} alt="big bed " />
</Imageholder>
<Content>
    <Mouka>
  {details.Titles}
    </Mouka>
    <Code>
    Product Code: 5237955
    </Code>
    <Price>
   {details.Cprice}
    </Price>

    <Color>
    color:   gray
    </Color>
    <Size>
size
<Ft>6x6 feet</Ft>
    </Size>
    <Quantity>
        Quantity:
<Fu>
<Num onClick={Decrement}>
    -
</Num>
<Count>
    {count}
</Count>
<Num onClick={Increment}>
+
</Num>
</Fu>
    </Quantity>
    <Contact>
    Call us for bulk purchases:<br/>
Click here to show phone number
    </Contact>
    <button>BUY NOW</button>
</Content>
    </Wrapper>
  </Container>
        </div>
    )
}

export default Bigpage; 
const Fu = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`
const Count = styled.div`
`
const Num = styled.div`
    font-size: 20px;
    height: 20px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
`
const Quantity = styled.div`
display: flex;
align-items: center;
/* justify-content: space-between; */
flex-direction: row;
gap: 20px;
`
const Contact = styled.div`
font-size: 13px;
`
const Ft = styled.div`
height: 30px;
width: 60px;
background-color: gray;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
color: white;
font-size: 12px;
`
const Size = styled.div`
    font-size: 15px;
    display: flex;
    gap: 20px;
    flex-direction: row;
`
const Color = styled.div`
font-size: 15px;
`
const Price = styled.div`
font-weight: bold;
font-size: 20px;
`
const Code = styled.div`

`
const Mouka = styled.div`
    font-size: 30px;

`
const Content = styled.div`
gap: 30px;
    height: 80%;
    width: 40%;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
button{
    height: 40px;
    width: 250px;
    background-color: #0fdd9f;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    border:0;
    border-radius: 10px;
}
`
const Imageholder = styled.div`
height: 100%;
width: 50%;
img{
    height: 100%;
    width: 100%;
}

`
const Wrapper= styled.div`
    height: 78%;
    width: 78%;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid black;

`

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
`