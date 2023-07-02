import React from 'react';
import Typist from 'react-typist';
import hasibur from '../assets/hasibur.jpeg'


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
                    <img className="w-1/3 rounded-xl" src={hasibur} />
                    <div className="">
                        <div>
                            <h1 className="text-5xl font-bold py-5">Welcome!</h1>
                            <h1 className="text-5xl font-bold py-5">I am Hasibur Rahman</h1>
                            <h1 className="text-5xl font-bold"></h1>
                            <p className="py-6">Frontend Developer Specializing in MERN stack.</p>
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