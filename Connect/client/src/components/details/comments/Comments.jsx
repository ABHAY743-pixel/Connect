import { useState, useContext, useEffect} from "react"
import { Box, styled, TextareaAutosize, Button} from "@mui/material"
import {DataContext} from "../../../context/DataProvider"
import Comment from "./Comment"

import { API } from "../../../service/api"

const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
    
`

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
})

const StyledText = styled(TextareaAutosize)`
    width: 100%;
    height: 100px;
    margin: 0px 20px;
    
`

const initialValues = {
    name: '',
    postId: '',
    comments: '',
    date: new Date()
}
const Commments = ({post}) =>{

    const url = 'https://static.thenounproject.com/png/12017-200.png'
    const [comment, setComment] = useState(initialValues)
    const [commentList, setCommentList]= useState([])
    const [toggle, setToggle] = useState(false)
    const {account} = useContext(DataContext)

    useEffect(()=>{
        const getData=async()=>{
            try{
                let response =  await API.getAllComments(post._id)
           
                if(response.isSuccess){
                    setCommentList(response.data)
                }else{
                    alert("Something went wrong")
                }
            }catch(err){
                console.log('Error', err);  
            } 

        }
        getData()
    },[post,toggle])
    
    const handleChange=(e)=>{
        setComment({
                ...comment,
                name: account.username,
                postId: post._id,
                comments: e.target.value
            })
    }

    const addComment = async (e)=>{
       let response = await API.postComment(comment)

       if(response.isSuccess){
            setComment(initialValues)
       }

       setToggle(prevState=> !prevState)
    }
    return (
        <Box>
            <Container>
                <Image src={url}/>
                <StyledText
                    minRows={5}
                    placeholder="Write your views"
                    value = {comment.comments}
                    onChange = {(e)=>handleChange(e)}
                />
                <Button 
                variant='contained' 
                color='primary' 
                size='medium' 
                style={{height: 40}}
                onClick={(e)=>addComment(e)}
                >Post</Button>
            </Container>

            
            <Box>
                
                {   
                    commentList && commentList.length > 0 && 
                    commentList.map((item)=>(
                        <Comment setToggle={setToggle} comment={item}/>
                    ))
                }
            </Box>
        </Box>
    )
}
export default Commments