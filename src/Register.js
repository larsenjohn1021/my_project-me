import React from 'react'

export default function Register() {

    const botCol ={
        color:'red'
    };

     function regis(){
       
    }

    return (
       
      <div className="Register">
         <h>Register</h>
         <p>{"\n"}</p>
         <input type="text" placeholder= "username..."/><p>{"\n"}</p>
         <input type="password" placeholder= "Password..."/><p>{"\n"}</p>
         <input type="integer" placeholder= "Age..."/><p>{"\n"}</p>
         <button style={botCol} onClick={regis}>Register</button>
     </div>
          
    )
}
// class Register extends React.Component{
//     render(){
//         <div>
//             <p>reggggggggg</p>
//         </div>
//     }
// }
// export default Register;