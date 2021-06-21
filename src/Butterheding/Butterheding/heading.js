import React from 'react'
import './Heading.css'
import Button from '@material-ui/core/Button';
import HeadingImage from './ast_image/peanut-puffs-nut-4.png'

function Heading() {
    return (
        <div className="head-title">
            <div className="head-title-left">
                <img src={HeadingImage} alt="ok"/>
                <Button>BUTTER PUFFS</Button>
            </div>
            <div className="head-title-right">
            <img src={HeadingImage} alt="ok"/>
            <Button>BUTTER-BITES</Button>
            </div>
        </div>
    )
}

export default Heading
