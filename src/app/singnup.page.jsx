import { Link } from "rasengan";
import logo from "@assets/logo.svg";
import Image from "@rasenganjs/image";
import { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import img_page_signup from "@assets/default-image.png";
import axios from "axios";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validPassword, setValidPassword] = useState(true);
  const [send, setSend] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(true);
  const [remember, setRemember] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
    return regex.test(email);
  };
  const validatePassword = (pwd) => {
    if (pwd.trim() === "") {
      return false;
    } else return true;
  };

  const [account, setAccount] = useState([]);

  const handleConnect = () => {
    setCorrectPassword(true);
    setSend(true);
    if (username.trim() !== "" && validatePassword(password)) {
      handleLogin();
    }
  };
  const [data, setData] = useState();

  useEffect(() => {
    setData({ username: username, password });
  }, [username, password]);

  const handleLogin = async () => {
    setLoading(true);
    await axios
      .post("http://kamergaz.life:8088/api/accounts/login/", data)
      .then((res) => {
        login(res.data);
        setSuccessful(true);
        login(res.data);
        setLoading(false);
        console.log(connectedUser);
        setTimeout(() => {
          return <Navigate to="/" />;
        }, 2000);
        //
      })
      .catch((res) => {
        setCorrectPassword(false);
        console.log(res);
        setLoading(false);
      });
    s;
  };
  const storeInLocalStorage = (response) => {
    localStorage.setItem("userId", response.user_info.id);
    localStorage.setItem("token", response.token);
    localStorage.setItem("username", response.user_info.username);
  };

  return (
    <div className="    flex flex-row    ">
      <div className="flex flex-col h-screen justify-center items-center   gap-3 w-[50%] px-20 mt-[30px]  ">
        <div>
          <p className="text-primary font-bold text-[33px] text-center   ">
            {" "}
            Tech Discov
          </p>
        </div>
        <div className="text-center">
          <p className="text-[20px] font-bold text-center  text-gray-900">
            LogIn
          </p>
        </div>
        {!correctPassword && (
          <div className="bg-red-100 w-full text-red-500 rounded-md shadow-sm text-center py-[20px] px-6 ">
            Incorrect password or unexisting user
          </div>
        )}
        {successful && (
          <div className="flex items-center  justify-center gap-2 bg-green-200 text-green-700 font-medium rounded-md shadow-md text-center py-[20px] ">
            <span className="material-icons">check_circle</span>
            {"  "} You're Logged in
          </div>
        )}
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-900">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setSend(true);
              setCorrectPassword(true);
            }}
            className={classNames(
              username.trim() === "" && send && "!border-red-500",
              "border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-primary hover:border-primary invalid:outline-red-500",
            )}
          />
          {username.trim() === "" && send && (
            <p className="text-red-500 font-[300] "> Required field</p>
          )}
          {/* {!validEmail && send && email.trim() !== '' && (
                        <p className="text-red-500 font-[300]"> adresse email non valide</p>
                    )} */}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-900">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setCorrectPassword(true);
            }}
            className={classNames(
              password.trim() === "" && send && "border-red-500",
              "border border-gray-400 w-full rounded-[4px] py-2 px-2 font-[300] focus:outline-primary hover:border-primary ",
            )}
          />
          {password.trim() === "" && send && (
            <p className="text-red-500 font-[300] ">Required field</p>
          )}
        </div>

        <div className="w-full flex justify-between">
          <div className="text-gray-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => {
                setRemember(e.target.checked);
              }}
            />{" "}
            remember me
          </div>
        </div>
        <div
          onClick={handleConnect}
          className="text-center hover:bg-secondary bg-primary py-3  w-full rounded-[5px]  text-white text-[18px] font-bold border-2 border-primary hover:shadow-xl cursor-pointer"
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span>
          ) : (
            <span>LogIn</span>
          )}{" "}
          <span></span>
        </div>

        <div className="text-end w-full text-gray-500 mt-3">
          You don't have an account yet?{" "}
          <Link
            to="/signup"
            className="text-primary  cursor-pointer underline "
          >
            SignUp
          </Link>
        </div>
      </div>
      <div className=" w-[50%] fixed right-0">
        <img
          src={img_page_signup}
          alt=""
          className="   h-screen object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-primary/50 backdrop-opacity-[0.1] px-5  text-white">
          <p className="font-bold text-[30px] pt-[20%] ">
            Bienvenue sur la meilleure plateforme de mise en relation des
            producteurs et acheteurs dans le secteur agropastoral
          </p>
          <p className="text-[20px] pt-[20px] ">
            Achetez des produits partout à travers le Cameroun, des milliers de
            producteurs vous attendent
          </p>
          <button className="px-5 py-3 mt-5 rounded-md bg-white text-gray-700">
            Comment ça marche?
          </button>
        </div>
      </div>
    </div>
  );
};

Signup.path = "/signup";
Signup.metadata = {
  title: "Signup",
  description: "Signup and join and incredible world of talents!",
};

export default Signup;
