import {Button, Table, TableHead, TableCell, TableRow, TableBody, styled} from '@mui/material'
import {categories} from '../../constants/data.js'
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const StyledTable = styled(Table)`
  border: 1px solid black;
`
const StyledTableCell = styled(TableCell)`
  background-color: ${(props) => (props.isSelected ? 'coral' : 'white')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled(Button)`
    margin: 30px;
    width: 70%;
    background-color: #525FE1;
    color: white;
    &:hover{
        background-color: #4942E4 ;
        color: white;
    }
`

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none; 
    &:focus{
        color: black; 
    }
`
const Categories = () =>{

    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
     const [selectedCategory, setSelectedCategory] = useState(null);
      
        const handleCategoryClick = (category) => {
          if (selectedCategory === category) {
            setSelectedCategory(null);
          } else {
            setSelectedCategory(category);
          }
        }


    return(
        <div>
            <StyledLink to={`/create?category=${category || 'AllCategories'}`}>
                <StyledButton>Create Blog</StyledButton>
            </StyledLink>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <StyledLink to='/'>
                                 All Categoies
                            </StyledLink>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category =>(
                            <TableRow key={category.id}>
                                <StyledTableCell isSelected={selectedCategory === category}>
                                    <StyledLink to={`/?category=${category.type}`}
                                            onClick={() => handleCategoryClick(category)}>
                                        {category.type}
                                    </StyledLink>
                                </StyledTableCell>
                            </TableRow>
                        ))
                    }
                    
                </TableBody>
            </StyledTable>
        </div>
    )
}

export default Categories