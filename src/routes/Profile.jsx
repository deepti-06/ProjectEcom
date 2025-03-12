import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';  // Import useHistory
import { userActions } from "../store/userSlice";


const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log("user value", user);
  const navigate = useNavigate();  // Initialize useNavigate hook


  const dispatch= useDispatch()
  const handleLogout = () => {
    dispatch(userActions.logout());  // Dispatch logoutUser action to trigger API call and Redux update
    //navigate('/logout');  // This redirects to the root route after logout       

  };


  return (
    <center>
      {user ? (
        <center
          className="card mb-3 profileContainer"
          style={{ maxWidth: "840px", backgroundColor:"blanchedalmond" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="images/profile1.png"
                className="img-fluid rounded-start profileImg"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title profileTitle" style={{color:"brown"}}>
                  Welcome to StyleNest!!
                </h5>
                <div className="col-md-6 profilebody_container">
                  <div className="profileData">
                    <label className="profileLabel">Name :</label>
                    <text className="value">{user.name}</text>
                  </div>
                  <div className="profileData">
                    <label className="profileLabel">Email :</label>
                    <text className="value">{user.username}</text>
                  </div>
                  <div className="profileData">
                    <label className="profileLabel"> DOB :</label>
                    <text className="value">{user.dob}</text>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-warning btn-logout" onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        </center>
      ) : (
        <h1 className="profileTitle">Please Login to view profile</h1>
      )}
    </center>
  );
};
export default Profile;
