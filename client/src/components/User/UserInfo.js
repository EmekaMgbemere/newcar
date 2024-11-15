import React,{ useState, useContext }from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import {statelgas} from '../../components/Body/Apipage';


export default function UserInfo (){
  
const StatelgasContext = useContext(statelgas);

const [selectedState, setSelectedState] = useState('');

const initialFormData = {
  fullname: '', email: '', phoneNumber: '', password: '',
  streetAddress: '', securityQuestion: '', securityAnswer: '', state: '',
  preferredContactMethod: '', privacyPolicy: false
};

const [formData, setFormData] = useState(initialFormData);

const handleStateChange = (e) => {
  const state = e.target.value;
  setSelectedState(state);
  setFormData({ ...formData, [e.target.name]: state });
  alert(state);
};

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleCheck = (e) => {
  const { name, checked } = e.target;
  setFormData({ ...formData, [name]: checked });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log('Submitting form with data:', formData);
  try {
    const response = await fetch('http://localhost:6969/signupuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const responseData = await response.json();

    alert(JSON.stringify(formData, null, 2));
    console.log(formData);

    if (response.status === 201) {
      console.log('Form submitted:', formData);
      const success = responseData.message;
      alert(success);
      setFormData(initialFormData);
    } else {
      console.error('An error occurred while submitting the form.');
      const errorMessage = responseData.message;
      alert(errorMessage);
    }
  } catch (e) {
    console.log(e);
  }
};


return(
<>
    <div><h1><Nav /></h1></div>
      <div><h3>User Info Form</h3></div>
            <form  onSubmit={handleSubmit}>
                <div className='formclass'>
                    <div className="">
                      <label>Full Name</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                        id="fullname"
                        name="fullname"
                        type="text"
                        onChange={handleChange}
                        value={formData.fullname}
                      />
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                    <div>
                      <label>Phone Number</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="phoneNumber"
                        name="phoneNumber"
                        type="number"
                        onChange={handleChange}
                        value={formData.phoneNumber}
                      />
                    </div>
                    <div>
                      <label>Password</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                      />
                    </div>
                    <div>
                      <label>Address</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="streetAddress"
                        name="streetAddress"
                        type="text"
                        onChange={handleChange}
                        value={formData.streetAddress}
                      />
                    </div>
                    <div>
                      <label>State</label>
                      <select
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="streetAddress"
                        name="state"
                        type="text"
                        value={selectedState} 
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
                    <div>
                      <label>Security Question</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="securityQuestion"
                        name="securityQuestion"
                        type="text"
                        onChange={handleChange}
                        value={formData.securityQuestion}
                      />
                    </div>
                    <div>
                      <label>Security Answer</label>
                      <input
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="securityAnswer"
                        name="securityAnswer"
                        type="text"
                        onChange={handleChange}
                        value={formData.securityAnswer}
                      />
                    </div>
                    <div>
                      <label>Preferred Contact Method</label>
                      <select
                       className="w-100 py-2 px-4 border rounded-pill border-dark"
                       id="preferredContactMethod"
                        name="preferredContactMethod"
                        onChange={handleChange}
                        value={formData.preferredContactMethod}
                      >
                        <option value="">Select</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="sms">SMS</option>
                      </select>
                    </div>
                </div>
                <div className=''>
                      <div className=''>
                            <input
                              className="w-100 "
                              id="privacyPolicy"
                              type="checkbox"
                              name="privacyPolicy"
                              checked={formData.privacyPolicy}
                              onChange={handleCheck}
                            />
                            <label className='d-flex justify-content-center'>I agree to the Privacy Policy</label>
                            
                            <small className='d-flex justify-content-center'><Link to={'/privacypolicy'} target="_blank" rel="noopener noreferrer"> <a>Read Now</a></Link></small>
                      </div>
                    <div className='d-flex justify-content-center'><button className='btn btn-success'type="submit">Register</button></div>
                </div>
            </form>
            
  </>
    )
};

