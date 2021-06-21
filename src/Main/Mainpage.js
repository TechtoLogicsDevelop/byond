import React from 'react'
import Almond from './Almond/Almond'
import Humms from './Humms/humms'
import Peanut from './Peanut/Peanut'
import Veg from './Veg/Veg'
import {motion} from 'framer-motion'
import './Mainpage.css'

function Mainpage() {
    
    return (
        <motion.div className="main"
        initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{delay:0.2, duration:1.5}} >
     {/* */}
           
              <Peanut />
            <Almond />  
               <Veg /> 
                <Humms />   
            
        </motion.div>
    )
}

export default Mainpage
