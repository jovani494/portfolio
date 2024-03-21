import React from "react";
import { useState } from "react";
import "./Activities.css";

const Acticities = () => {
    const [activites, setActivites] =  useState([
            {name : "Coding" , description : 
        "I do like Coding, the more I like it, the more I want to expand my Knowledges about the Science Computer"
        } ,

            {name : "Video Games" , description : 
        "Sometimes I play video games on my Computer, I prefer the Open World games because I like to discover other places. My favortite games are Assassin's creed and Red Dead Redemption II"
        } ,

            {name : "Playing Instruments" , description : 
        "In terms of music, I started by playing guitar, and then I wanted to develop my music skills by learning playing Piano and Music theories"
        } ,

            {name : "Home Studio" , description : 
        "Little by little, I created my own Home Studio. I started by learning how to use the music assisted by computer. I bought an audio interface for recording external audio. Recently, I created my own business 'Jovani Matthieu VST' for selling Softwares for people who are pationnated by the Music assisted by vomputer"
        } ,

            {name : "Musician at Church" , description : 
        ""
        } ,
    ])

    return(
       <div className="activities">
            <h1 className="activity_title">My activities</h1>

            <ul className="list_activities">
                {activites.map((activity,index) => {
                    return(
                        <li key={index} className="activity">{activity.name} {activity.description}</li>
                    )
                })}
            </ul>
       </div> 
    )
}

export default Acticities;