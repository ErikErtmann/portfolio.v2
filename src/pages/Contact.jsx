import "../components/css/Contact.css"
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'

function Contact() {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const recaptchaRef = useRef();

const sendEmail = () => {
        // if (!recaptchaRef.current.getValue()) {
        //     toast.error('Please complete the CAPTCHA');
        //     return;
        // }

        if (!nameRef.current.value.trim() || !emailRef.current.value.trim() || !messageRef.current.value.trim()) {
            toast.error('Please fill out all the fields')
            return;
        }

        const params = {
            "from_name": `${nameRef.current.value} (their e-mail address: ${emailRef.current.value})`,
            "to_name": "Erik",
            "message": messageRef.current.value
        }
    
    emailjs
    .send('service_enc290a', 'template_zbxt7u2', params, 'j_ePGUxkr48bkDG-m')
    .then(() => {
        toast.success("Email successfully sent")
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        recaptchaRef.current.execute();
      }, 
      (error) => {
        toast.error(error.text);
      }
    );
};

    return (
      <div className="contact-container">

        <div className="contact-cap-container">
          <div className="contact-cap">
            <h1 className="title">
              Questions?
            </h1>
          </div>
        </div>

        <div className="contact-menu-container">
          <div className="contact-sub-menu">
            <h3 className="contact-morelinks">
              .Let's talk
            </h3>
          </div>
         </div>  


        <div className='background'>
          <form className='form'>
            <div className='ContactColumn'>
                <label className='contparag' htmlFor="name"></label>
                <input type="text" id="name" ref={nameRef} placeholder="Your name"/>
                <br />
                <label className='contparag' htmlFor="email"></label>
                <input type="text" id="email" ref={emailRef} placeholder="Your e-mail"/>
                <br />
                <label className='contparag' htmlFor="message"></label>
                <textarea id="message" ref={messageRef} placeholder="Your message"/>
                <br />
                {/* <ReCAPTCHA ref ={recaptchaRef} sitekey="AIzaSyDtpFI83gsPZNfivW5M4A9kWPQ-65zJlv0" /> */}
                <button className="styledbutton" type="button" onClick={sendEmail}>
                Send
                </button>
            </div>
          </form>
        </div>

        <ToastContainer />

      </div>
      );
}

export default Contact;