
import React, { useState, useEffect } from 'react';
import "../css/Home.css"

import natureBackground from "../assets/images/nature-background.jpg"
import natureBackgroundTwo from "../assets/images/nature-background-2.avif"
import Typewriter from "typewriter-effect"
import NavigationBar from '../components/NavigationBar';

export default function Home() {


    return (
        <>
            <div className="background-cover">
                <h2 className='text-5xl -z-2'>
                    <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString("Let it be serene.")
                        .callFunction(() => {

                        }).start()
                    }}

                    />
                </h2>
                <img src={natureBackgroundTwo}

                    id="background-img"
                />
            </div>

            <h2 className="text-4xl">Welcome to my world</h2>
        </>

    )
}