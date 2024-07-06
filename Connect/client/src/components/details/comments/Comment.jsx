import { useContext, useEffect } from "react"
import { Box, Typography, styled } from "@mui/material"
import { Delete } from "@mui/icons-material"
import { DataContext } from "../../../context/DataProvider"
import { API } from "../../../service/api"
const Component=styled(Box)`
    margin-top: 30px;
    background-color: #F5F5F5;
    padding: 10px;
`
const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;

`

const Name = styled(Typography)`
    font-weight: bold;
    font-size: 18px;
    margin-right: 20px;
`
const StyledDate = styled(Typography)`
    color: #878787;
    font-size: 14px;
`

const DeleteIcon = styled(Delete)`
    margin-left: auto;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        color: red;
        background-color: #F7C3C5;
    }
`

const Comment = ({comment,setToggle}) =>{


    const{account} = useContext(DataContext)

  
    const deleteComment = async () =>{

       let response = await API.deleteCommentById(comment._id)

    //    if(response.success){
            setToggle(prevState=> !prevState)
       

    }
    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                { comment.name === account.username && <DeleteIcon onClick={()=>deleteComment()} color='error'/> }
            </Container>
            <Box>
                <Typography>{comment.comments}</Typography>
               
            </Box>
        </Component>
    )
}

export default Comment