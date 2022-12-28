import React from 'react';
import videoInner from '../../../videos/headerinner.mp4';
import './headerInner.scss';
import TypeWrite from './typeWrite';

export default function headerInner(props) {
  return (
        <div className='container'>
            <div className='headerInner'>
                <div className='headerInner-first-content'>
                    <h1>Andrii Semenchenko</h1>
                    <div className='text'>
                        <TypeWrite testo = {props.typeWrite}/>
                    </div>
                </div>
                <div className='headerInner-secound-content'>
                    <video src={videoInner} autoPlay loop muted />
                    <div className='headerInner-secound-content-text'>
                        <h1>{props.welcome}</h1>
                        <h3>{props.info}</h3>
                    </div>
                </div>
            </div>
        </div>
        );
}
