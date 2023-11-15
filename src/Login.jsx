
//import new state hook from react to capture the values of user inputs
import React, {useState} from "react";

//'export': keyword is used to export the 'Login' component so that it can be imported and used in other files.
// This declares a functional component 'Login' using an arrow function. It's a stateless functional component (SFC) that doesn't manage any internal state.
// 'props' is a way that parent component can send some values or functions to their children
export const Login = (props) => {
    //adding 'useState' hooks/ states '[name of the state, function that modifies state]'
    //Two state variables, 'email' and 'pass', are initialized using the useState hook. These will hold the values of the user inputs.
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePassChange = (e) => {
    //     setPass(e.target.value);
    // }


    //function for form submission.
    // It takes an event object (e) as an argument.
    const handleSubmit = (e) => {
        //if we don't declare preventDefault, the page will reload and we'll lose our state
        e.preventDefault();
        //console.log(email) logs the current value of the email state variable to the console.
        console.log(email);
    }




    //form rendering
    //JSX code defines the structure of the form
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        {/* connect 'handleSubmit' function to form - ' <form onSubmit={handleSubmit}'> */}
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                {/* htmlFor values to get updated and displayed on the screen -> value={email}  */}
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="passsword"/>
    {/* triggers the handleSubmit function when clicked. */}
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Register here.
            </button>
        </div>
    )
} 