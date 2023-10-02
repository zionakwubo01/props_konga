import styled from "styled-components";

interface iProps{
    img?: string
    Titles: string
    Cprice: number
    Oprice: number
    percent:string
    save: string
}
const Kongacards = ({img, Titles, Cprice, Oprice, percent,save}:iProps)=>{
    return(
        <div>
<Container>
<Imagehold>
    <img src={img} alt="stock" />
</Imagehold>
<Content>
    <Title>{Titles}</Title>
    <Price>
        <Currentprice>#{Cprice}</Currentprice>
        <Oldprice>#{Oprice}</Oldprice>
        <Percentege>
            {percent}%
        </Percentege>
      
    </Price>
    <Discount>{save}</Discount>
</Content>
</Container>
        </div>
    )
}

export default Kongacards;
const Currentprice = styled.div`
font-weight: bolder;
font-size: 21px;
`
const Oldprice = styled.div`
font-size: 15px;
/* display: ; */
`
const Percentege = styled.div`
height: 25px;
width:45px;
background-color: #fd01014e;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
border-radius: 5px;
`
const Title = styled.div`
font-size: 14px;
`
const Discount = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
font-size: 15px;
font-weight: bold;
color: green;
margin-right: 73px;
`
const Price = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
gap: 5px;
`

const Imagehold = styled.div`
height: 90px;
width: 120px;
/* background-color: red; */
img{
    height: 100%;
    width: 100%;
}
`
const Content = styled.div`
display: flex;
align-items: center;
gap: 20px;
flex-direction: column;
`
const Container = styled.div`
height: 160px;
width: 420px;
background-color: white;
display: flex;
align-items: center;
/* justify-content: space-between; */
flex-direction: row;
gap: 20px;
border-radius: 10px;
padding-left: 30px;
box-shadow: rgba(99, 99, 99, 0.2) 1px 2px 5px 1px;
&:hover{
    transform: scale(1.05);
    transition: all 450ms ease-in-out;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.22) 0px 2px 10px 0px;
   }
`