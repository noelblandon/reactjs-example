import React, { Component } from 'react';

import axios from 'axios';

import { Container, Table, ButtonToolbar, Button } from 'react-bootstrap'; 

const API_URL = 'http://jsonplaceholder.typicode.com';


class ListUser extends Component{
    
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
      }
    
    
    componentDidMount() {

        this._isMounted = true;

        const url = `${API_URL}/users`;
        axios.get(url).then(response => response.data)
             .then((data) => {
          if (this._isMounted) {
                  this.setState({ users: data })
          }
              })
      }

      componentWillUnmount() {
        this._isMounted = false;
      }
    
    

    render() {
       return (
        <>  
          <Container className="pt-4">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#-id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <React.Fragment>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                        <th>{ user.id }</th>
                        <th>{ user.name }</th>
                        <th>{ user.username }</th>
                        <th>{ user.email }</th>
                        <th>
                          <ButtonToolbar>
                            <Button variant="success" className="mt-2" >Success</Button>
                            <Button variant="danger" className="mt-2" >Danger</Button>
                          </ButtonToolbar>
                        </th>
                  </tr>
                ))}
                </React.Fragment>
                </tbody>
            </Table>
          </Container>  
        </>
      );
    }
}

export default ListUser;