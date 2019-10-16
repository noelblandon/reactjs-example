import React, { Component } from 'react';

import axios from 'axios';

import { Container, Table, ButtonToolbar, Button } from 'react-bootstrap'; 

import MaterialTable from 'material-table';

const API_URL = 'http://jsonplaceholder.typicode.com';




class ListUser extends Component{
    
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };

        this.tableRef = React.createRef();
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
            {/*<Table striped bordered hover variant="dark">
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
                            <Button variant="success" className="mt-2" size="xs" block >Success</Button>
                            <Button variant="danger" className="mt-2" size="xs" block>Danger</Button>
                          </ButtonToolbar>
                        </th>
                  </tr>
                ))}
                </React.Fragment>
                </tbody>
            </Table>*/ }

            {/* title: 'Birth Place', field: 'birthCity',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa'} */}
            <MaterialTable        
        title="Refresh Data Preview"
        tableRef={this.tableRef}
        columns={[
          
            { title: 'Id', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Username', field: 'username' },
            { title: 'Email', field: 'email' },
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let url = `${API_URL}/users`
            fetch(url)
              .then(response => response.json())
              .then(result => {
                console.log(result);
                resolve({
                  data: result.data,
                  page: result.page - 1,
                  totalCount: result.total,
                })
              })
          })
        }
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
          },
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => window.alert("You saved " + rowData.name)
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name)
          }
        ]}
      />
           

          </Container>  
        </>
      );
    }
}

export default ListUser;