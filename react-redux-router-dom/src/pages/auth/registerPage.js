import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends Component {
    render (){
        return(
            <div>
                <h3>Register page</h3>
                Already have account? <Link to='login'>Login Here</Link>
            </div>
        );
    }
}

export default RegisterPage;