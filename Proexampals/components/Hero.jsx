import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import ContactForm from './ContactForm';
import bannersText from '../bannerText';
import { useInView  } from "react-intersection-observer";

const HeroSection = () => {
	const router = useRouter();
	const [header, setHeader] = useState(null);
	
	const headerUpdateRef = useCallback(node => {
		const parseQuery = () => {
			const h = Object.keys(router.query).join('').split('-');
			const w = h[1].charAt(0).toUpperCase() + h[1].slice(1)
			return h[0]+w;
		}
		const r = Object.keys(router.query).length ? parseQuery() : null;
		if(r !== header){
			setHeader(r);
		}
	}, [header, router]);

	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
	});

	useEffect(() => {
		if(inView){
			const el = document.querySelector('.banner');
			const elChildNodes = el.querySelectorAll('.animate');
			setTimeout(() => {
				const showContainer = el.querySelector('.opacity-0')
				if(showContainer){
					showContainer.classList.replace('opacity-0', 'opacity-100');
				}
				elChildNodes.forEach(e => {
					e.classList.replace('animate', 'animate__animated');
					e.classList.add(e.getAttribute('data-animation'));
				})
			}, 10);
		}
	}, [inView, entry]);

	const style = {
		dackdrop: {
			backgroundColor: '#8A9A5B40',
			backgroundImage: 'linear-gradient(180deg, #8A9A5B40, #8A9A5B00)'
		}
	}

	const mouseAnimation = () => {
		let element = document.querySelector('.banner');
		let form = document.querySelector('.form-banner');
		if(element) {
			const elm = {wCenter: element.clientWidth/2, hCenter: element.clientHeight/2};
		
			const rotate = {x: null, y: null};
			// Fires whenever mouse enter the element
			element.addEventListener('mousemove', function(e){

				if(e.clientY === elm.hCenter){
					rotate.y = 0;
				}
				if(e.clientX === elm.wCenter){
					rotate.x = 0;
				}

				if(e.clientY > elm.hCenter){
					rotate.y = (15/elm.hCenter)*(e.clientY - elm.hCenter)
				}else {
					rotate.y = (15/elm.hCenter)*(e.clientY - elm.hCenter)
				}

				if(e.clientX > elm.wCenter){
					rotate.x = (10/elm.wCenter)*(e.clientX - elm.wCenter)
				}else {
					rotate.x = (10/elm.wCenter)*(e.clientX - elm.wCenter)
				}
				form.style.setProperty('--rotateX', rotate.x+'deg')
				form.style.setProperty('--rotateY', rotate.y+'deg')
				form.style.setProperty('transform', `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`)
			});
			// Fires whenever mouse leaves the element
			element.addEventListener('mouseleave', function(event){
				form.style.setProperty('--rotateX', '0deg')
				form.style.setProperty('--rotateY', '0deg')
				form.style.setProperty('transform', `rotateX(0deg) rotateY(0deg)`)
			});
		}
	}
	useEffect(() => mouseAnimation);

  return (
	<div ref={headerUpdateRef} className="hero min-h-screen relative banner">
		<div className="hero-content text-neutral-content min-w-full pt-10 lg:pt-0">
			<div className="grid grid-cols-12 pt-2 2xl:pt-10 c-bg-overlay mt-10 px-5 2xl:mx-20 xl:mx-15 lg:px-10">
				<div className="banner-text col-span-12 lg:col-span-8 xl:col-span-7 pr-0 pb-10 lg:pb-0 lg:pr-10 lg:mt-7 2xl:mt-5">
					{header === null && (
						<>
							<p className="animate__animated animate__fadeInUp animate__slower mb-5 text-2xl lg:text-4xl font-bold leading-10 capitalize drop-shadow-md">Elevate your exam game with America&apos;s finest Academic Experts!</p>
							<p className="animate__animated animate__fadeInUp animate__slower mb-5 animate__delay-1s text-lg lg:text-xl font-medium drop-shadow-md">Our Devoted Team Stands Ready to Empower Students of All Educational Levels, Offering Invaluable Aid for Exams and Tests.
							</p>
							<p className="animate__animated animate__fadeInUp animate__slower mb-5 animate__delay-2s text-lg lg:text-xl font-medium drop-shadow-md">Timing Is No Barrier; Seize the Opportunity to Connect with Us and Embark on Your Path to Triumph Today!</p>
						</>
					)}
					{header === 'onlineClass' && (
						<>
							<p className="animate__animated animate__fadeInUp animate__slower mb-5 text-2xl lg:text-4xl font-bold leading-10 capitalize drop-shadow-md">{bannersText.onlineClass.heading}</p>
							{bannersText.onlineClass.paragraphs.map(function(object, i){
								return (<p className="animate__animated animate__fadeInUp mb-5 animate__delay-1s text-lg lg:text-xl font-medium drop-shadow-md" key={i}>{object.text}</p>);
							})}
						</>
					)}
					{header === 'onlineCoursework' && (
						<>
							<p className="animate__animated animate__fadeInUp animate__slower mb-5 text-2xl lg:text-4xl font-bold leading-10 capitalize drop-shadow-md">{bannersText.onlineCoursework.heading}</p>
							{bannersText.onlineCoursework.paragraphs.map(function(object, i){
								return (<p className="animate__animated animate__fadeInUp mb-5 animate__delay-1s text-lg lg:text-xl font-medium drop-shadow-md" key={i}>{object.text}</p>);
							})}
						</>
					)}
					{header === 'onlineExam' && (
						<>
							<p className="animate__animated animate__fadeInUp animate__slower mb-5 text-2xl lg:text-4xl font-bold leading-10 capitalize drop-shadow-md">{bannersText.onlineExam.heading}</p>
							{bannersText.onlineExam.paragraphs.map(function(object, i){
								return (<p className="animate__animated animate__fadeInUp mb-5 animate__delay-1s text-lg lg:text-xl font-medium drop-shadow-md" key={i}>{object.text}</p>);
							})}
						</>
					)}

					<ul key={header} className="ml-5 list-decimal text-xl">
						<li className="text-lg lg:text-xl animate__animated animate__fadeInUp animate__delay-3s animate__slower">Easy-fix</li>
						<li className="text-lg lg:text-xl animate__animated animate__fadeInUp animate__delay-4s animate__slower">Budget-friendly</li>
						<li className="text-lg lg:text-xl animate__animated animate__fadeInUp animate__delay-5s animate__slower">Performance-oriented</li>
						<li className="text-lg lg:text-xl animate__animated animate__fadeInUp animate__delay-6s animate__slower">Practical solution</li>
					</ul>
				</div>
				<div ref={ref} className="animate animate__delay-1s col-span-12 lg:col-span-4 xl:col-span-5 mb-10 lg:mb-0" data-animation="animate__backInDown" >
					<div className="form-banner opacity-0" style={{transform: 'rotateX(var(--rotateX))rotateY(var(--rotateY))'}}>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default HeroSection;
