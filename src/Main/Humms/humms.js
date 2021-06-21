import React from 'react'
import './Humms.css'
import HummusPuffsBack from './HUMMUS-assets/hummus-Puffs-back.png'
import HummusPuffs from './HUMMUS-assets/hummus-Puffs.png'
import TopGraphic from './HUMMUS-assets/top-graphic.png'
import Chickpea from './HUMMUS-assets/chickpea-1.png'
import ChickpeaPattren from './HUMMUS-assets/chickpea-pattren.png'
import BG from './HUMMUS-assets/bg.png'
import HumusPuffTop from './HUMMUS-assets/humus-puff-on-top.png'
import Chickpea3 from './HUMMUS-assets/chickpea-3.png'
import Chickpea2 from './HUMMUS-assets/chickpea-2.png'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './Humms.css'
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Corn from './HUMMUS-assets/corn.png'
import Chickpea10 from './HUMMUS-assets/chickpea10.png'
import HummusPuffs10 from './HUMMUS-assets/hummus-puffs10.png'
import Rice from './HUMMUS-assets/rice.png'
import Millet from './HUMMUS-assets/millet.png'
import Gms5 from './HUMMUS-assets/5-gms.png'
import Gluten from './HUMMUS-assets/gluten.png'
import NOartificial from './HUMMUS-assets/no-artificial.png'
import Tables from './HUMMUS-assets/peanut-puffs-wood.png' 
import Divider from './HUMMUS-assets/divider.png' 
import ChickpeaFont from './HUMMUS-assets/Chickpea-font.png' 
import hummusPuff from './HUMMUS-assets/peanut-puffs-wood.png' 
import chickpeatitle from './HUMMUS-assets/chickpea-title.png'
import {motion} from 'framer-motion'


function Humms() {
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
        <div className="hummus">
            <div className="hummus__bg">
                <div className="image__top">
                <img src={ChickpeaPattren} alt="chickpea-pattren"/>
                </div>
                 <div className="image__second">nbbb
                 <img src={TopGraphic} alt="table"/>
                </div>
             <div className="image__thrid">
            <img src={BG} alt="chickpea-pattren"/>
            
            </div>  
            
            <div className="hummus__3">
                <img  src={Tables} alt="peanu"/> 
                </div>
            <motion.div className="hummus__back" initial={{x:50}}
             animate={{x:-10}}
             transition={{delay:0.4,type:'spring',stiffness:5, yoyo:Infinity}}>
                <img  src={HummusPuffsBack} alt="good" />
                </motion.div>   
            <div className="hummus__1">
                <img src={HumusPuffTop} alt="good" /> 
            </div>
               <div  className="hummus__front"><img  src={HummusPuffs} alt="good" /></div> 
                
                
                
                 <motion.div className="hummus__2" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
                <img  src={Chickpea} alt="chickpea"/>
                </motion.div> 
                
                
                
                
             
                 <motion.div className="hummus__ingridents" initial={{opacity:0}}
                 animate={{opacity:shouldShowActions? 1:0}}>
                    <img src={Corn} alt="ingridents"/>
                    <img src={Chickpea10} alt="ingridents"/>
                    <img src={Rice} alt="ingridents"/>

                    <img src={Millet} alt="ingridents"/>
                    <p style={{    marginTop: '45px'}}>=</p>
                    <img src={HummusPuffs10}  alt="ingridents"/>
                    </motion.div>
                    
                    <motion.div className="ingridents__title" initial={{opacity:0}}
                 animate={{opacity:shouldShowActions? 1:0}}>
                        <p>CORN</p> <b>+</b>
                        <p>CHICKPEA</p> <b>+</b>
                        <p>RICE</p> <b>+</b>
                        <p>MILLET</p> 
                    
                    
                    </motion.div>
                    
               
            <motion.div className="nut__3" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Chickpea} alt="right" /> 

            </motion.div>

            <motion.div className="nut__4" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Chickpea2} alt="chickpea"/>

            </motion.div>
            <motion.div className="nut__5" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Chickpea3} alt="right" /> 

            </motion.div>

            
             
                 <div className="humms__content">
                 
            
                  
                     <hr />
                     <p>Ricotta,sun dried tomatoes,garlic,mozzarella,cheese,topped with lightly drizzled red souce,pesto,and fresh basil</p>
                    <h1>NOT FIRED ITS BAKED</h1>
                    <div className="name__content">
                    <hr /> <p>Pick Size</p> <hr />
                    </div>
                    <div className="cricle-box">
                    <div className="cricle">
                        60GRMS
                        
                    </div>
                    
                    <div className="cricle">
                        20GRMS
                       
                    </div>
                    
                    </div>
                    <div className="cricle-box1">
                    <p>99-00 RS</p>
                    <p>30-00 RS</p>
                    
                    </div>
                    </div>
                    
                    <div className="box__button">
                    <Button>
                        <PlayArrowIcon />
                         KNOW MORE</Button>
                         <Button>
                            <ShoppingBasketIcon />
                        BUY NOW</Button>
                    </div>
                    
                   
                   
                 
             
             
             
             
            <div className="humms__health">
            <img src={Gms5} alt="health" /> 
            <p>5 GMS PROTEIN</p>
             <img src={Gluten} alt="health"/>   
             <p> GLUTEN FREE</p>
             <img src={NOartificial} alt="health"/>    
             <p> NO ARTIFICAL INGREDIENTS</p>      
            </div>
            <div className="chickpeatitle1">
                <img src={chickpeatitle} alt="almondtitle"/>
            </div>
            </div>
           
            
        </div>
    )               
}

export default Humms