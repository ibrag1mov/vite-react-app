
import { useContext } from "react";
import { Private } from "./apps/Private"
import { Public } from "./apps/Public"
import { AuthContext } from "./context/AuthContext";

function App() {

  const token = useContext(AuthContext).token;



  if(token){
    return (<Private/>)
  }
  return(<Public/>)
}

export default App
