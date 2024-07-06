import { AppBar, Toolbar, styled } from "@mui/material";
import {Link} from 'react-router-dom'

const Component = styled(AppBar)`
    background: #F79327;
    color: #CCC5B9;
`

const Container = styled(Toolbar)`
    justify-content: center;
    width:40%;
    margin:0 auto;
    align-items:center;
    justify-content: space-around;
    display: flex;
    & > a{
        padding: 20px;
        color: white;
     
       
        
        postion: relative;
       font-family: 'Poppins',sans-serif;
    }
`

const LinkButton = styled(Link)`
    width: 5%;
    text-decoration: none;
    &:hover{
        color: #000;
        font-weight: 1000;
        text-decoration:underline;
    }
`

const Header = ()=>{
    return(
        <Component>
            <Container>
                <LinkButton className="navLinks"  to='/'>Home</LinkButton>
                <LinkButton className="navLinks" to='/about'>About</LinkButton>
                <LinkButton className="navLinks" to='/contact'>Contact</LinkButton>
                <LinkButton className="navLinks" to='/login'>Logout</LinkButton>
            </Container>
        </Component>
    )
}

export default Header