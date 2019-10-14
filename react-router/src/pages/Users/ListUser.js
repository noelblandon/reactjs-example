import React, { Component } from 'react';

import axios from 'axios';

import { Container, Table } from 'react-bootstrap'; 

const API_URL = 'http://jsonplaceholder.typicode.com';


class ListUser extends Component{

    constructor(props) {
        super(props);
        this.state = {
          user: []
        };
      }
    
    
    componentDidMount() {
        const url = `${API_URL}/users`;
        axios.get(url).then(response => response.data)
             .then((data) => {
                this.setState({ users: data })
                console.log(this.state.user)
              })
      }
    

    render() {
       return (
        <>  
          <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#-id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </Table>
          </Container>  
        </>
      );
    }
}

export default ListUser;