import React from 'react'
import './Peanut.css'
import Button from '@material-ui/core/Button';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Putpattern from './peanut-assets/put-pattren.png'
import Background from './peanut-assets/background-filter.png'
import peanutPuffs1 from './peanut-assets/peanut-puffs-pack-1.png'
import peanutnut from './peanut-assets/peanut-puffs-nut-1.png'
import peanutnut2 from './peanut-assets/peanut-puffs-nut-2.png'
import peanutnut3 from './peanut-assets/peanut-puffs-nut-3.png'
import peanutnut4 from './peanut-assets/peanut-puffs-nut-4.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import peanutnut5 from './peanut-assets/peanut-puffs-nut-5.png'
import Gms5 from './peanut-assets/5-gms.png'
import NOartificial from './peanut-assets/no-artificial.png'
import Gluten from './peanut-assets/gluten.png'

import peanutPuffsback from './peanut-assets/peanut-puffs-pack-back.png'
import peanutPuffsPuff from './peanut-assets/peanut-puffs-puff.png'
import peanutWood from './peanut-assets/peanut-puffs-wood.png'
import TopGraphic from './peanut-assets/top-graphic.png'
import Corn from './peanut-assets/corn.png'
import Rice from './peanut-assets/rice.png'
import Millet from './peanut-assets/millet.png'
import Almond from './peanut-assets/almond10.png'
import butterPeanut from './peanut-assets/butter-puff-on-plate.png'
import peanutTitlefrom  from './peanut-assets/peanut-title-2.png'
import {motion} from 'framer-motion'

function Peanut() {
    const [shouldShowActions,setShouldShowActions]=React.useState(false);
    const [lastYPOs,setLastYPos]=React.useState(0);
    React.useEffect(()=>{
            function handleScroll(){
                const yPos=window.scrollY;
                const isScrollingUp=yPos<lastYPOs;
                setShouldShowActions(isScrollingUp)
                setLastYPos(yPos);
                console.log('scrlled')

            }
            window.addEventListener('scroll',handleScroll,false)
            return()=>{
                window.removeEventListener('scroll',handleScroll,false)
            }
    },[lastYPOs])
    return (
        <div className="peanut">
            <div className="peanut__bg">
                <div className="peanut__image__top">
                <img src={Putpattern} alt="chickpea-pattren"/>
                </div>
                 <div className="peanut__image__second">
                 <img src={TopGraphic} alt="table"/>
                </div>
                <motion.div className="peanut__2"  initial ={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:40,yoyo:Infinity}} >
                <img  src={peanutnut4} alt="chickpea"/>
                </motion.div> 
             <div className="peanut__image__thrid">
            <img src={Background} alt="chickpea-pattren"/>
            </div>  
            <div className="peanut__health">
            <img src={Gms5} alt="health" /> 
            <p>5 GMS PROTEIN</p>
             <img src={Gluten} alt="health"/>   
             <p> GLUTEN FREE</p>
             <img src={NOartificial} alt="health"/>    
             <p> NO ARTIFICAL INGREDIENTS</p>      
            </div>
            <motion.div className="pea__nut" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={peanutnut} alt="right" />
            </motion.div>
            <motion.div className="pea__nut1" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}} >
            <img src={peanutnut2} alt="chickpea"/>
            </motion.div>
            <motion.div className="nut__image" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={peanutnut3} alt="right" /> 

            </motion.div>
                  <div className="peanut__content">
                  
            
                  
                     <hr />
                     <p>Ricotta,sun dried tomatoes,garlic,mozzarella,cheese,topped with lightly drizzled red souce,pesto,and fresh basil</p>
                    <h1>NOT FIRED ITS BAKED</h1>
                    <div className="peanut__name__content">
                    <hr /> <p>Pick Size</p> <hr />
                    </div>
                    <div className="peanut__cricle-box">
                    <div className="peanut__cricle">
                        60GRMS
                        
                    </div>
                    
                    <div className="peanut__cricle">
                        20GRMS
                       
                    </div>
                    
                    </div>
                    <div className="peanut__cricle-box1">
                    <p>99-00 RS</p>
                    <p>30-00 RS</p>
                    
                    </div>
                    
                    <div className="peanut__box__button">
                    <Button>
                        <PlayArrowIcon />
                         KNOW MORE</Button>
                         <Button>
                            <ShoppingBasketIcon />
                        BUY NOW</Button>
                    </div>
                    </div>
                   
                   <div className="Products">
                   <div className="peanut__3">
                <img  src={peanutWood} alt="peanu"/> 
                </div>
            <motion.div className="peanut__back" initial={{x:50}}
             animate={{x:-10}}
             transition={{delay:0.4,type:'spring',stiffness:5, yoyo:Infinity}}>
                <img  src={peanutPuffsback} alt="good" />
                </motion.div>   
            <div className="peanut__1">
                <img src={peanutPuffsPuff} alt="good" /> 
            </div>
               <div  className="peanut__front">
                   <img  src={peanutPuffs1} alt="good" /></div> 
                
                
                
                
                   </div>
           
                
                
                
                
             
                 <motion.div className="peanut__ingridents" initial={{opacity:0}}
                 animate={{opacity:shouldShowActions? 1:0}}>
                    <img src={Corn} alt="ingridents"/>
                    <img src={Almond} alt="ingridents"/>
                    <img src={Rice} alt="ingridents"/>

                    <img src={Millet} alt="ingridents"/>
                    <p style={{    marginTop: '45px'}}>=</p>
                    <img src={butterPeanut}  alt="ingridents"/>
                    </motion.div>
                    
                    <motion.div className="peanut__ingridents__title" initial={{opacity:0}}
                 animate={{opacity:shouldShowActions? 1:0}}>
                        <p>CORN</p> <b>+</b>
                        <p>PEANUTS</p> <b>+</b>
                        <p>RICE</p> <b>+</b>
                        <p>MILLET</p> 
                    
                    
                    </motion.div>
                    
               
            <div className="peanut__title__image">
                <img src ={peanutTitlefrom} alt="ok"/>
            </div>
            </div>
           
            
        </div>
    )
}

export default Peanut