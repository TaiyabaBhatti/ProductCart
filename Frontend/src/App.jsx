import { useContext } from "react";
import AppRoutes from "./AppRoutes";
import Layout from "./components/Layout";
import { AuthContext } from "./context/AuthContext";
import { useEffect } from "react";
function App() {

const {loginStatus} = useContext(AuthContext)
useEffect(()=>{

if(!loginStatus){
  alert("Not logged in")
}

else {
   alert("Logged in")
}

},[loginStatus])


  return (
    <>
      <Layout>
      <AppRoutes/>
      </Layout>
    </>
  );
}

export default App;
