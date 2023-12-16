import React,{useState} from 'react'



const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [cp, setCP] = useState('');

      const [validEmail, setValidEmail] = useState(false);
      const [validPassword, setValidPassword] = useState(false);
      const [validConfirmPassword, setValidConfirmPassword] = useState(false);

      const handleInputEmail= (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setValidEmail(validateEmail(newEmail));
      }
      const handleInputPassword= (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setValidPassword(newPassword.length>=8);
        setValidConfirmPassword(cp===newPassword);
      }

      const handleInputCP= (e) => {
        const newCP = e.target.value;
        setCP(newCP);
        setValidConfirmPassword(newCP===password);
      }

      const handleSubmitForm = (e)=>{
        e.preventDefault();
        if (validEmail && validPassword && validConfirmPassword) {
          alert("Form submitted successfully!");
        } else {
          alert("Can't submit the form");
        }
      }
      const validateEmail = (email) => {
        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };



  return (
    <div className="main">
      <form onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleInputEmail}
            className={validEmail ? 'valid' : 'invalid'}
          />
          {!validEmail && <p className="error">Please enter a valid email address</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handleInputPassword}
            className={validPassword ? 'valid' : 'invalid'}
          />
          {!validPassword && (
            <p className="error">Password must be at least 8 characters long</p>
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={cp}
            onChange={handleInputCP}
            className={validConfirmPassword ? 'valid' : 'invalid'}
          />
          {!validConfirmPassword && (
            <p className="error">Passwords do not match</p>
          )}
        </div>

        <button type="submit" style={{"margin-left":"39%", backgroundColor:"blue",borderRadius:"5px",color:"white"}}>Submit</button>
      </form>
    </div>
  );
}

export default Login