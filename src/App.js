import React, {Component}  from 'react';
import {useState} from 'react';
import './App.css';
import Group from '../src/assets/Group.png';
import Modal from 'react-modal';

function App(){

    const[modalIsOpen, setModalIsopen]=useState(false)
    return (
    <div className="container ">
    <div className="row mt-4">
      <div className="col-5">
        
      </div>
      <div className="col-7 row mx-0">
      <input className="" id="search"  type="text"/>
      <button className="btn btn-primary ml-2 px-4" id="search-bnn">submit</button>
      </div>
    </div>
     <div className="row mt-5 mx-0">
     <div className="col-2 "></div>
     <div className="col-3 mx-0 text-center">
        <img id="profile-img" src="https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
      </div>
        <div className="col-7 ">
        <div className="row mx-0">
          <div className="col-4 row text-center" id="tickbox">
            <h3>One Plus</h3>
            <img className=" m-2" id="tick" src={Group} alt=""/>
          </div>
          <div className="col-6 row">
          <button className="btn btn-primary ml-2 px-4 py-0" id="submit-bnn">Follow</button>
          <button className="btn btn-primary ml-2 px-4" id="submit-bnn"></button>
          <h2 className="mx-4" id="dotx">...</h2>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row mt-4 text-left">
          <div className="col-3">
            <p><strong>3,330</strong> Posts</p>
          </div>
          <div className="col-3">
          <p><strong>3.4m</strong> followers</p>
          </div>
          <div className="col-3">
          <p><strong>5.3m</strong> following</p>
          </div>
          <div className="col-3"></div>
        </div>
        <div className=" mt-2 mb-5 text-left">
          <h5>Darika Samak</h5>
          <p className="my-0 py-0">The newest addition to the flagship killer lineup: #oneplus8T available now!</p>
          <a className="my-0 py-0" href="">oneplusgofurther.com</a>
          <p className="small">Followed by <strong>shristi</strong> and <strong>jivesh92</strong> </p>
        </div>
        </div>
     </div>
     <div className="row">
       <div className="col-2"></div>
       <div className="col-10">
       <hr className="mb-0 pb-0"/>
       <div className="row">
         <div className="col-4">  </div>
         <div className="col-4 row text-center">
         <div className="col-4 py-3 my-0" id="boup">POSTS</div>
         <div className="col-4  py-3 my-0">IGTV</div>
         <div className="col-4 py-3 my-0">TAGGED</div>
         </div>
         <div className="col-4"></div>
       </div>
       </div>
     </div>
     
     <div className="row">
     <div className="col-2"></div>
       <div className="col-10 row">
    <div className="col-4 my-2">
      <button onClick={()=>setModalIsopen(true)}>

      <img className="w-100" id="feedimg" src="https://images.unsplash.com/photo-1607382007923-6ba0d39f8617?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
      </button>
      <Modal className="p-0 mt-5 bg-white" isOpen={modalIsOpen} id="modal">
      <div className="row">
        <div className="col-6">
          <img className="w-100" src="https://images.unsplash.com/photo-1607382007923-6ba0d39f8617?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
        </div>
        <div className="col-6 ">
        <div className="row px-0 mx-0 py-1 text-left" id="iden">
          <div className="col-10 row">

          <img className="m-2 " id="smallprof" src=" https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          <h5 className="" id="smallname">One Plus</h5>
          </div>
          <div className="col-2 text-center">
          <button onClick={()=>setModalIsopen(false)}>

            <p className=" mt-3 px-4">x</p>
          </button>
          </div>
          
        </div>
          <br/>
          <div className="row px-0 mx-0 py-1" id="iden2">

          <img className="m-2" id="smallprof" src=" https://images.unsplash.com/photo-1601758064224-c3c5ec910095?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          <h5 id="smallname2"> <strong className="text-black">One Plus</strong> I ate his liver with some fava beans.</h5>
        </div>
        <br/>
        <div>
          <h2><strong>410</strong> Likes</h2>
          <h2><strong>20</strong> Comments</h2>
          <h2><strong>13k</strong> views</h2>
        </div>
        </div>
      </div>
      
      </Modal>






    </div>
        </div>
       
     </div>
     <br/>
     <br/>
     
     <br/>
    </div>
  )
  
}

  
  


export default App;
