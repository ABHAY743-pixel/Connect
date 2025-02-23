import { useState, useEffect, useContext } from "react"
import { Box, Typography, styled } from "@mui/material"
import { useParams, Link, useNavigate } from "react-router-dom"
import {Edit, Delete} from "@mui/icons-material"



import { API } from "../../service/api"
import { DataContext } from "../../context/DataProvider"


import Comments from './comments/Comments'

const Container = styled(Box)(({theme})=>({
    margin: '60px 100px',
    [theme.breakpoints.down('md')]:{
        margin: 0
    }
}))


const Image = styled('img')({
    width:'100%',
    height: '50vh',
    objectFit: 'cover'
})

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    &:hover{
        color: blue;
        background-color:#C3CEF7

    }
`
const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        color: red;
        background-color:#F7C3C5
    }
`
const Heading = styled(Typography)`
    font-weight: 600;
    font-size: 38px;
    text-align: center;
    margin: 50px 0px 10px 0px;
    word-break: break-word;
`

const Author = styled(Box)`
    color: #878787;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
`

const Description = styled(Typography)`
    word-break: break-word;
    line-height: 2;
    color: black;

`
 const DetailView = () =>{

    const [post, setPost] = useState({})
    const {id} = useParams()

    const {account} = useContext(DataContext)
    const navigate = useNavigate()

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    useEffect(()=>{
          const fetchData=async()=>{
         try{
             let response =  await API.getPostById(id)
             
             if(response.isSuccess){
               setPost(response.data)
             }

         }catch(err){
            console.log('error while fetching data by id', err)
         }
        }
        fetchData()
    },[])

    const deleteBlog = async () =>{

        let response = await API.deletePost(id)

        if(response.isSuccess){
            navigate('/')
        }
    }
    return (
        <Container>
           <Image src={url} alt='post-banner' />
           <Box style={{float: "right"}}>
           {
              account.username === post.username &&
              <div>
                <Link to={`/update/${post._id}`}>
                    <EditIcon color="primary"/>
                </Link>
                <DeleteIcon onClick={()=>deleteBlog()} color="error" />
              </div>
           }
                    
           </Box>
           <Heading>{post.title}</Heading>

           <Author>
            <Typography> Author: <Box component="span" style={{fontWeight:600}}>{post.username}</Box></Typography>
            <Typography >{new Date(post.createdDate).toDateString()}</Typography>
           </Author>

           <Description>{post.description}</Description>
           <h2 style={{marginTop: '50px'}}>Comments</h2>
           <Comments post={post} />
        </Container>
    )
}

export default DetailView