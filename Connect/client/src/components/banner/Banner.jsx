import {Box, styled} from "@mui/material";
import banner from '../../images/connect.png'

const Container = styled(Box)`
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled('img')({
    width: '80%',
    height: '25vh',
   
})

// const Heading = styled(Typography)`
//     font-size: 70px;
//     color: #F79327;
    
// `
// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     color: #F79327;
    
// `
const Banner = () =>{
    return(
        <Container>
            <Image src={banner} /> 
        </Container>
    )
}

export default Banner;