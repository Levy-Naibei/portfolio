import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import me from '../assets/me.JPG';

export default class Sidebar extends Component {
    render() {
        return (
            <div className='vertical-nav bg-white font-fam' id='sidebar'>
                <div className="py-4 px-3 mb-4 bg-light">
                    <div className="media d-flex align-items-center">
                        <img src={me} alt="profile_pic" width="75" class="mr-3 rounded-circle img-thumbnail shadow-sm"/>
                        <div className="media-body">
                            <h4 className="m-0">Levy Naibei</h4>
                            <p className="font-weight-light text-muted mb-0">Software Engineer</p>
                        </div>
                    </div>
                </div>

                <ul className='nav flex-column bg-white ml-3'>
                    <li className='nav-item active'>
                        <Link to ='/' className='nav-link text-dark'> <i class="fas fa-user icon"></i>Profile </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/experience' className='nav-link text-dark'><i class="fab fa-black-tie icon"></i> Experience </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/education' className='nav-link text-dark'><i class="fas fa-graduation-cap icon"></i> Education </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/skills' className='nav-link text-dark'> <i class="fas fa-fighter-jet icon"></i> Skills </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/projects' className='nav-link text-dark'> <i class="fas fa-project-diagram icon"></i>Projects </Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}
