import { h } from 'preact';
import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => (
    <div class="footer footer2">
    <div class="grid-container">
          <div class="grid-x grid-padding-x">
              <div class="small-12 medium-8 large-8 cell footer-menu">
                    <div class="grid-x g rid-padding-x">
                         <div class="small-12 medium-12 large-12 cell">
                                  <h4>Pages</h4>
                             </div>
                      </div>
                       <div class="grid-x g rid-padding-x">
                         <div class="smal-12 medium-12 large-12 cell">            
                                  <ul class="menu">
                                     <li><a href="">Page1</a></li>
                                     <li><a href="">Page2</a></li>
                                     <li><a href="">Page3</a></li>
                                     <li><a href="">Page4</a></li>
                                     <li><a href="">Page5</a></li>
                                  </ul>
                         </div>
                    </div>
                   <div class="grid-x g rid-padding-x">
                     <div class="small-12 medium-12 large-12 cell">
                          <div class="footer-contact-details">
                               <p class="address-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam id magna.dolor sit amet, consecd magna.</p>
                               <p class="contact-no">Phone:0343 3234310 , 0343 3234310 , 0343 3234310</p>
                               <p class="email">Email:info@meghdoot.com.bd</p> 
                          </div>
                     </div>
                      </div>
              </div>
              <div class="small-12  medium-4 large-4 cell footer-social-menu">
                   <div class="grid-x g rid-padding-x">
                         <div class="small-12 medium-12 large-12 cell">
                                  <h4>Social</h4>
                                  <ul class="menu">
                                    <li><a href=""><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={['fab', 'pinterest']} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={['fab', 'youtube-square']} /></a></li>
                                  </ul>
                         </div>
                    </div>
              </div>
          </div>
          <div class="grid-x grid-padding-x">
              <div class="small-12 medium-12 large-12 cell">
                 <p class="copyright text-center">Copyright &copy;2018</p>
              </div>
          </div>
          <div class="footer-dropdown-sec">
         <div class="dropdown">
                 <button type="button" id="drop1" class="button theme-btn1">Lorem ipsum dolor sit amet <span class="caret"><FontAwesomeIcon icon="caret-down" /></span></button>
                 <div class="dropdown-content">
                     <ul>
                         <li>Dropdown1</li>
                         <li>Dropdown2</li>
                         <li>Dropdown3</li>
                     </ul>
                 </div>
         </div>
        </div>
    </div>         
 </div>
);

export default Footer;
