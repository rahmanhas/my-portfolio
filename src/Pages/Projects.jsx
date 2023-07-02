import React from 'react';
import actionHouse from '../assets/projects/Action-House.png'
import thaiChefRecipe from '../assets/projects/Thai-Chef-s-Recipe-Hunter.png'

const Projects = () => {
    const handleclient1 = () => {
        window.location.href = 'https://github.com/rahmanhas/action-house-client';
    }
    const handleclient2 = () => {
        window.location.href = 'https://github.com/rahmanhas/thai-chef-recipe';
    }
    const handleserver1= () => {
        window.location.href = 'https://github.com/rahmanhas/action-house-server';
    }
    const handleserver2 = () => {
        window.location.href = 'https://github.com/rahmanhas/thai-chef-recipe-server';
    }
    const handlelive1= () => {
        window.location.href = 'https://action-house-3b7d9.web.app/';
    }
    const handlelive2 = () => {
        window.location.href = 'https://lucky-pavlova-0ca7e1.netlify.app/';
    }
    return (
        <div>
            <div className='grid grid-cols-1 gap-10 justify-center items-center my-10 px-5'>
                <div className="card card-side bg-base-100 shadow-xl h-96 w-full">
                    <figure><img className='w-1/2 md:w-4/5' src={actionHouse} alt="Album" /></figure>
                    <div className="card-body w-1/2 md:w-1/5">
                        <h2 className="card-title">Action House</h2>
                        <p>E-commerce site for Action-figures</p>
                        <div className="flex flex-col gap-3 justify-start items-start">
                            <button onClick={handleclient1} className="btn btn-primary">Client</button>
                            <button onClick={handleserver1}  className="btn btn-primary">Server</button>
                            <button onClick={handlelive1}  className="btn btn-primary">Live</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl h-96 w-full">
                    <figure><img className='w-1/2 md:w-4/5' src={thaiChefRecipe} alt="Album" /></figure>
                    <div className="card-body w-1/2 md:w-1/5">
                        <h2 className="card-title">Thai Chef Recipe</h2>
                        <p>A site to find thai chefs</p>
                        <div className="flex flex-col gap-3 justify-start items-start">
                            <button onClick={handleclient2}  className="btn btn-primary">Client</button>
                            <button onClick={handleserver2}  className="btn btn-primary">Server</button>
                            <button onClick={handlelive2}  className="btn btn-primary">Live</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;