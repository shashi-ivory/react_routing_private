import { Link } from "react-router-dom";
const MenuBar = ({ isSignedIn }) => {
  console.log("isSigned in", isSignedIn);
  return (
    <>
      {isSignedIn ? (
        <div>
          <nav className="d-flex justify-content-center">
            <div className="p-2">
              <Link to="/products">Products</Link>
            </div>
            <div className="p-2">
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="d-flex justify-content-center">
            <div className="p-2">
              <Link to="SignUp">SignUp</Link>
            </div>
            <div className="p-2">
              <Link to="Login">Login</Link>
            </div>
            <div className="p-2">
              <Link to="Otp">Otp</Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
export default MenuBar;
