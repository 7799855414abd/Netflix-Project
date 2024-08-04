import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault(); 
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  const toggleSignState = () => {
    setSignState((prevSignState) => (prevSignState === "Sign In" ? "Sign Up" : "Sign In"));
  };

  return (
    loading?<div className='loading-spinner'>
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} alt="Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}> {/* Moved `onSubmit` to the form tag */}
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{signState}</button> {/* Removed `onClick` */}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch" onClick={toggleSignState}>
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account? <span>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
















// import React, { useState } from 'react';
// import './Login.css';
// import logo from '../../assets/logo.png';
// import { login, signup } from '../../firebase';

// const Login = () => {
//   const [signState, setSignState] = useState("Sign In");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")


//   const user_auth = async(event) => {
//     event.preventDefauly();
//     if (signState === "Sign In"){
//       await login(email, password);
//     }else{
//       await signup(name, email, password);
//     }
//   }

//   const toggleSignState = () => {
//     setSignState((prevSignState) => (prevSignState === "Sign In" ? "Sign Up" : "Sign In"));
//   };

//   return (
//     <div className="login">
//       <img src={logo} alt="Logo" className='login-logo'/>
//       <div className="login-form">
//         <h1>{signState}</h1>
//         <form>
//           {signState === "Sign Up" && <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>}
//           <input type="email" placeholder="Email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
//           <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//           <button type="submit" onClick={user_auth}>{signState}</button>
//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" id="rememberMe" />
//               <label htmlFor="rememberMe">Remember Me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className='form-switch' onClick={toggleSignState}>
//           {signState === "Sign In" ? (
//             <p>New to Netflix? <span>Sign Up Now</span></p>
//           ) : (
//             <p>Already have an account? <span>Sign In Now</span></p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
