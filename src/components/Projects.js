import React, { Component } from 'react'
import blog from '../assets/blog.png';
import e_store from '../assets/e_store.png';

export default class Projects extends Component {

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='project'>
                    <figure className='project-container'>
                            <img src={e_store} alt='screenshot' />
                            <figcaption>
                                <h3>Online shop in react.js</h3>
                            </figcaption>
                        </figure>

                        <figure className='project-container'>
                            <img src={blog} alt='screenshot' />
                            <figcaption>
                                <h3>Python django blog app</h3>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}
