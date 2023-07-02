import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import developerSkillsAnimation from '../../public/developer-skills.json';


const Aboutme = () => {
    const animationContainerRef = useRef(null);
    useEffect(() => {
        // Create the animation instance
        const animation = lottie.loadAnimation({
            container: animationContainerRef.current,
            animationData: developerSkillsAnimation,
            renderer: 'svg', // Use 'svg' or 'canvas' based on your preference
            loop: true,
            autoplay: true
        });

        // Optional: Stop the animation when the component unmounts
        return () => {
            animation.destroy();
        };
    }, []);
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center ">
            <div ref={animationContainerRef} className='w-1/2'></div>
           
            
            <div className='text-white w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start text-center md:text-left'>
                <h1 className='text-6xl my-10'>About Me</h1>
                <p className="py-5 text-3xl">An Industrial Engineering Graduate form Shahjalal University of Science and Technology, learning and working for last one year to become a Frontend Developer.</p>
                <div className="stats stats-vertical lg:stats-horizontal shadow shadow bg-gray-400 my-10">

                    <div className="stat">
                        <div className="stat-figure text-secondary">

                        </div>
                        <div className="stat-title">Experience</div>
                        <div className="stat-value">1+ year</div>
                        
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        </div>
                        <div className="stat-title">Projects</div>
                        <div className="stat-value">20+</div>
                        
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        </div>
                        <div className="stat-title">Current Stack</div>
                        <div className="stat-value">MERN</div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Aboutme;