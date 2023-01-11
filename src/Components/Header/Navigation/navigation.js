import React from 'react'
import './navigation.scss'
import '../../../Resets/_resets.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faHouse, faFolder, faAddressCard} from '@fortawesome/free-solid-svg-icons';

export default function navigation() {

  return (
    <div className='container'>
        <section className='navigation'>
            <div className='name-navigation'>
            </div>
            <ul>
                <li>
                    <a href='/#'>
                        <div className='navigation-round'>
                            <FontAwesomeIcon icon={faHouse} className='icon-navigation'/>
                        </div>
                        <p>
                            Home
                        </p>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <div className='navigation-round'>
                            <FontAwesomeIcon icon={faUser} className='icon-navigation'/>
                        </div>
                        <p>
                            Profilo
                        </p>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <div className='navigation-round'>
                            <FontAwesomeIcon icon={faAddressCard} className='icon-navigation'/>
                        </div>
                        <p>
                            Contattami
                        </p>
                    </a>
                </li>
                <li>
                    <a href='/#'>
                        <div className='navigation-round purple'>
                            <FontAwesomeIcon icon={faFolder} className='icon-navigation'/>
                        </div>
                        <p>
                            Portfolio
                        </p>
                    </a>
                </li>
            </ul>
    </section>
    </div>
  )
}
