import React from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  function handleClick() {
    axios.post("https://api.brevo.com/v3/smtp/email", {
      sender: {
        "name": "Rutwik",
        "email": "rutwik2514@gmail.com"
      },
      "subject": "Thanks for Subscribing",
      "textContent": "Thanks for Subscribing",
      "to": [{
        "name": `${name}`,
        "email": `${email}`
      }]
    }, {
      headers: {
        "api-key": "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"
      }
    }).then((res) => {
      console.log(res.data);
      window.alert("email sent");
    }).catch((err) => {
      console.log(err);

    })
  }
  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handleNameChange(e) {
    setName(e.target.value)
  }
  return (
    <>
    <section style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>

      {/* <form> */}
      <div className='d-flex justify-content-center align-items-center' style={{flexDirection:'column'}}>

        <div className="form-group m-2">
          <label >Email address</label>
          <input type="email" className="form-control"placeholder="Enter email" onChange={handleEmailChange} />
        </div>
        <div className="form-group m-2">
          <label>Name</label>
          <input type="text" className="form-control"  placeholder="Name" onChange={handleNameChange} />
        </div>
        <button type="submit" className="btn btn-primary m-2" onClick={handleClick}>Submit</button>
      </div>
      {/* </form> */}
    </section>
    </>
  )
}

export default App