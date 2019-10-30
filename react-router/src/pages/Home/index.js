import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../../redux/user/actions";


import Slider from './Slider';


const Home = ({ user, actions }) => {

    React.useEffect(() => {
        actions.getUser(user.userId)
      }, [user.userId])

      
    return (
        <div>
        <table>
          <tbody>
            <tr>
              <td>ID: </td>
              <td>{user.user.id}</td>
            </tr>
    
            <tr>
              <td>Name: </td>
              <td>{user.user.name}</td>
            </tr>
    
            <tr>
              <td>Username: </td>
              <td>{user.user.username}</td>
            </tr>
    
            <tr>
              <td>Email: </td>
              <td>{user.user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
  });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getUser }, dispatch),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);