import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'


const SearchBarView = ({ results }) => {
    return (
    <Navbar>
        <Navbar.Text pullLeft>
        What Do You Want to Learn Today?
        </Navbar.Text>
        <Navbar.Text pullRight>
        Happy Studying!
        </Navbar.Text>
        <Navbar.Form>
            <FormGroup>
                <FormControl id='navBarSearchForm' type="text" placeholder="Enter Subject Here" />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={ () => results }>
            Submit
            </Button>
        </Navbar.Form>
    </Navbar>
    )
}

export default SearchBarView