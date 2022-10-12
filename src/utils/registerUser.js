import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterUser = async (formData, setErrorMessage, setSuccess) => {
    const { name, email, password } = formData || {}
    // const navigate = useNavigate()
    console.log(formData)
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
    console.log(userExistData)

    if(userExistData.message==='Email already exist') return setErrorMessage('Email already exist')


    if (!regex.test(email)) {
        //setErrorMessage("Invalid Email");

        setErrorMessage("Invalid Email Address");
    }
    else if (!regxpass.test(password)) {

        setErrorMessage(
            "Password entered should have at least 8 characters, one uppercase, one lowercase, one number and one special character!"
        );
    }
    else if (userExistData.exist === 0 && regex.test(email) && regxpass.test(password)) {

        console.log('click')
        try {

            const response = await axios.post(
                "http://localhost:5000/user/register",
                {
                    name: name,
                    email: email,
                    role: 1,
                    password: password,
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

        setErrorMessage("User already exist")
    }
}


export default RegisterUser