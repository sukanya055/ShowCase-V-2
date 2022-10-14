import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";


const useToken = async (user, signOut,setLoginError) => {
   
    const navigate = useNavigate()
    console.log(user)
    useEffect(() => {
        (async () => {
            if (user) {
                try {



                    const userexist = await fetch("https://api.showcaseurbusiness.com/exist", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: user.email,
                        }),
                    });
                   /*  const userExistData = await userexist.json();
                    console.log(userExistData)
                    if(userExistData.message.includes('Email not exist')){
                        console.log('click')
                        setLoginError(userExistData.message)
                    } */
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
                    signOut(auth)
                }
            }
        })()

    }, [user, navigate, signOut])

    
}

export default useToken
