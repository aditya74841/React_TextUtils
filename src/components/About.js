



import React,{useState} from 'react'

export default function () {
    // let myStyle={
    //     backgroundColor:'black'
    // }
    const [myStyle,setMyStyle]=useState({
        color:'white',
        backgroundColor:'black'

    })
    const [btntext,setBtnText]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color=='white')
        {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
    }
  return (
    <div className='container' style={myStyle}>
      
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3" >
  <label for="exampleFormControlTextarea1" class="form-label" >Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
</div>
       <div className="container"> <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button></div>
      
    </div>
  )
}
