import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const useToken = async (user) => {
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()
    console.log(user)
    useEffect(() => {
        (async () => {
            if (user) {
                try {
                    let response
                    const data = await axios.post("http://localhost:5000/user/login", {
                        email: user?.email,
                        google: 'google'
                    });

                    console.log(data)
                    response = data
                    localStorage.setItem(
                        "token",
                        JSON.stringify(response.data.accesstoken)
                    );
                    localStorage.setItem("val", JSON.stringify(response.data.val));
                    let token = localStorage.getItem("token");
                    console.log('token', token)

                    // verify token api 
                    token = token.replace(/['"]+/g, "");

                    const roles = await fetch("http://localhost:5000/user/infor", {
                        method: "GET",
                        headers: {
                            Authorization: token,
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    });

                    const roleData = await roles.json();

                    // verify on role 
                    if (roleData.role == 0) {
                        navigate("/dashboarduser");
                    } else {
                        navigate("/dashboardbusiness");
                    }

                } catch (error) {
                    /*   if (error.response) {
                        setMsg(error.response.data.msg);
                        setOpen(true);
                        setErrorMessage(error.response.data.msg);
                      } */
                    console.log(error)
                    setLoginError(error?.response?.data?.msg)
                }
            }
        })()

    }, [user, navigate])


    return {loginError}
}

export default useToken
