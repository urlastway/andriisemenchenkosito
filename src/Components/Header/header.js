import React from 'react'
import Navigation from './Navigation/navigation';
import HeaderInner from './HeaderInner/headerInner';
import './header.scss';

export default function header() {
  return (
    <header>
            <div className='header'>
                <HeaderInner welcome='Benvenuto sulla mia pagina Web' info='Qui scopri le informazioni su di me' typeWrite='J r. Full-Stack Web Developer.'/>
            </div>
            <div className='Navbar'>
                <Navigation />
            </div>
    </header>
  )
}
