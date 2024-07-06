import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Connect</Typography>
                <Text variant="h5">Welcome to Connect, a blog posting application where users can share their thoughts and ideas on various topics!<br />
                At Connect, we believe in the power of sharing knowledge and experiences. Whether you're an aspiring writer, a passionate blogger, or someone who loves reading and engaging with content, Connect provides a platform for you to express yourself.
                    
                </Text>

            </Wrapper>
           
        </Box>
    )
}

export default About;











