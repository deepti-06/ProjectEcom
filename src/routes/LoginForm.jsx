import { Link } from "react-router-dom";
import { useRef} from "react";
import { useNavigate } from 'react-router-dom';  // Import useHistory
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../store/userSlice";

const LoginForm = () => {

  const usernameRef=useRef(null)
  const passwordRef=useRef(null)
  


  const navigate = useNavigate();  // Initialize useNavigate hook
  const { user, error, loading } = useSelector((state) => state.user);

  const dispatch=useDispatch()


  
  const handleLogin=async(e)=>{
    e.preventDefault()

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
  

    const loginData = {username, password };

    try {
      const response = await fetch('https://userlogindata.glitch.me/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        usernameRef.current.value=""
        passwordRef.current.value=""
        navigate('/');  // This redirects to the root route after login       
      } else {
        alert("Wrong EmailId or password"); // Clear any previous success message
        usernameRef.current.value=""
        passwordRef.current.value=""
        //setError(data.message);
      }
    } catch (err) {
      alert('An error occurred while logging in');
    }
    dispatch(loginUser({username,password}))


  }

 
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              StyleNest!
            </h1>
            <h3 className="display-6 fw-light lh-1 text-body-emphasis mb-3">Your Ultimate Online Shopping Destination!</h3>
            <p className="col-lg-10 fs-4">
              We’re thrilled to have you here! Explore our wide range of
              high-quality products, from the latest trends to timeless
              classics, all carefully selected to meet your needs. Shopping with
              us is easy, secure, and enjoyable – no matter what you’re looking
              for, we’ve got something just for you. Enjoy a seamless
              experience, exclusive deals, and fast delivery right to your door.
              Happy shopping! 🛒✨
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" >
          
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
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
                <label form="floatingPassword">Password</label>
              </div>
              <Link to ="/">

              <button
                className="w-100 btn btn-lg btn-primary loginButton"
                type="submit" 
                onClick={handleLogin}
              >
              {loading ? 'Logging in...' : 'Login'}
              </button>
              </Link>
              <Link to ="/register">
              <button className="w-100 btn btn-lg btn-primary loginButton" type="submit">
                Sign up
              </button>
              </Link>
              
              
            </form>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
