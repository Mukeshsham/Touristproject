import { useRef } from "react" 
import Header from "./Header"
function TuristRegister (){
const countryInput = useRef ( 'countryInput' ) ;
const placeInput = useRef ('placeInput') ;
const descInput = useRef ('descInput' ) ;
const callApi= ()=>{
let data ={
"country": countryInput.current.value,
"placename" :placeInput.current.value,
"discription": descInput.current.value
}
fetch("http://localhost:8080/CreateTouristPlaces",{
"method": "post",
"headers" :{"content-type": "application/json"},
"body":JSON.stringify (data)
});
}


return(
    <>
    <Header/>
    <input type="text" placeholder="Country" ref={countryInput}/> 
    <input type="text" placeholder="PlaceName" ref={placeInput}/> 
    <input type="text" placeholder="Discription" ref={descInput}/>
     <button onClick={()=>callApi()}>create</button>

    
    </>
)
}

export default TuristRegister;