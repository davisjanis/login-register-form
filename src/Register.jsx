//import new state hook from react to capture the values of user inputs
import React, {useState} from "react";

export const Register = (props) => {
    //adding 'useState' hooks/ states '[name of the state, function that modifies state]'
    //Two state variables, 'email' and 'pass', are initialized using the useState hook. These will hold the values of the user inputs.
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


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




    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        {/* connect 'handleSubmit' function to form - ' <form onSubmit={handleSubmit}'> */}
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="name" />
                <label htmlFor="email">email</label>
                {/* htmlFor values to get updated and displayed on the screen -> value={email}  */}
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="passsword"/>
    {/* triggers the handleSubmit function when clicked. */}
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here.
            </button>
        </div>
    )
} 