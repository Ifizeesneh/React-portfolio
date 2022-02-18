import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.jfif";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
     
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
            e.preventDefault();
            emailjs
            .sendForm(
                'service_l4pffdb', 
                'template_ktbgvnk', 
                formRef.current, 
                "user_FW6mkorAhkkc93l8HYiAD")
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };

    

  return (
    <div className='c'>
     <div className="c-bg"></div>
     <div className="c-wrapper">
         <div className="c-left">
             <h1 className="c-title">Let's discuss your project</h1>
             <div className="c-info">
                 <div className="c-info-item">
                     <img 
                     src={phone}
                     alt="" 
                     className="c-icon" 
                     />
                     +234 814 691 7848
                 </div>
                 <div className="c-info-item">
                     <img 
                     src={email}
                     alt="" 
                     className="c-icon" 
                     />
                     deleoyeroifeoluwa@gmail.com
                 </div>
                 <div className="c-info-item">
                     <img 
                     src={address}
                     alt="" 
                     className="c-icon" 
                     />
                     Grandma ta, Abraham Adesanya,Ajah,Lagos,Nigeria.
                 </div>
             </div>
         </div>
         <div className="c-right">
             <p className="c-desc">
                <b> Whats your gist?</b> Get in touch.Always available for freelancing if the right project 
                 comes along
             </p>
             <form ref={formRef}  onSubmit={handleSubmit}>
                 <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                 <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder='subject' name="user_subject" />
                 <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                 <textarea style= {{backgroundColor: darkMode && "#333"}} name="message" placeholder='Message'  rows="7"></textarea>
                 <button>Submit</button>
                 {done && "Sent, Thank you"}
             </form>
         </div>
     </div>
    </div>
  )
}

export default Contact
