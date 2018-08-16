import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => (
	// <header class={style.header}>
	// 	<h1>Meghdoot</h1>
	// 	<nav>
	// 		<Link activeClassName={style.active} href="/">Home</Link>
	// 		<Link activeClassName={style.active} href="/profile">Me</Link>
	// 		<Link activeClassName={style.active} href="/profile/john">John</Link>
	// 	</nav>
	// 	</header>

   <div class="header header-pading custom-grid-container">
       <div class="grid-container">
        {/* <div class="title-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
          <button class="menu-icon" type="button" data-toggle></button>
        </div> */}
       <div  id="example-animated-menu" class="top-bar custom-top-bar">
         <div class="grid-x grid-padding-x" style="width:100%">
            <div class="top-bar-right small-12 medium-12 large-12 cell">
                <div class="float-right">
                    <ul class="dropdown menu page-menu" data-dropdown-menu>
                      <li><a href="#">Page 1</a></li>
                      <li><a href="#">Page 2</a></li>
                      <li><a href="#">Page 3</a></li>
                       <li>
                         <a href="#">
                           Contact number
                           <span>0345 3253532</span>
                         </a>
                        </li>
                    </ul>
                    <ul class="dropdown menu social-icons">
                          <li><a href=""><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
                          <li><a href=""><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                          <li><a href=""><FontAwesomeIcon icon={['fab', 'pinterest']} /></a></li>
                          <li><a href=""><FontAwesomeIcon icon={['fab', 'youtube-square']} /></a></li>
                     </ul>
                </div>     
            </div>
         
        </div>    
      </div>
           <div class="site-logo">
                <img src="../../assets/images/Logox3.png" />
           </div>
           
       </div>        
   </div>
     
);

export default Header;
