import{useEffect,useState} from "react";
import{useRef} from "react";
function Header(){
    const [country,setCountry]=useState(null);
    const countryInput= useRef('countryInput');
    const[search,setsearch] =useState();//state var creation for storing data
    const getTuristPlace=()=>{
        fetch("http:/localhost:8080/getTouristplace?country="+countryInput.current.value,{
"method":"GET",
Headers:{
    'content-type':"application/json"
}
        })
        .then(res=>res.json())
        .then(ser_data=>{
            console.log(ser_data);
            setsearch(ser_data);//storing the api response in variable 
        })
    }
    //entry key

    const handler =(Event) =>{
        console.log(Event.keycode)
        if(Event.keycode == 13){
            getTuristPlace();
        }
    }
    return(
        <>
        


    
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <h1 class="text-primary m-0"><i class="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                <img src="img/logo.png" alt="Logo"/> 
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="home" class="nav-item nav-link active">Home</a>
                    <a href="about" class="nav-item nav-link">About</a>
                    <a href="services" class="nav-item nav-link">Services</a>
                    <a href="package" class="nav-item nav-link">Packages</a>
                    <a href="Update" class="nav-item nav-link">Update</a>
                    <a href="Update" class="nav-item nav-link">Login</a>
                    <div class="nav-item dropdown">
                        
                        <div class="dropdown-menu m-0">
                            <a href="destination.html" class="dropdown-item">Destination</a>
                            <a href="booking.html" class="dropdown-item">Booking</a>
                            <a href="team.html" class="dropdown-item">Travel Guides</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <a href="TuristRegister" class="btn btn-primary rounded-pill py-2 px-4">TuristRegister</a>
            </div>
        </nav>

        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                        <p class="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div class="position-relative w-75 mx-auto animated slideInDown">
                            <input class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" ref={countryInput} onKeyUp={(e) => handler(e)}/>
                            <button type="button" class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"onClick={()=>getTuristPlace()}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {
        search &&search.length==0?<h1>No Data Found </h1>:""
    }
    {
        search && search.map((placeobj,index)=>{
            return(
                <div key={index} className="col-lg-6 col-md-12 wow zoomIn">
                     <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src="img/destination-2.jpg" alt=""/>
                                <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                                <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">{placeobj.country}-{placeobj.placeName}</div>
                            </a>
                            </div>
            )
        })
    }
        </>
    )

}
export default Header;