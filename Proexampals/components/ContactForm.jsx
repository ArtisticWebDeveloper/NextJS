import React, { useEffect, useMemo, useRef, useState, } from 'react';
import Image from 'next/image.js';
import emailjs from "@emailjs/browser";
import { useMask } from '@react-input/mask';

const submit_btn_txt = 'Unlock your Discount';

const ContactForm = () => {
    const dText = useMemo(() =>{
        return [
            "Seize the Opportunity to Connect with Us!",
            "Limited Time Offer: Early Bird Discount - Save 35% on All Services!",
            "Hurry! Grab Your 35% Early Bird Discount Before It's Gone!",
            "Exclusive Early Bird Deal: 35% Off - Don't Miss Out!",
            "Start Strong with 35% Off: Early Bird Discount Now Available!",
            "Unlock Savings: 35% Off Early Bird Discount - Act Fast!",
        ]
    }, []);
    const numberRef = useMask({ mask: '(___) ___-____', replacement: { _: /\d/ } });
    const form = useRef();
    const [name, setName] = useState('');
    const [number, setNumber]  = useState('');
    const [email, setEmail]  = useState('');
    const [currentTitle, setCurrentTitle] = useState(0);
    const [title, setTitle] = useState(dText[currentTitle]);

    const handleSendEmail = async (e) => {
        e.preventDefault();

        let error = {
            number: false,
            email: false,
        };
        const sub_el = document.querySelectorAll('#submit_btn');
        sub_el.forEach(d => {
            d.innerHTML = `<span className="loader mr-3"></span>Processing`;
        });

        // validate number
        var validateNumber = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        if(!validateNumber.test(number)){
            error.number = true;
        };

        // validate email
        var validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!validateEmail.test(email)){
            error.email = true;
        }

        if(Object.values(error).some(el => el === true)){
            for (const [key, value] of Object.entries(error)) {
                const el = document.querySelectorAll('.cf_'+ key);
                
                if(value){
                    el.forEach(f => {
                        if(!f.classList.contains('error'))
                            f.classList.add('error')
                    })
                    
                } else {
                    el.forEach(f => {
                        if(f.classList.contains('error'))
                            f.classList.remove('error')
                    })
                }
            }
            
            sub_el.forEach(d => {
                d.value = 'Remove indicated errors';

                if(d.classList.contains('bg-black')){
                    d.classList.replace('bg-black', 'bg-red');
                }

                if(d.classList.contains('animate__fadeIn')){
                    d.classList.replace('animate__fadeIn', 'animate__shakeX')
                }

                if(d.classList.contains('animate__shakeX')){
                    d.classList.replace('animate__shakeX', 'animate__shakeX')
                }
            });
            setTimeout(() => {
                sub_el.forEach(d => {
                    d.classList.replace('bg-red', 'bg-black');
                    d.innerHTML = submit_btn_txt;
                });
             }, 7000);
            return;
        } else{
            emailjs.sendForm("service_qu318fk", "template_lpnkyk4", form.current,"2ifRqQMhovdGlgh2T")
            .then(function(response) {
                const el = document.querySelector('#email_popup');
		        el.style.display = 'block';
                setEmail(''); setNumber(''); setName('');
                sub_el.forEach(d => {
                    d.innerHTML = submit_btn_txt;
                });
             }, function(error) {
                console.log(error);
                alert('There was an unexpected error while processing your request. Please try again')
             });
        }
        document.getElementById("contactUsForm").reset();
    };

    const style = {
        backgroundImage: 'linear-gradient(180deg, #8A9A5B99, #FFFFFF1A)',
    }

    useEffect(() => {
        const ti = setInterval(()=> {
            setCurrentTitle(currentTitle === dText.length - 1  ? 0 : currentTitle + 1);
            setTitle(dText[currentTitle]);
        }, 15000);
        return () => clearInterval(ti);
    }, [title, currentTitle, dText]);

    return (
        <>
        <div className='min-h-full rounded-2xl mt-5 p-3 lg:px-10 lg:py-5' style={style}>
            <h1 key={currentTitle} className="animate__animated animate__fadeIn animate__slow my-6 text-2xl font-bold text-center form__title" style={{color: '#ffffff'}}>{title}</h1>
            <form ref={form} id="contactUsForm" onSubmit={handleSendEmail}>
                <div className='input__holder cf_name  mb-4'>
                    <input name="name" type="text" id="name_cf" placeholder="Enter Your Name" className="animate__animated animate__fadeIn animate__delay-1s mb-1 input text-center bg-pxp text-white w-full placeholder-slate-200 rounded-xl font-light" onChange={(e) => setName(e.target.value)} value={name} />
                    <span className='error-msg'>Provide a valid name.</span>
                </div>
                <div className='input__holder relative cf_number  mb-4 '>
                    <input name="number" type="text" id="cf_number" ref={numberRef} placeholder="Number" className="animate__animated animate__fadeIn animate__delay-2s mb-1 input text-center bg-pxp text-slate-200 w-full placeholder-slate-200 rounded-xl font-light"  onChange={(e) => setNumber(e.target.value)} value={number}/>
                    <span className='prefix absolute flex gap-2 top-3 left-4'>
                        <Image className='animate__animated animate__fadeIn animate__delay-2s' src="/usa-flag.png" alt="USA" width={30} height={10} />
                        <span className='animate__animated animate__fadeIn animate__delay-2s'>+1</span>
                    </span>
                    <span className='error-msg'>Provide a valid number.</span>
                </div>
                <div className='input__holder cf_email mb-4 '>
                    <input name="email" type="email" id="cf_email" placeholder="Email" className="animate__animated animate__fadeIn  animate__delay-3s mb-1 input text-center bg-pxp text-slate-200 w-full placeholder-slate-200 rounded-xl font-light"  onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <span className='error-msg'>Provide a valid email address.</span>
                </div>
                <button type='submit' id="submit_btn" className="animate__animated animate__fadeIn  animate__delay-4s text-white bg-black o-btn hover:bg-slate-900 min-w-full rounded-xl">
                    Unlock your Discount
                </button>
            </form>
        </div>
        </>
    );
};

export default ContactForm;
