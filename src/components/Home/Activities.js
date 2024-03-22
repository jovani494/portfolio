import React from "react";
import { useState } from "react";
import { FaCode , FaMicrophoneAlt  } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiMusicalNotes , GiGrandPiano  } from "react-icons/gi";
import "../../assets/css/Activities.css";

const Acticities = () => {
    const [activites, setActivites] =  useState([
            {name : "Coding" , description : 
        "I do like Coding, the more I like it, the more I want to expand my knowledges about the Computer Science",
         flip : false, icon : <FaCode />
        } ,

            {name : "Video Games" , description : 
        "Sometimes I play video games on my Computer, I prefer the Open World games because I like to discover other places. My favortite games are Assassin's creed and Red Dead Redemption II",
         flip : false , icon : <IoLogoGameControllerB />
        } ,

            {name : "Playing Instruments" , description : 
        "In terms of music, I started by playing guitar, and then I wanted to develop my music skills by learning playing Piano and Music theories",
         flip : false , icon : <GiMusicalNotes />
        } ,

            {name : "Home Studio" , description : 
        "Little by little, I created my own Home Studio. I started by learning how to use the music assisted by computer. I bought an audio interface for recording external audio. Recently, I created my own business 'Jovani Matthieu VST' for selling Softwares for people who are pationnated by the Music assisted by computer", 
        flip : false , icon : <FaMicrophoneAlt />
        } ,

            {name : "Musician at Church" , description : 
        "I've been playing piano at church since 2018. I thought that it's better to apply my music skills", flip : false , icon : <GiGrandPiano  />
        } , 
    ])

    const mouseOver = (index) => {
        const updatedActivities = [...activites];
        updatedActivities[index].flip = true;
        setActivites(updatedActivities)
        console.log(activites[index].name +" "+ activites[index].flip)
    }

    const click = (index) => {
        const updatedActivities = [...activites];
        updatedActivities[index].flip = false;
        setActivites(updatedActivities)
        console.log(activites[index].name +" "+ activites[index].flip)
    }

    return(
       <div className="activities">
            <h1 className="activity_title">My activities</h1>

            <ul className="list_activities">
                {activites.map((activity,index) => {
                    return(
                        <li key={index} className="activity" >
                            <div className="activity_name">
                                <h3>{activity.name}</h3>
                            </div>
                            {activity.flip? (
                                <div className="activity_description">
                                    <p onClick={ () => click(index) }>{activity.description}</p>
                                </div>
                            ) : (
                                <div className="activity_icon">
                                    <button className="button_click" onClick={ () => mouseOver(index) }><span>{activity.icon}</span></button>
                                </div>
                            )}
                              
                        </li>
                    )
                })}
            </ul>
       </div> 
    )
}

export default Acticities;