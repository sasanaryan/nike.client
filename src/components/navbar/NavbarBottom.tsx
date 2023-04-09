
import styled from '@emotion/styled'
import { Typography } from '@mui/material';
import { useState , useEffect } from "react";


const Container = styled.div`
display: flex;
height: 70px;
background-color: #f7f7f7;
align-items: center;
overflow: hidden;
`

type IWrapper ={
  slideIndex:number
}
const Wrapper = styled.div<IWrapper>`
display: flex;
transition: all 1s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const NavbarBottom = () => {
    const [slideIndex,setSlideIndex] = useState<number>(0);
   
        useEffect(() => {
            const intervalIndex = setInterval(() => {
                setSlideIndex((prev) => prev > 0 ? prev - 1 : 1);
            }, 6000);
            return () => {
              clearInterval(intervalIndex);
            };
          }, [slideIndex]);
    
  return (
        <Container>
            <Wrapper slideIndex={slideIndex}>
            <Slide>
                <Typography sx={{width: '400px' , height: '50px'}}>{`FREE SHIPPING + RETURNS,
                MEMBERSHIP, EXCLUSIVE PRODUCTS`}</Typography>
            </Slide>
            <Slide>
                <Typography >{`NEW MARKDOWNS: UP TO 40% OFF	 
                Shop just-reduced styles—no code needed.`}</Typography>
            </Slide>
        </Wrapper>
        </Container>
  )
}

export default NavbarBottom
