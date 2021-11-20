import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    };

    render() { 
        return <div className="sign-in" onSubmit={this.handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput type="email" name="email" id="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />

                <FormInput type="password" name="password" id="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />

                <CustomButton type="submit">Submit Form</CustomButton>
            </form>
        </div>;
    }
}
 
export default SignIn;