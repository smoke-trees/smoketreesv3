import React from 'react'
<<<<<<< HEAD
import { Link } from "react-router-dom"
import icon3 from '../../assets/github1.svg'
=======
import './footer.scss'
>>>>>>> 99749b29ff5cd47bf748ca7f9f246dae9eb18703
import icon1 from '../../assets/instagram.svg'
import icon2 from '../../assets/linkedin.svg'
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer' id='contact'>
        <div className='footer__details'>
          <div className="contact__heading1">
            Let's work <span className='contact__heading1__color'>together</span>
          </div>
          <div class="container">
          <form>
            {/* <label for="fname">First Name</label> */}
            <input type="email" id="email" name="email" placeholder="Your email" />

            {/* <label for="lname">Last Name</label> */}
            {/* <input type="text" id="lname" name="lastname" placeholder="Your last name.." /> */}

            {/* <label for="subject">Subject</label> */}
            <textarea id="subject" name="subject" placeholder="Write your query!"></textarea>

            <input type="submit" value="Submit" />
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
            <div className='footer__details__list__one' style={{textAlign: 'right'}}>
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
      </div>
    )
  }
}

export default Footer
