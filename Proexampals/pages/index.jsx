import React, { useState } from "react";
import HeroSection from "../components/Hero";
import OpeningSection from "../components/Opening";
import HelpSection from "../components/Help";
import StatsSection from "../components/Stats";
import SubjectsSection from "../components/Subjects";
import GuaranteesSection from "../components/Guarantee";
import HeroBottomSection from "../components/HeroBottom";


const HomePage = () => {

	const [activeTab, setActiveTab] = useState('cwh');

	const handleTabs = (e, id) => {
		e.preventDefault();
		const tabs = document.querySelector('#online_help_tabs');
		tabs.querySelectorAll('.tab').forEach(t => {
			if(t.classList.contains('tab-active')){
				t.classList.remove("tab-active", 'text-sm', 'font-bold');
				t.classList.add('tab-lifted');
			}
		})
		e.target.classList.remove('tab-lifted');
		e.target.classList.add('tab-active', 'bg-pxp', 'text-sm', 'font-bold');

		const elH = document.querySelector('#'+activeTab)
		elH.classList.remove('flex');
		elH.classList.add('hidden');

		const elS = document.querySelector('#'+id);
		elS.classList.remove('hidden');
		elS.classList.add('flex');

		setActiveTab(id);
	}
	return (
		<>
			<HeroSection />
			<OpeningSection />
			<div className="relative bg-beige block pt-5">
				<p className="text-3xl text-center font-bold uppercase text-black px-5 pt-5 py-3 border-t" style={{borderColor: '#e7e5ba'}}>Available Online Help</p>
				<div className="px-1 md:px-3 pt-5 text-pxp tabs bg-beige" id="online_help_tabs">
					<a className="tab text-sm font-bold text-black tab-active" onClick={(e) => handleTabs(e, 'cwh')}>CourseWork Help</a> 
					<a className="tab tab-lifted" onClick={(e) => handleTabs(e, 'ch')}>Class Help</a> 
					<a className="tab tab-lifted" onClick={(e) => handleTabs(e, 'eh')}>Exam Help</a>
				</div>
				<div className="relative min-w-full" style={{borderBottom: '3px solid #000', top: '-0.2em','lineHeight': '1px'}}>&nbsp;</div>
			</div>
			<div className="bg-beige sticky-container">
				<main className="h-scroll-wrapper">
					<section id="cwh">
						<HelpSection count="01" headline="Online CourseWork Help" image="/online_coursework_help.png">
							<p className="animate__animated animate__fadeInUp animate__delay-2s mb-5 text-2xl lg:text-3xl font-bold">Unlock Your Academic Potential: Premium Online Coursework and Exam Support</p>
							<p className="animate__animated animate__fadeInUp animate__delay-3s mb-5 text-lg font-medium">Are you on the lookout for exceptional online coursework help that delivers results? Look no further! When the thought "Can I pay someone to handle my online class?" crosses your mind, it means you're seeking premium academic support. Our team of qualified and experienced experts is at your service, ready to help you succeed in assignments, quizzes, exams, and complete courses with flying colors.</p>
						</HelpSection>
					</section>
					<section id="ch" className="hidden">
						<HelpSection count="02" headline="Online Class Help" image="/online_class_help.png">
							<p className="animate__animated animate__fadeInUp animate__delay-2s mb-5 text-2xl lg:text-3xl font-bold">Your Success, Our Priority: Ace Your Online Class with Expert Help</p>
							<p className="animate__animated animate__fadeInUp animate__delay-2s mb-5 text-lg font-medium">With a diverse array of subjects covered – including computer science, management, philosophy, economics, psychology, finance, accounting, health sciences, social sciences, and more – we are here to meet your every academic need. If you're wondering whether you can pay someone to do your online class, we assure you that the answer is a resounding "Yes!"</p>
							<p className="animate__animated animate__fadeInUp animate__delay-3s mb-5 text-lg font-medium">Let our results-driven approach pave the way to your academic triumph</p>
						</HelpSection>
					</section>
					<section id="eh" className="hidden">
						<HelpSection count="03" headline="Online Exam Help" image="/online_exam_help.png">
							<p className="animate__animated animate__fadeInUp animate__delay-2s mb-5 text-2xl lg:text-3xl font-bold">Pro Exam Pals: Your Secret to Acing Exams!</p>
							<p className="animate__animated animate__fadeInUp animate__delay-2s mb-5 text-lg font-medium">With a diverse array of subjects covered – including computer science, management, philosophy, economics, psychology, finance, accounting, health sciences, social sciences, and more – we are here to meet your every academic need. If you're wondering whether you can pay someone to do your online class, we assure you that the answer is a resounding "Yes!"</p>
							<p className="animate__animated animate__fadeInUp animate__delay-3s mb-5 text-lg font-medium">Let our results-driven approach pave the way to your academic triumph</p>
						</HelpSection>
					</section>
				</main>
			</div>
			<StatsSection />
			<SubjectsSection />
			<GuaranteesSection />
			<HeroBottomSection />
		</>
	);
};

export default HomePage;
