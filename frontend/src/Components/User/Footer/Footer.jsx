import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>  
    <footer class="site-footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6 className='text-dark'>About</h6>
            <p class="text-justify text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div class="col-xs-6 col-md-3">
          
            <ul class="footer-links">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 className='text-dark'>Quick Links</h6>
            <ul class="footer-links text-dark">
              <li><Link className='text-dark text-decoration-none'>About Us</Link></li>
              <li><Link className='text-dark text-decoration-none' >Contact Us</Link></li>
              <li><Link className='text-dark text-decoration-none' >Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by Farm
        
            </p>
          </div>

        
        </div>
      </div>
</footer></div>
  )
}

export default Footer