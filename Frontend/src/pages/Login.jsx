import { useForm } from "react-hook-form";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import LoadingEffect from "../components/LoadingEffect";
import { useContext, useState } from "react";
import { loginUser } from "../api/authApi";
import InputErrors from "../components/InputErrors";
import { useNavigate } from "react-router-dom";
import ErrorNotif from "../components/ErrorNotif";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const {currUser,setCurrUser,setLoginStatus,loginStatus} = useContext(AuthContext);
   const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [errordesc, setErrorDesc] = useState("");
   const login = async(data) => {
    try {
    setLoading(true)
        const res =await loginUser(data)
         reset()
        console.log("Login Success",)
        setCurrUser(res.data.data)
        setLoginStatus(true)
        navigate("/");
    } catch (error) {
      setErrorDesc(`${error.response.data.message} ${error.status}` )
      
    }
    finally{
        setLoading(false)
    }
  };

  return (
    <>
      <Wrapper>
        {/* display header*/}
        <div className="flex flex-row items-center gap-x-1.5 justify-center">
         <div>
            <h1 className="text-gray-600 text-center text-3xl font-extrabold">Login</h1>
         {errordesc && <ErrorNotif text={errordesc}/>}
         </div>
        
        </div>

        <div className="relative mt-10  bg-blue-900 rounded-md p-5 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(login)} className="space-y-3 text-white">
            <div>
              <InputField
                labelFor={"identifier"}
                message={"email address or username is required"}
                type={"text"}
                placeholder={"Email Address or Username"}
                register={register}
                errors={errors}
              />
              <InputErrors labelFor={"identifier"} errors={errors}/>
            </div>
            <div>
              <InputField
                labelFor={"password"}
                message={"Password is required"}
                type={"password"}
                placeholder={"Password"}
                register={register}
                errors={errors}
              />
               <InputErrors labelFor={"password"} errors={errors}/>
            </div>
            <input
              type="submit"
              value={"Login"}
              className={`w-full bg-blue-400 p-1.5 rounded-xs cursor-pointer`}
            />
          </form>
            {loading && <LoadingEffect text={"Logging ..."} />}
        </div>
      </Wrapper>
    </>
  );
};

export default Login;
