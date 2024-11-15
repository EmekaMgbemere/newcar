import React,{ useState, useContext }from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import userregister from '../../components/images/userregister.jpg'
import userregister1 from '../../components/images/userregister1.jpg'
import bizowner from '../../components/images/Interface.png'
import Atropos from 'atropos/react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import {statelgas} from '../../components/Body/Apipage';


export default function Register() {

    const StatelgasContext = useContext(statelgas);

    const [filteredLgas, setFilteredLgas] = useState([]);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[streetAddress, setstreetAddress] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[instagram, setInstagram] = useState('');
    const[tiktok, setTiktok] = useState('');
    const[facebook, setFacebook] = useState('');
    const[fullname, setFullName] = useState('');
    const[siteusertype, setsiteusertype] = useState('');
    const[selectedstate, setSelectedState] = useState('');
    const[selectedLgas, setSelectedLgas] = useState('');
    const[sellerclick, setsellerclick] =useState(false);
    const[bizownerclick, setbizownerclick] =useState(false);
    const[userclick, setuserclick] =useState(false);
    const[clicked, setClicked] =useState(false);
    
    const navigate = useNavigate('/login');

    const showSuccessAlert = () => {
        let timerInterval;

        Swal.fire({
            title: 'Data Sent Successfully!',
            icon: 'success',
            position: 'center',
            timer: 1500,
            showConfirmButton: false,
            didOpen: () => {
                const timer = Swal.getPopup().querySelector("b");
                if (timer) {
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        })}

    
    const showErrorAlert = () => {
        let timerInterval;

        Swal.fire({
            title: 'Error!',
            text: "Something went wrong!",
            icon: 'error',
            position: 'center',
            timer: 1500,
            showConfirmButton: false,
            didOpen: () => {
                const timer = Swal.getPopup().querySelector("b");
                if (timer) {
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                }
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        })
        
    };
              
    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        
        const stateData = StatelgasContext.find(item => item.state === state);
        if (stateData) {
            setFilteredLgas(stateData.lgas);
        } 
        
        else {
            setFilteredLgas([]);
        }
    };

   const formData = { instagram, tiktok, facebook, email,password, streetAddress, phoneNumber, fullname, siteusertype, selectedstate, selectedLgas};

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !streetAddress || !phoneNumber || !fullname || !selectedstate || !selectedLgas) {
        alert("One or more fields are empty.");
        return;
    }
            try{
                    const resp = await fetch('http://localhost:6969/signupuser', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                        }         
                    )

                    if (resp.status === 201) {
                        setEmail('');
                        setPassword('');
                        setstreetAddress('');
                        setPhoneNumber('');
                        setFullName('');
                        setSelectedState('');
                        setsiteusertype('');
                        setSelectedLgas('');
                        setsellerclick(false);
                        setuserclick(false);
                        setClicked(false);
                        showSuccessAlert();
                        navigate('/login');
                        } 
                    else {
                        console.error('An error occurred while submitting the form.');
                        showErrorAlert();
                    }
                    } 
                    
                    catch (e) {
                        console.log(e);
                    }
    }

    const userfunc = ()=> {
        setsellerclick(!sellerclick);  
        setClicked(!clicked)
        setbizownerclick(!bizownerclick);
        setsiteusertype('user')
        }
        
    const sellerfunc = ()=> {
            setClicked(!clicked)
            setuserclick(!userclick);
            setsiteusertype('seller')
            setbizownerclick(!bizownerclick);
    }

    const bizownerfunc = ()=> {
        setuserclick(!userclick);
        setsellerclick(!sellerclick);  
        setClicked(!clicked);
        setsiteusertype('bizowner');
    }


  return (
    <div className='container'>
        <div><Nav /></div>
        <div className='regcontainer'>

            <div className='regcard'>

                {!userclick &&
                    (
                        <Atropos
                            activeOffset={60}
                            shadowScale={0.7}
                            >
                                <div className="card" style={{width: "18rem", margin:"2em"}}>
                                        <img src={userregister1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                        { !sellerclick ? 
                                            (
                                            <div class="d-grid gap-2">
                                                <button class="btn btn-primary" type="button" onClick={userfunc}>Register As User</button>
                                            </div>
                                            )
                                            :
                                            (
                                                <h4 className='' style={{fontFamily:"Comfortaa"}}>
                                                    {`${fullname}`}
                                                </h4>
                                            )
                                        }
                                        </div>
                                </div>
                        </Atropos>
                    )
                }

                {!sellerclick &&
                    (
                        <Atropos
                        activeOffset={60}
                        shadowScale={0.7}
                        >
                        <div className="card" style={{width: "18rem", margin:"2em"}}>
                            <img src={userregister} className="card-img-top" alt="..." />
                            <div className="card-body">
                                { !userclick ? 
                                    (
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-primary" type="button" onClick={sellerfunc}>Register As Seller</button>
                                        </div>
                                    )
                                    :
                                    (
                                        <h4 className='' style={{fontFamily:"Comfortaa"}}>
                                            {`${fullname}`}
                                        </h4>
                                    )
                                }
                            </div>
                        </div>
                        </Atropos>
                    )
                }

                {!bizownerclick &&
                    (
                        <Atropos
                        activeOffset={60}
                        shadowScale={0.7}
                        >
                            <div className="card" style={{width: "18rem", margin:"2em"}}>
                                <img src={bizowner} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        {!sellerclick && !userclick ?    
                                            (
                                                <div class="d-grid gap-2">
                                                    <button class="btn btn-primary" type="button" onClick={bizownerfunc}>Register As Business Owner</button>
                                                </div>
                                            )
                                            :
                                            (
                                                <h4 className='' style={{fontFamily:"Comfortaa"}}>
                                                    {`${fullname}`}
                                                </h4>
                                            )
                                        }
                                    </div>
                            </div>
                        </Atropos>
                    )
                }
                
                <div className='regcard2'>
                {clicked &&
                    (
                        <div className='text-center'>
                            <form onSubmit={handleSubmit}>
                                <div className='my-2 mx-1 w-100'>
                                    {
                                        !bizownerclick ? 
                                        (
                                            <div> <label>Business Name</label></div>
                                        ):
                                        (
                                            <div> <label>Full Name</label></div>
                                        )
                                    }
                                    <input
                                        type='text'
                                        className="w-100 py-2 px-4 border rounded-pill border-dark"
                                        id="name"
                                        name="name"
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>   
                                <div className='d-lg-flex'>                                                        
                                    <div className='my-2 mx-1 w-100'>
                                        <div> <label>Phone Number (Whatsapp)</label></div>
                                        <input
                                            type='text'
                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                            id="number"
                                            name="number"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                    {
                                       sellerclick && bizownerclick ?
                                        ("")
                                        :
                                         (
                                            <div className='my-2 mx-1 w-100'>
                                            <div> <label>Instagram</label></div>
                                                <input
                                                    type='text'
                                                    className="w-100 py-2 px-4 border rounded-pill border-dark"
                                                    id="instagram"
                                                    name="instagram"
                                                    onChange={(e) => setInstagram(e.target.value)}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                                    {
                                        sellerclick && bizownerclick ?
                                        ("")
                                        :
                                         (
                                             <div>
                                                <div className='d-lg-flex'> 
                                                    <div className='my-2 mx-1 w-100'>
                                                        <div> <label>TikTok Account</label></div>
                                                        <input
                                                            type='text'
                                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                                            id="tiktok"
                                                            name="tiktok"
                                                            onChange={(e) => setTiktok(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className='my-2 mx-1 w-100'>
                                                        <div> <label>Facebook</label></div>
                                                        <input
                                                            type='text'
                                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                                            id="facebook"
                                                            name="facebook"
                                                            onChange={(e) => setFacebook(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                <div className='d-lg-flex'>
                                    <div className='my-2 mx-1 w-100'>
                                        <label>STATE</label>
                                        <select
                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                            id="state"
                                                name="state"
                                                type="text"
                                                onChange={handleStateChange}
                                            >
                                            <option value="" disabled>Select a state</option>
                                            { StatelgasContext.map((items, i) => 
                                                (
                                                    <option key={i} value={items.state}>
                                                        {items.state}
                                                    </option>
                                                ))
                                            }   
                                        </select>
                                    </div>
                                    <div className='my-2 mx-1 w-100'>
                                        <label> LGA</label>
                                        <select
                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                            id="lga"
                                            name="lga"
                                            type="text"
                                            onChange={(e) => setSelectedLgas(e.target.value)}
                                        >
                                            <option value="" disabled>Select an LGA</option>
                                            {filteredLgas.map((items, i) => (
                                                <option key={i} value={items}>
                                                    {items}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='my-2 mx-1 w-100'>
                                    <div><label>Address</label></div>
                                    <input
                                        type='text'
                                        className="w-100 py-2 px-4 border rounded-pill border-dark"
                                        id="streetAddress"
                                        name="streetAddress"
                                        onChange={(e) => setstreetAddress(e.target.value)}
                                    />
                                </div>
                                <div className='d-lg-flex'>
                                    <div className='my-2 mx-1 w-100'>
                                        <div> <label>Email</label></div>
                                        <input
                                            type='email'
                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                            id="email"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div> 
                                    <div className='my-2 mx-1 w-100'>
                                    <div><label>Password</label></div>
                                        <input
                                            type='password'
                                            className="w-100 py-2 px-4 border rounded-pill border-dark"
                                            id="password"
                                            name="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>  

                                <div className='d-flex justify-content-center my-2 mx-1 w-100'><button className='btn btn-success Notifybutton' type="submit" onClick={handleSubmit} >Register</button></div>
                                    <div>
                                        <Link onClick={() => window.location.reload(false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                                            </svg>
                                            <span>back</span>
                                        </Link>
                                    </div>
                            </form>
                        </div>
                    )
                }
                </div>
                
            </div>            
        </div>       
    </div>
  )
}

