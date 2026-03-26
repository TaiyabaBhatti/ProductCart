import { useForm } from "react-hook-form";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import LoadingEffect from "../components/LoadingEffect";
import { useState } from "react";
import {  registerUser } from "../api/authApi.js";
import InputErrors from "../components/InputErrors";
import { useNavigate } from "react-router-dom";
import ErrorNotif from "../components/ErrorNotif.jsx";

const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const [errordesc, setErrorDesc] = useState("");
  const registerU = async (data) => {

    try {
    setLoading(true)
        const res = await registerUser(data)
        console.log("Register Success")
        reset()
        navigate("/login")
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
          <div><h1 className="text-gray-600 text-center text-3xl font-extrabold">Register</h1>
        {errordesc && <ErrorNotif text={errordesc}/>}</div>
        </div>

        <div className="relative mt-10  bg-blue-900 rounded-md p-5 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(registerU)} className="space-y-3 text-white">
            <div>
              <InputField
                labelFor={"username"}
                message={"Username is required"}
                type={"text"}
                placeholder={"Username"}
                register={register}
                errors={errors}
              />
              <InputErrors labelFor={"username"} errors={errors}/>
            </div>

            <div>
              <InputField
                labelFor={"email"}
                message={"email address is required"}
                type={"email"}
                placeholder={"Email Address"}
                register={register}
                errors={errors}
              />
              <InputErrors labelFor={"email"} errors={errors}/>
            </div>
             <div>
              <InputField
                labelFor={"fullname"}
                message={"fullname address is required"}
                type={"fullname"}
                placeholder={"Full Name"}
                register={register}
                errors={errors}
              />
              <InputErrors labelFor={"fullname"} errors={errors}/>
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
              value={"Register"}
              className={`w-full bg-blue-400 p-1.5 rounded-xs cursor-pointer`}
            />
          </form>
            {loading && <LoadingEffect text={"Registering ..."} />}
        </div>
      </Wrapper>
    </>
  );
};

export default Register;
