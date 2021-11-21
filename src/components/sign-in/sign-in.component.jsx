import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''});
        } catch(error){
            console.log(error);
        }

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

                <div className="buttons">
                <CustomButton type="submit">Submit Form</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>;
    }
}
 
export default SignIn;