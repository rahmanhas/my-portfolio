import React, { useRef } from 'react';
import { Form } from 'react-router-dom';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault()
       
        emailjs.sendForm(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div>
            <div className="hero min-h-screen text-white">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left py-10">
                        <h1 className="text-5xl font-bold">Contact Me</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Form ref={form} onSubmit={handleSubmit} className="text-black">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-36" placeholder="Message" name="message"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Send" />

                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;