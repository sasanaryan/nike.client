
import { icons } from '../../data/data';
import {mobile , tablet} from '../../theme'
import { Divider, Typography } from '@mui/material';
import {  Stack } from '@mui/system';
import NavbarMiddle from './NavbarMiddle';
import NavbarBottom from './NavbarBottom';
import styled from '@emotion/styled'

const Container = styled.div`
background-color: #f7f7f7;
height: 40px;
${tablet({ display: "none" })}
${mobile({ display: "none" })}
`;

const MenuIt = styled.span`
text-decoration: none;
position : relative;
cursor: pointer;
margin-left: 25px;
text-decoration:none;
&:hover {
    color: gray;
  }
${mobile({ fontSize: "12px", marginLeft: "20px" , right: "5px" })}
`;

const Logo = styled.img`
margin: 0px 5px 0px 5px;
position :relative;
top:0px;
height: 20px;
font-weight: bold;
${mobile({ fontSize: "24px" })}
`;


const Navbar = () => {

  
  return (
    <Stack direction="column">

<Container>
      <Stack direction='row' justifyContent='space-between' alignItems="center" margin='7px 15px 0 15px'>
       <Stack direction='row'>
        <Logo src={icons.icon1}/>
        <Logo src={icons.icon2}/>
       </Stack>
       
        <Stack direction="row"
               divider={<Divider orientation="vertical" flexItem />}
               spacing={2} >
        <MenuIt>
          <Typography sx={{fontSize:'12px', fontWeight: 'Medium'}}>Find a Store</Typography>
         </MenuIt>
         <MenuIt >
          <Typography sx={{fontSize:'12px', fontWeight: 'Medium'}}>Help</Typography>
         </MenuIt>
         <MenuIt >
          <Typography sx={{fontSize:'12px', fontWeight: 'Medium'}}>Join Us</Typography>
         </MenuIt>
         <MenuIt >
          <Typography sx={{fontSize:'12px', fontWeight: 'Medium'}}>Sign In</Typography>
         </MenuIt>
        </Stack>
      </Stack>
    </Container>
    <NavbarMiddle />
    <NavbarBottom />
    </Stack>
  );
};

export default Navbar;


