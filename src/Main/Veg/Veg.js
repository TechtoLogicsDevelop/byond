import React from 'react'
import './Veg.css'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import veggiePattren from './veggie-assets/veggie-pattren.png'
import Top from './veggie-assets/menu-top-bg.png'
import Bg from './veggie-assets/bg.png'
import woods from './veggie-assets/peanut-puffs-wood.png'
import veggiePackBack from './veggie-assets/veggie-pack-back.png'
import veggiePack from './veggie-assets/veggie-pack.png'
import Veg1 from './veggie-assets/veg-1.png'
import Veg2 from './veggie-assets/veg-2.png'
import Veg3 from './veggie-assets/veg-3.png'
import Veg4 from './veggie-assets/veg-10.png'
import Corn from './veggie-assets/corn.png'
import Rice from './veggie-assets/rice.png'
import Millet from './veggie-assets/millet.png'
import Vegetable from './veggie-assets/vegetable.png'
import cheesepuffs10 from './veggie-assets/cheese-puffs10.png'
import Gms5 from './veggie-assets/5-gms.png'
import Gluten from './veggie-assets/gluten.png'
import NOartificial from './veggie-assets/no-artificial.png'
import vegPuff3 from './veggie-assets/veggpuff.png'
import vegepuffpack from './veggie-assets/vege-puff-pack-2.png'
import {motion} from 'framer-motion'
function Veg() {
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
        <div className="veg">
            <div className="veg__bg">
                <div className="veg__image__top">
                <img src={veggiePattren} alt="chickpea-pattren"/>
                </div>
                 <div className="veg__image__second">
                 <img src={Top} alt="table"/>
                </div>
             <div className="veg__image__thrid">
            <img src={Bg} alt="chickpea-pattren"/>
            </div>  
            
            <div className="veg__3">
                <img  src={woods} alt="peanu"/> 
                </div>
           <motion.div className="veg__back" 
           
           initial={{x:50}}
             animate={{x:-10}}
             transition={{delay:0.4,type:'spring',stiffness:5, yoyo:Infinity}}><img  src={veggiePackBack} alt="good" />
             </motion.div>   
            
           <motion.div className="veg__5 initial"initial ={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:40,yoyo:Infinity}} >
             <img src={Veg2} alt="right" /> 
             </motion.div> 
             <div className="veg__1"> 

                <img src={vegPuff3} alt="good" /> 
            </div> 
                <div  className="veg__front"><img  src={veggiePack} alt="good" /></div> 
                 
                
                
                
                 <motion.div className="veg__2" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
                <img  src={Veg1} alt="chickpea"/>
                </motion.div> 
                
                
                
                
             
                 <motion.div className="veg__ingridents" 
                 initial={{opacity:0}}
                 animate={{opacity:shouldShowActions ? 1:0}}  >
                    <img src={Corn} alt="ingridents"/>
                    <img src={Vegetable} alt="ingridents"/>
                    <img src={Rice} alt="ingridents"/>

                    <img src={Millet} alt="ingridents"/>
                    <p style={{    marginTop: '45px'}}>=</p>
                    <img src={cheesepuffs10}  alt="ingridents"/>
                    </motion.div>
                    
                    <motion.div className="veg__ingridents__title" 
                    initial={{opacity:0}}
                    animate={{opacity:shouldShowActions ? 1:0}} >
                        <p>CORN</p> <b>+</b>
                        <p>CHICKPEA</p> <b>+</b>
                        <p>RICE</p> <b>+</b>
                        <p>MILLET</p> 
                    
                    
                    </motion.div>
                    
               
            

            
            
           
             <motion.div className="veg__6" initial={{x:-50}}
             animate={{x:0}}
             transition={{delay:0.2,type:'spring',stiffness:50,yoyo:Infinity}}>
             <img src={Veg3} alt="right" /> 
             </motion.div>
               
             <motion.div className="veg__7" initial={{x:20}}
             animate={{x:0}}
             transition={{delay:0.2,type:'spring',stiffness:120,yoyo:Infinity}}>
             <img src={Veg4} alt="right" /> 
             </motion.div>
             
                 <div className="veg__content"> 
                 
             
                     <hr />
                     <p>Ricotta,sun dried tomatoes,garlic,mozzarella,cheese,topped with lightly drizzled red souce,pesto,and fresh basil</p>
                    <h1>NOT FIRED ITS BAKED</h1>
                    <div className="veg__name__content">
                    <hr /> <p>Pick Size</p> <hr />
                    </div>
                    <div className="veg__cricle-box">
                    <div className="veg__cricle">
                        60GRMS
                        
                    </div>
                    
                    <div className="veg__cricle">
                        20GRMS
                       
                    </div>
                    
                    </div>
                    <div className="veg__cricle-box1">
                    <p>99-00 RS</p>
                    <p>30-00 RS</p>
                    
                    </div>
                    
                    <div className="veg__box__button">
                    <Button>
                        <PlayArrowIcon />
                         KNOW MORE</Button>
                         <Button>
                            <ShoppingBasketIcon />
                        BUY NOW</Button>
                    </div>
                    </div>
                   
                   
                 
             
             
             
             
            <div className="veg__health">
            <img src={Gms5} alt="health" /> 
            <p>5 GMS PROTEIN</p>
             <img src={Gluten} alt="health"/>   
             <p> GLUTEN FREE</p>
             <img src={NOartificial} alt="health"/>    
             <p> NO ARTIFICAL INGREDIENTS</p>      
            </div>
            

            <div className="veg__title__image">
                <img src ={vegepuffpack} alt="ok"/>
            </div>
            </div>
           
            
        </div>
    )
}

export default Veg