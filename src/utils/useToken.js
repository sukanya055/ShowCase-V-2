import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useCookies } from 'react-cookie';
const useToken = async (user, signOut, setLoginError) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  let expiryDate = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const userexist = await fetch(
            "http://3.110.147.43:5000/exist",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: user.email,
              }),
            }
          );
          
          let response;
          const data = await axios.post("http://3.110.147.43:5000/user/login", {
            email: user?.email,
            google: "google",
          });

          response = data;
       
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.accesstoken)
          );
          localStorage.setItem("val", JSON.stringify(response.data.val));
          let token = localStorage.getItem("token");
       
          setCookie("token", response?.data?.accesstoken, {
            path: '/',
            maxAge: expiryDate.setMonth(expiryDate.getMonth() + 1),

          });

          // verify token api
          token = token.replace(/['"]+/g, "");
       
          const roles = await fetch("http://3.110.147.43:5000/user/infor", {
            method: "GET",
            headers: {
              Authorization: response?.data?.accesstoken,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          const roleData = await roles.json();
      
          // verify on role
          if (roleData.role === 1) {
            navigate("/businessProfile/businessDashboard");
          } else {
            navigate("/dashboard/normalDashboard");
          }
        } catch (error) {
         
         
          setLoginError(error?.response?.data?.msg);
          signOut(auth);
        }
      }
    })();
  }, [user, navigate, signOut]);
};

export default useToken;
