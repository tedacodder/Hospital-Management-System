import Navbar from "../../components/Navbar";
import style from "./style/Login.module.css";
// import { useForm } from "react-form-hook";
function Login() {
  // const { register, handleSubmit } = useForm();
  const element = [
    { pathname: "Home", path: "/" },
    { pathname: "Login", path: "/login" },
    { pathname: "Signup", path: "/signup" },
  ];
  return (
    <>
      <Navbar items={element}></Navbar>
      <form>
        <div className={style.login}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />{" "}
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;
