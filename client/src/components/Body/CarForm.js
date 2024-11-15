
import React,{useState} from 'react';
import Nav from '../Nav/Nav';
import { v4 as uuidv4 } from 'uuid';

export default function CarForm(){
 

  const initialValues={
    model: '', year: '', price: '', bodyType: '',
    engineType: '', transmission: '', fuelType: '',
    mileage: '', bodyColor: '', customsPaper: '', sellerName: '', 
    sellerLocation: '', sellercontactInfo: '', sellerId: uuidv4(),
    frontView: '', frontseatView: '',backseatView: '',
    engineView: ''
  }

  const [carform, setFormData] = useState(initialValues);


  const handleChange = (e) => {
    setFormData({ ...carform, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting form with data:', carform);

      try {
        const response = fetch('http://localhost:6969/regcar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(carform)
        });
    
        const responseData =  response.json();
    
        console.log(carform);
    
        if (response.status === 201) {
          setFormData(initialValues)
          console.log('Form submitted:', carform);
          const success = responseData.message;
          alert(success);
        } else {
          console.error('An error occurred while submitting the form.');
          const errorMessage = responseData.message;
          alert(errorMessage);
        }
      } catch (e) {
        console.log(e);
      }
      console.log('Form data', carform)
    };
  

  return(
    <div>
      <div><h1><Nav /></h1></div>
      <div><h3>Car Reg Form</h3></div>
        <form onSubmit={handleSubmit}>
        <div className='formclass'>
        <div className="h6 b">
          <label className="py-2" htmlFor="model">Model</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="model"
            name="model"
            type="text"
            onChange={handleChange}
            value={carform.model}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="year">Year</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="year"
            name="year"
            type="number"
            onChange={handleChange}
            
            value={carform.year}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="price">Price</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="price"
            name="price"
            type="number"
            onChange={handleChange}
            
            value={carform.price}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="bodyType">Body Type</label>
          <select
            id="bodyType"
            name="bodyType"
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            onChange={handleChange}
            value={carform.bodyType}
          >
            <option value="" >Select</option>
            <option value="firstbody">First Body</option>
            <option value="refurbished">Refurbished</option>
          </select>
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="engineType">
            Engine Type
            <small> (eg: V4, V6, V8)</small>
            </label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="engineType"
            name="engineType"
            type="text"
            onChange={handleChange}
            
            value={carform.engineType}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="transmission">Transmission</label>
          <select
            id="transmission"
            name="transmission"
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            onChange={handleChange}
            
            value={carform.transmission}
          >
            <option value="">Select</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            onChange={handleChange}
            value={carform.fuelType}
          >
            <option value="">Select</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="cng">CNG</option>
          </select>
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="bodyColor">Body Color</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="bodyColor"
            name="bodyColor"
            type="text"
            onChange={handleChange}
            
            value={carform.bodyColor}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="customsPaper">Customs Paper</label>
          <select
            id="customsPaper"
            name="customsPaper"
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            onChange={handleChange}
            value={carform.customsPaper}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="sellerName">Seller Name</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="sellerName"
            name="sellerName"
            type="text"
            onChange={handleChange}
            
            value={carform.sellerName}
          />
        </div>
        <div className="h6 b">
            <label className="py-2" htmlFor="sellerLocation">Seller Location</label>
            <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="sellerLocation"
              name="sellerLocation"
              type="text"
              onChange={handleChange}
              
              value={carform.sellerLocation}
            />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="sellercontactInfo">
            Seller Contact Info 
            <small> (Whatsapp Number)</small>
          </label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="sellercontactInfo"
            name="sellercontactInfo"
            type="text"
            onChange={handleChange}
            
            value={carform.sellercontactInfo}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="frontView">Front Of Car</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="frontView"
            name="frontView"
            type="file"
            onChange={handleChange}
            value={carform.frontView}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="frontseatView">Front Seat View</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="frontseatView"
            name="frontseatView"
            type="file"
            onChange={handleChange}
            value={carform.frontseatView}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="backseatView">Back Seat View</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="backseatView"
            name="backseatView"
            type="file"
            onChange={handleChange}
            value={carform.backseatView}
          />
        </div>
        <div className="h6 b">
          <label className="py-2" htmlFor="engineView">Engine View</label>
          <input
            className="w-100 py-2 px-4 border rounded-pill border-dark"
            id="engineView"
            name="engineView"
            type="file"
            onChange={handleChange}
            value={carform.engineView}
          />
        </div>

    </div>
    <div className='d-flex align-items-center justify-content-center '>
    <button type='submit' className='btn btn-success'>Submit</button>
    </div>
        </form>
    </div>
  )
}
