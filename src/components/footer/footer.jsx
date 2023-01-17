import React from 'react'
import './footer.scss'
import icon1 from '../../assets/instagram.svg'
import icon2 from '../../assets/linkedin.svg'
import icon3 from '../../assets/github1.svg'
// import iconright from '../../assets/right-arrow.svg'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Footer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  state = {
    email: '',
    text: ''
  }

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
      text: this.state.text
    })
  }

  setText = (e) => {
    this.setState({
      email: this.state.email,
      text: e.target.value
    })
  }

  clearData =  () =>{
    this.setState({
      email: '',
      text :''
    })
  }

  sendMail = (e) => {
    e.preventDefault()
    fetch('https://c1r1waroc1.execute-api.ap-south-1.amazonaws.com/prod/sendMail', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        text: this.state.text
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.MessageId) {
          toast.success('Query Submitted Successfully!');

        } else {
          toast.error('Something went wrong!');
        }
      })
      .catch((error) => {
        toast.error('Something went wrong!');
      });
      this.clearData()
  }






  render() {
    return (
      <div className='footer' id='contact'>
        <div className='footer__details'>
          <div className="contact__heading1">
            Let's work <span className='contact__heading1__color'>together</span>
          </div>
          <div class="container">
            <form >
              {/* <label for="fname">First Name</label> */}
              <input type="email" id="email" name="email" placeholder="Your email" value={this.state.email} onChange={this.setEmail} />

              {/* <label for="lname">Last Name</label> */}
              {/* <input type="text" id="lname" name="lastname" placeholder="Your last name.." /> */}

              {/* <label for="subject">Subject</label> */}
              <textarea id="subject" name="subject" placeholder="Write your query!" value={this.state.text} onChange={this.setText}></textarea>

              <input type="submit" value="Submit" onClick={this.sendMail} />
            </form>
          </div>
          <div className='footer__details__list'>
            <div className='footer__details__list__one'>
              <ul>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to='/clients'>Clients</Link></li> */}
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/project'>Products</Link></li>
              </ul>
            </div>
            <div className='footer__details__list__one' style={{ textAlign: 'right' }}>
              46/1, NH 44, Garvebhavipalya, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068
            </div>
          </div>
          <div className='footer__social'>
            <div className='footer__social__icons'>
              <a href="https://www.instagram.com/smoketrees_digital/" rel='noopener noreferrer' target='_blank'>
                <img src={icon1} alt="Instagram" className="footer__social__icons--style" />
              </a>
              <a href="https://www.linkedin.com/company/smoke-trees/" className="footer__social__icons--style" rel='noopener noreferrer' target='_blank'>
                <img src={icon2} alt="Linkedin" className="footer__social__icons--style" />
              </a>
              <a href="https://github.com/smoke-trees" className="footer__social__icons--style footer__social__github" rel='noopener noreferrer' target='_blank'>
                <img src={icon3} alt="Github" className="footer__social__icons--style" />
              </a>
            </div>
            <div className='footer__social__copy'>
              SmokeTrees Digital LLP
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    )
  }
}

export default Footer
