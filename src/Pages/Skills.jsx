import React, { useEffect } from 'react';
import SkillLogo from '../Component/SkillLogo';
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js.png'
import react from '../assets/react-icon.png'
import express from '../assets/express-js.webp'
import node from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.jpg'
import firebase from '../assets/firebase.png'
import github from '../assets/GitHub.jpeg'
import { useSpring, animated } from 'react-spring';



const Skills = () => {
    const expertProps = useSpring({
        from: { opacity: 0, transform: 'translate(-100px, -100px)' },
        to: { opacity: 1, transform: 'translate(0px, 0px)' },
        config: { duration: 2000 }, 
      });
    const comfortableProps = useSpring({
        from: { opacity: 0, transform: 'translate(100px, -100px)' },
        to: { opacity: 1, transform: 'translate(0px, 0px)' },
        config: { duration: 2000 }, 
      });
    const familiarProps = useSpring({
        from: { opacity: 0, transform: 'translate(-100px, 100px)' },
        to: { opacity: 1, transform: 'translate(0px, 0px)' },
        config: { duration: 2000 }, 
      });
    const toolsProps = useSpring({
        from: { opacity: 0, transform: 'translate(100px, 100px)' },
        to: { opacity: 1, transform: 'translate(0px, 0px)' },
        config: { duration: 2000 }, 
      });
    return (
        <div className='min-w-fit text-white mx-auto'>
            <div className="skills-section mx-auto">
                <SkillLogo src={html} alt="Logo 1" />
                <SkillLogo src={css} alt="Logo 12" />
                <SkillLogo src={bootstrap} alt="Logo 13" />
                <SkillLogo src={tailwind} alt="Logo 14" />
                <SkillLogo src={js} alt="Logo 15" />
                <SkillLogo src={react} alt="Logo 16" />
                <SkillLogo src={express} alt="Logo 17" />
                <SkillLogo src={node} alt="Logo 18" />
                <SkillLogo src={mongodb} alt="Logo 19" />
                <SkillLogo src={firebase} alt="Logo 111" />
                <SkillLogo src={github} alt="Logo 112" />
            </div>
            <div className='flex flex-row justify-center items-start gap-10'>
                <animated.div
                    className="flex flex-col justify-start items-center py-5 h-80 w-80"
                    style={expertProps}
                >
                    <h2 className="text-5xl py-5">Expert</h2>
                    <ul className='list-disc list-inside text-xl'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>TailwindCSS</li>
                        <li>JavaScript</li>
                        <li>React JS</li>
                    </ul>
                </animated.div>

                <animated.div
                    className="flex flex-col justify-start items-center py-5 h-80 w-80"
                    style={comfortableProps}
                >
                    <h2 className="text-5xl py-5">Comfortable</h2>
                    <ul className='list-disc list-inside'>
                        <li>Express JS</li>
                        <li>mongoDB</li>
                        <li>Firebase</li>
                        <li>Rest API</li>
                    </ul>
                </animated.div>

                
            </div>
            <div className='flex flex-row justify-center items-start gap-10'>
                <animated.div
                    className="flex flex-col justify-center items-center py-5 h-80 w-80"
                    style={familiarProps}
                >
                    <h2 className="text-5xl py-5">Familiar</h2>
                    <ul className='list-disc list-inside'>
                        <li>Node JS</li>
                        <li>C</li>
                        <li>Python</li>
                    </ul>
                </animated.div>

                <animated.div
                    className="flex flex-col justify-center items-center py-5 h-80 w-80"
                    style={toolsProps}
                >
                    <h2 className="text-5xl py-5">Tools</h2>
                    <ul className='list-disc list-inside'>
                        <li>VS Code</li>
                        <li>GIT</li>
                        <li>Figma</li>
                    </ul>
                </animated.div>
                
            </div>


        </div >
    );
};

export default Skills;