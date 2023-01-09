import React from 'react'
import { Link } from "react-router-dom"
import icon3 from '../../assets/github1.svg'
import icon1 from '../../assets/instagram.svg'
import icon2 from '../../assets/linkedin.svg'
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__details'>
          <div className='footer__details__list'>
            <div className='footer__details__list__one'>
              <ul>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to='/clients'>Clients</Link></li> */}
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/project'>Products</Link></li>
              </ul>
            </div>
            <div className='footer__details__list__one'>
              <ul>
                <li style={{ textAlign: 'right' }}>Contact Us <br />
                  <div style={{marginTop: '10px'}}>
                  <a
                    href='mailto:info@smoketrees.in'
                    target='_blank'
                    rel='noreferrer noopener'
                  >info@smoketrees.in</a>
                  </div>
                </li>
              </ul>
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
