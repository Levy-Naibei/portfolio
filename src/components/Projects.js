import React, { Component } from 'react'
import blog from '../assets/blog.png';
import e_store from '../assets/e_store.png';
import fe from '../assets/fe.png';

export default class Projects extends Component {

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='project'>
                        <figure className='project-container'>
                            <img src={fe} alt='Farmers Edge' />
                            <figcaption>
                                https://farmers-edge.netlify.app/
                            </figcaption>
                        </figure>

                        <figure className='project-container'>
                            Jobs Portal - Alleviating unemployment
                            <figcaption>
                                https://coders-jobs.netlify.app/
                            </figcaption>
                        </figure>

                        <figure className='project-container'>
                            Provides advisory to society on imoact of Covid-19 infections 
                            <figcaption>
                                 https://github.com/Levy-Naibei/covid19-impact-estimator
                            </figcaption>
                        </figure>

                        <figure className='project-container'>
                            <img src={e_store} alt='screenshot' />
                            <figcaption>
                                https://dynamic-e-store.netlify.app/
                            </figcaption>
                        </figure>

                        <figure className='project-container'>
                            <img src={blog} alt='screenshot' />
                            <figcaption>
                                https://techies-blog.herokuapp.com/
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}
