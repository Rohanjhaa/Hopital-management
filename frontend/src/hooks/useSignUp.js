import { useNavigate } from "react-router-dom";

const useSignUp = () => {

    const navigate = useNavigate();

    const signup = async ({name, email, password}) => {
        try{
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signup`,{
                method: "POST",
                body: JSON.stringify({name, email, password}),
                headers: {"Content-Type": "application/json"}
            })
            console.log(res);
            const data = await res.json();
            console.log(data);
            if(data.status === "success"){
                navigate("/");
            }
        }catch(error){
            console.log(error.message);
            alert("Sign Up Failed" + error.message);

        }
    };

    return {signup}
}

export default useSignUp