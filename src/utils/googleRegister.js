
import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase.init";

const useGoogleRegister = (user, setErrorMessage, setSuccess, role) => {
    const { displayName, email } = user || {}

    useEffect(() => {
        (async () => {
            if (user) {
                let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
                let regxpass = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
                const userexist = await fetch("http://localhost:5000/exist", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email
                    })
                })
                const userExistData = await userexist.json()
                

                if (userExistData.message === 'Email already exist') return setErrorMessage('Email already exist')


                if (!regex.test(email)) {
                    //setErrorMessage("Invalid Email");

                    setErrorMessage("Invalid Email Address");
                }
                else if (userExistData.exist === 0 && regex.test(email)) {

                    console.log('click')
                    try {

                        const response = await axios.post(
                            "http://localhost:5000/user/register",
                            {
                                name: displayName,
                                email: email,
                                role,
                                google: 'Google',
                            }
                        );
                        console.log(response)
                        localStorage.setItem(
                            "token",
                            JSON.stringify(response.data.accesstoken)
                        );

                        // navigate("/completeProfile");
                        setSuccess("/completeProfile")
                    } catch (error) {
                        if (error.response) {
                            setErrorMessage(error.response.data.msg);
                        }
                    }
                } else if (userExistData.exist === 1) {
                    signOut(auth)
                    setErrorMessage("User already exist")
                }
            }
        })()
    }, [user,email,role,setErrorMessage,setSuccess,displayName])
}

export default useGoogleRegister