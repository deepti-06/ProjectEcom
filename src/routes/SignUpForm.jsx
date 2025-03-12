import { Link } from "react-router-dom";
import { useRef} from "react";
import { useNavigate } from 'react-router-dom';  // Import useHistory

const SignUpForm =()=>{


     const usernameRef=useRef(null)
    const passwordRef=useRef(null)
    const nameRef=useRef(null)
    const dobRef=useRef(null)
    const navigate = useNavigate();  // Initialize useNavigate hook


//http://localhost:5000/register

    const handleSignUp =async(e)=>{
        e.preventDefault()
    
        const username= usernameRef.current.value;
        const password = passwordRef.current.value
        const name = nameRef.current.value
        const dob= dobRef.current.value
    
    
    
        if (!username || !password) {
          alert('Username and password are required!');
          return;
        }
    
        try {
          const response = await fetch('https://userlogindata.glitch.me/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name,username, dob, password }),
          });
          console.log(response)
          const data = await response.json();
    
          if (response.ok) {
            alert('Thanks for Signing In, Please Login to continue');
            usernameRef.current.value=""
            passwordRef.current.value=""
            nameRef.current.value=""
            dobRef.current.value=""
            navigate('/login');  // This redirects to the root route after login       
    
          } else {
            alert(`Error: ${data.message}`);
            usernameRef.current.value=""
            passwordRef.current.value=""
            nameRef.current.value=""
            dobRef.current.value=""
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }

        
      }
    
  return(
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
Welcome to StyleNest.. !!            </h1>
            <p className="col-lg-10 fs-4">
              Your Ultimate Shopping Destination. 
              We’re thrilled to have you here! 
              Please Signup to Explore our wide range of
              high-quality products, from the latest trends to timeless
              classics, all carefully selected to meet your needs.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" >
            <div className="form-floating mb-3">
                <input
                  type="test"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name"
                  required
                  ref={nameRef}
                />
                <label form="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  ref={usernameRef}
                />
                <label form="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="dob"
                  required
                  ref={dobRef}
                />
                <label form="floatingInput">dd/mm/yy</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
                <label form="floatingPassword">Password</label>
              </div>
              <Link to ="/login">
              <button className="w-100 btn btn-lg btn-primary" type="submit"
              onClick={handleSignUp}>
                Sign up
              </button>
              </Link>
             
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
           
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUpForm