import React from 'react'
import './Almond.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Almond1 from './almond-assets/almond-1.png'
import Almond2 from './almond-assets/almond-2.png'
import Almond3 from './almond-assets/almond-3.png'
import Almond4  from './almond-assets/almond-4.png'
import AlmondButterPuffs from './almond-assets/Almond-Butter-Puffs.png'
import AlmondButterPuffsback from './almond-assets/Almond-Butter-Puffs-back.png'
import almondPattren from './almond-assets/almond-background.png'
import Bg2 from './almond-assets/background-filter-1.png'
import AlmondPuff from './almond-assets/almond-puffs.png'
import Gms5 from './almond-assets/5-gms-1.png'
import Gluten from './almond-assets/gluten.png'
import NOartificial from './almond-assets/no-artificial.png'
import Rice from './almond-assets/rice.png'
import Corn from './almond-assets/corn.png'
import Millet from './almond-assets/millet.png'
import Almond10 from './almond-assets/almond10.png'
import almondpuffpate from './almond-assets/almond-puff-pate.png'
import TopGraphic from './almond-assets/top-graphic.png'
import  Tables from './almond-assets/peanut-puffs-wood.png'
import almondTitle from './almond-assets/almond-title.png'

import {motion} from 'framer-motion'


function Almond() {
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
        <div className="almond">
            <div className="almond__bg">
                <div className="almond__image__top">
                <img src={almondPattren} alt="chickpea-pattren"/>
                </div>
                 <div className="almond__image__second">
                 <img src={TopGraphic} alt="table"/>
                </div>
             <div className="almond__image__thrid">
            <img src={Bg2} alt="chickpea-pattren"/>
            </div>  
            
            <div className="almond__3">
                <img  src={Tables} alt="peanu"/> 
                </div>
            <motion.div className="almond__back" initial={{x:50}}
             animate={{x:-10}}
             transition={{delay:0.4,type:'spring',stiffness:5, yoyo:Infinity}}><img  src={AlmondButterPuffsback} alt="good" /></motion.div>   
            <div className="almond__1">
                <img src={AlmondPuff} alt="good" /> 
            </div>
               <div  className="almond__front"><img  src={AlmondButterPuffs} alt="good" /></div> 
                
                
                
                 <motion.div className="almond__2" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
                <img  src={Almond1} alt="chickpea"/>
                </motion.div> 
                
                
                
                
             
                 <motion.div className="almond__ingridents" initial={{opacity:0}}
                 animate={{opacity:shouldShowActions? 1:0}}>
                    <img src={Corn} alt="ingridents"/>
                    <img src={Almond10} alt="ingridents"/>
                    <img src={Rice} alt="ingridents"/>

                    <img src={Millet} alt="ingridents"/>
                    <p style={{    marginTop: '45px'}}>=</p>
                    <img src={almondpuffpate}  alt="ingridents"/>
                    </motion.div>
                    
                    <motion.div className="almond__ingridents__title" initial={{opacity:0}}
                 animate={{opacity:shouldShowActions? 1:0}}>
                        <p>CORN</p> <b>+</b>
                        <p>CHICKPEA</p> <b>+</b>
                        <p>RICE</p> <b>+</b>
                        <p>MILLET</p> 
                    
                    
                    </motion.div>
                    
               
            < motion.div className="almond__nut" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Almond2} alt="right" /> 
            </motion.div>
            <motion.div className="almond__nut5" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Almond2} alt="right" /> 
            </motion.div>
            <motion.div className="almond__nut1" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Almond3} alt="right" /> 
            </motion.div>
            <motion.div className="almond__nut2" initial={{y:40}}
             animate={{y:4}}
             transition={{delay:0.2,type:'spring',stiffness:20,yoyo:Infinity}}>
            <img src={Almond4} alt="right" /> 
            </motion.div>
            
             
                 <div className="almond__content">
                 
             
                     <hr />
                     <p>Ricotta,sun dried tomatoes,garlic,mozzarella,cheese,topped with lightly drizzled red souce,pesto,and fresh basil</p>
                    <h1>NOT FIRED ITS BAKED</h1>
                    <div className="almond__name__content">
                    <hr /> <p>Pick Size</p> <hr />
                    </div>
                    <div className="almond__cricle-box">
                    <div className="almond__cricle">
                        60GRMS
                        
                    </div>
                    
                    <div className="almond__cricle">
                        20GRMS
                       
                    </div>
                    
                    </div>
                    <div className="almond__cricle-box1">
                    <p>99-00 RS</p>
                    <p>30-00 RS</p>
                    
                    </div>
                    
                    <div className="almond__box__button">
                    <Button>
                        <PlayArrowIcon />
                         KNOW MORE</Button>
                         <Button>
                            <ShoppingBasketIcon />
                        BUY NOW</Button>
                    </div>
                    </div>
                   
                   
                 
             
             
             
             
            <div className="almond__health">
            <img src={Gms5} alt="health" /> 
            <p>5 GMS PROTEIN</p>
             <img src={Gluten} alt="health"/>   
             <p> GLUTEN FREE</p>
             <img src={NOartificial} alt="health"/>    
             <p> NO ARTIFICAL INGREDIENTS</p>      
            </div>
            <div className="almondTitle1">
                <img src={almondTitle} alt="almondtitle"/>
            </div>
            
            </div>
           
            
        </div>
    )
}

export default Almond