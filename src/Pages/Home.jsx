import React from 'react';
import Typist from 'react-typist';
import hasibur from '../assets/hasibur.jpeg'
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume_Hasibur_Rahman_Frontend_Developer.pdf';
        link.download = 'Resume_Hasibur_Rahman_Frontend_Developer.pdf';
        link.click();
    }
    const handleContactMe = () => {
        window.location.href = 'mailto:rahmanhas.sust@gmail.com';
    }
    return (
        <div>
            <div className="hero min-h-screen  text-white w-full">
                <div className="flex justify-between items-center gap-10 flex-col lg:flex-row-reverse">
                    <img className="rounded-xl h-96 w-48" src={hasibur} />
                    <div className="w-[500px]">
                        <div>
                            <h1 className="text-5xl font-bold py-5">Welcome!</h1>
                            <h1 className="text-3xl font-bold py-5">
                            I am <Typewriter
                                    cursor
                                    cursorBlinking
                                    delaySpeed={1000}
                                    deleteSpeed={25}
                                    loop={0}
                                    typeSpeed={75}
                                    words={[
                                        'Hasibur Rahman',
                                        ' a Frontend Developer',
                                        ' passionate about coding',
                                        
                                    ]}
                                />
                            </h1>
                            <h1 className="text-5xl font-bold"></h1>
                            
                            <div className="flex flex-row gap-10 justify-start items-center ">
                                <button onClick={handleContactMe} className="btn btn-success">Contact Me</button>
                                <button onClick={handleDownloadResume} className="btn btn-info">My Resume</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;