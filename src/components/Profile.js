import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div >
                <p className='lead'>Creative and people-oriented Software Engineer with 2+ years of experience 
                    and proficient in software technologies relevant to the web</p>
                <div>
                    <p><i class="fas fa-phone-alt prof"></i> +254710311897</p>
                    <p><i class="fas fa-envelope prof"></i>levynaibei2@gmail.com</p>
                    <p><small><cite title="Nairobi, Kenya"><i class="fas fa-map-marker-alt prof"></i>Nairobi, Kenya</cite></small></p>
                    <p><i class="fab fa-github prof text-dark"></i><a href="https://github.com/Levy-Naibei" className='text-light'>Github</a></p>
                </div>
            </div>
        )
    }
}
