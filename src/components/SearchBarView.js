import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';


const SearchBarView = ({ getResultsFromApi }) => {
    return (
    <Navbar>
        <Navbar.Text pullLeft>
        What Do You Want to Learn Today?
        </Navbar.Text>
        <Navbar.Text pullRight>
        Happy Studying!
        </Navbar.Text>
        <Navbar.Form>
            <form onSubmit={(e) => {
            e.preventDefault()
            let userInput = e.target.input.value
            getResultsFromApi(userInput)
            }}> 
            <FormGroup>
                <FormControl id='navBarSearchForm' name="input" type="text" placeholder="Enter Subject Here" />
            </FormGroup>
            {' '}
            <Button type="submit" >
            Submit
            </Button>
            </form>
        </Navbar.Form>
    </Navbar>
    )
}

export default SearchBarView