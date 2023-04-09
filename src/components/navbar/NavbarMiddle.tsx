import { Stack } from "@mui/system"
import styled from '@emotion/styled'
import { icons } from "../../data/data"
import { Badge, Typography } from "@mui/material"
import { Search } from "@mui/icons-material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
padding: 0px 30px 0px 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 70px;
background-color: #ffffff;
`
 const Logo = styled.img`
margin: 0px 5px 0px 5px;
position :relative;
top:0px;
height: 20px;
font-weight: bold;
`
const BadgeContent = styled.div`
position: absolute;
display: flex;
align-items: center;
top:2px;
font-size: 10px;
left: 10px;
`

const NavbarMiddle = ( ) => {
  return (
    <>
    <Container >
        <Logo src={icons.logo} />
      <Stack direction="row" justifyContent="space-around" spacing={2}  display= {{ md: 'none', xs: 'none'}}>
        <Typography>New & Featured</Typography>
        <Typography>Men</Typography>
        <Typography>Women</Typography>
        <Typography>Kids</Typography>
        <Typography>Accesories</Typography>
        <Typography>Sale</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-around" spacing={4} >
        <Search />
        <FavoriteBorderIcon sx={{ display: { md: 'none', xs: 'none'}}} />
        <Badge>
          <BadgeContent>
            <Typography fontSize="13px">
              1
            </Typography>
          </BadgeContent>
          <Logo src={icons.cart}  />
        </Badge>
        <MenuIcon sx={{ display: { xl: 'none'} , fontSize: '28px'}}/>
      </Stack>
    </Container>
    </>
  )
}

export default NavbarMiddle
