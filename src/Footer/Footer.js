import React from 'react'
import './Footer.css'
import Banking from './footer-assets/baking.png'
import Best from './footer-assets/Best.png'
import Glutenfree from './footer-assets/gluten-free.png'
import Protein from './footer-assets/Protein.png'
import Artificial from './footer-assets/no-artificial.png'
import Image1 from './footer-assets/insta-1.png'
import Image2 from './footer-assets/insta-2.png'
import Image3 from './footer-assets/insta-3.png'
import Image4 from './footer-assets/insta-4.png'
import Image5 from './footer-assets/insta-5.png'
import Image6 from './footer-assets/insta-6.png'
import Footer2 from './footer-assets/footer.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__health">
                <img src={Best} alt="footer" />
                <img src={Banking} alt="footer" />
                <img src={Protein} alt="footer" />
                <img src={Glutenfree} alt="footer" />
                <img src={Artificial}   alt="footer" />
            </div>
            <div className="footer_heading">
                <h3>BEST QUALITY</h3>
                <h3>ITS BAKED</h3>
                <h3>5 GMS PROTEIN</h3>
                <h3>GLUTEN FREE</h3>
                <h3>NO ARTIFICAL INGREDIENTS</h3>
            </div>
            <div className="footer__para">
                <p>praesent pulvinar neque pellentesque</p>
                <p>praesent pulvinar neque pellentesque</p>
                <p>praesent pulvinar neque pellentesque</p>
                <p>praesent pulvinar neque pellentesque</p>
                <p>praesent pulvinar neque pellentesque</p>
            </div>
            <div className="footer__image">
            <img src={Image1} alt="footer" />
            <img src={Image2} alt="footer" />
            <img src={Image3} alt="footer" />
            <img src={Image4} alt="footer" />
            <img src={Image5} alt="footer" />
            <img src={Image6} alt="footer" />
            </div>
            <div className="final__footer">
                <div class="final__footer__image">
                <img src={Footer2} alt="pho"/>
                </div>
                
            
            <div className="final__footer__title">  want to no more follow us </div>
            <div className="social__icons">
            <div className="footer__cricle">
                        
            <FacebookIcon />   
                    </div>
                    <div className="footer__cricle">
                        
                    <TwitterIcon/>
                    </div>
                    <div className="footer__cricle">
                        
                    <InstagramIcon/>  
                    </div>
                    <div className="footer__cricle">
                        
                    <YouTubeIcon/>  
                    </div>
                    <div className="footer__cricle">
                        
                    <MailOutlineIcon />  
                    </div>
                    </div>
                <div className="footer__address">
                    <div>Distribution</div>
                    <div>901-947 South Drive,Yelahanka Bangalore,Karnataka INDIA</div>
                    <div>Telephone:+902084775</div>
                    <div>Email:+info@byond.com</div>
                </div>
               
                
               
               
                
            
            </div>
            <div className="copyright">
           <p style={{paddingTop: '22px'}}>Copyright 2021 BYOND.All rights reserved</p> 
            </div>
        </div>
    )
}

export default Footer
