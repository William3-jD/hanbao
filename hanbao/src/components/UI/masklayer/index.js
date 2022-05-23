import React from 'react'
import ReactDOM from 'react-dom';


import './index.css'


const maskLayerRoot = document.getElementById('masklayer_root');

const MaskLayer = (props) => {
    return ReactDOM.createPortal(
        <div  
        {...props}
        className={'maskLayer'}>

                {props.children}
        </div>, 
    
    maskLayerRoot);
};

export default MaskLayer;
