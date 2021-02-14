import React,{ useState,useEffect } from 'react'

import './Add_car.css';
import {useHistory} from 'react-router-dom';

import { getToken ,getUser} from './Common';

function Add_mobile() {
    const history = useHistory();

 
 const user=getUser();
 const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [used_for, setUsedfor] = useState('')
  

  const [price, setPrice] = useState('')
  const [screensize, setScreensize] = useState('')
  const [sim, setSim] = useState('')
  const [ram, setRam] = useState('')
  const [backcamera, setBackcamera] = useState('')
  

  const [frontcamera, setFrontendCamera] = useState('')
  const [cpu_core, setCpucore] = useState('')

  const [internal_storage, setInternalStorage] = useState('')
  
  const [battery, setBattery] = useState('')
  const [home_delivery, setHomeDelivery] = useState('')
  const [delivery_area, setDeliveryArea] = useState('')


  const [warrenty, setWarrenty] = useState('')
  const [warrenty_period, setWarrentyPeriod] = useState('')


  const token = getToken();


  const insertAdd = () => {
    
    const uploadData = new FormData();
    uploadData.append('username', user);
    uploadData.append('image', image);
    uploadData.append('description', description);

    uploadData.append('used_for', used_for);
    uploadData.append('price', price);
    uploadData.append('screen_size', screensize);
    uploadData.append('sim', sim);
    uploadData.append('back_camera', backcamera);
    uploadData.append('RAM', ram);
    uploadData.append('front_camera', frontcamera);
    uploadData.append('CPU_core', cpu_core);
    uploadData.append('internal_storage', internal_storage);
    
    uploadData.append('battery', battery);
    uploadData.append('home_delivery', home_delivery);
    uploadData.append('delivery_area', delivery_area);
    uploadData.append('warrenty', warrenty);
    uploadData.append('warrenty_period', warrenty_period);
    fetch('http://127.0.0.1:8000/addpost_phones/', {
      method: 'POST',
      body: uploadData,
      
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
    history.push('/login_home');
    
}
    return (
        <>
        
        <div >
                <h1> Add Posts</h1>
        
                <input type="text" className='username_input' id='username' value = {user} onChange={(evt) => setUsername(evt.target.value)} disabled/><br/>
        
                <label for="image" className='add_post_label'> Upload Image :</label>  <br/>
        <input type='file' onChange={(evt) => setImage(evt.target.files[0])} className='add_post_input'/><br/>
        <br/>
        <label for="image" className='add_post_label'> Description:</label>  <br/>
        <input type="text" id='description' className='add_post_input' value = {description} onChange={(evt) => setDescription(evt.target.value)} /><br/>
                     <br/>
                     <label for="image" className='add_post_label'> Used For</label>  <br/>
                     <input type="text" id='used_for' className='add_post_input' value = {used_for} onChange={(evt) => setUsedfor(evt.target.value)}  /><br/>
                <br/>
               <label for="price" className='add_post_label'> Price :</label>  <br/>
                <input type="text" id='price' className='add_post_input' value = {price} onChange={(evt) => setPrice(evt.target.value)} /><br/>
                <br/>
                <label for="screen_size" className='add_post_label'>Screen Size: </label>  <br/>
                <input type="number" id="screen_size" className='add_post_input' value = {screensize} onChange={(evt) => setScreensize(evt.target.value)}/><br/>
               
                <label for="sim" className='add_post_label'>Sim: </label>  <br/>
                <input type="text" id="sim" className='add_post_input' value = {sim} onChange={(evt) => setSim(evt.target.value)}/><br/>
                <label for="RAM" className='add_post_label'>RAM(GB): </label>  <br/>
                <input type="number" id="RAM" className='add_post_input' value = {ram} onChange={(evt) => setRam(evt.target.value)}/><br/>
                
                <label for="back_camera" className='add_post_label'>Back Camera(mp): </label>  <br/>
                <input type="number" id="back_camera" className='add_post_input' value = {backcamera} onChange={(evt) => setBackcamera(evt.target.value)}/><br/>
                <label for="front_camera" className='add_post_label'>Front Camera(mp): </label>  <br/>
                <input type="number" id="front_camera" className='add_post_input' value = {frontcamera} onChange={(evt) => setFrontendCamera(evt.target.value)}/><br/>
                <label for="CPU_core" className='add_post_label'>CPU Core: </label>  <br/>
                <input type="text" id="CPU_core" className='add_post_input' value = {cpu_core} onChange={(evt) => setCpucore(evt.target.value)}/><br/>
                <label for="internal_storage" className='add_post_label'>Internal Storage(GB): </label>  <br/>
                <input type="number" id="internal_storage" className='add_post_input' value = {internal_storage} onChange={(evt) => setInternalStorage(evt.target.value)}/><br/>
                <label for="battery" className='add_post_label'>Battery: </label>  <br/>
                <input type="time" id="battery" className='add_post_input' value = {battery} onChange={(evt) => setBattery(evt.target.value)}/><br/>
                <label for="home_delivery" className='add_post_label'>Home_delivery: </label>  <br/>
                <select 
            value = {home_delivery} onChange={(evt) => setHomeDelivery(evt.target.value)}
            className='add_post_label'
         >
           <option value="">---</option>
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
               
      <br/>
      <label for="delivery_area" className='add_post_label'>Delivery Area: </label><br/>
                <input type="text" id='delivery_area' className='add_post_input' value = {delivery_area} onChange={(evt) => setDeliveryArea(evt.target.value)} /><br/>
                <br/>
                <br/>
                <label for="warrenty"className='add_post_label' >Warrenty : </label>

                <select 
        value={warrenty} 
        onChange={(evt) => setWarrenty(evt.target.value)} 
       
      >
        <option value="">---</option>
       <option value="YES">YES</option>
        <option value="No">No</option>
        
      </select>
      <br/>
      
               
      <br/>
                <label for="warrenty_period" className='add_post_label' >Warrenty Period: </label><br/>
                <input type="number" id='warrenty_period' className='add_post_input' value = {warrenty_period} onChange={(evt) => setWarrentyPeriod(evt.target.value)} /><br/>
             
                <br/>
                <button onClick={() => insertAdd()} className='post_botton'>Post</button>

            
        </div>
        
        </>
    )
}

export default Add_mobile