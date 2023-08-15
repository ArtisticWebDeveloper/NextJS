import React, {useState, useEffect} from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function _dMobile() {
    return w;
  }

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const currentRoute = usePathname();

	const navOpen = () => {
		document.querySelector(".nav-links").style.right = "0%";
	}
	const navClose = () => {
		if(isMobile){
			document.querySelector(".nav-links").style.right = "-100%";
		}
	}
	const toggleSubMenu = () => {
		document.querySelector(".nav-links").classList.toggle("show1");
	}

	const handlePopup = (e) => {
        e.preventDefault();
		window.history.replaceState(null, document.title, "/contact-us")
        const el = document.querySelector('#contact_popup');
		el.style.display = 'block';
    };

	useEffect(() => {
		setIsMobile(window.innerWidth <= 640);
	  }, []);

	return (
		<nav className=" pt-2">
		<div className="navbar">
		  <i className='bx bx-menu drop-shadow-md' onClick={navOpen}></i>
		  <div className="logo">
		  	<Link href="/">
				<Image src="/logo.png" alt="proexampals" width={230} height={90} />
			</Link>
		  </div>
		  <div className="nav-links">
			<div className="sidebar-logo">
			  <span className="logo-name">
			  	<Link href="/">
			  		<Image src="/logo.png" alt="proexampals" width={180} height={90} />
				</Link>
			  </span>
			  <i className='bx bx-x drop-shadow-md' onClick={navClose} ></i>
			</div>
			<ul className="links">
			  <li><Link href="/" className={currentRoute === "/"  ? "active" : ""} onClick={navClose}>Home</Link></li>
			  <li>
				<a href="#" onClick={toggleSubMenu}>
				Services
				<i className='bx bxs-chevron-down htmlcss-arrow arrow'></i>
				</a>
				<ul className="htmlCss-sub-menu sub-menu">
				  	<li>
				  		<Link href={{
							pathname: '/',
							query: 'online-class' // the data
						}}
						onClick={navClose}
						>Online Class Help</Link>
					</li>
				  	<li>
				  	<Link href={{
						pathname: '/',
						query: 'online-coursework' // the data
						}}
						onClick={navClose}
						>Online Coursework Help</Link>
					</li>
					<li>
				  	<Link href={{
						pathname: '/',
						query: 'online-exam' // the data
						}}
						onClick={navClose}
						>Online Exam Help</Link>
					</li>
				</ul>
			  </li>
			  <li><a href="#contact-us" onClick={handlePopup}>Contact Us</a></li>
			  <li>
			  	<Link href="terms-conditions" className={currentRoute === "/terms-conditions"  ? "active" : ""} onClick={navClose}>Terms & Conditions</Link>
				</li>
			</ul>
		  </div>
		</div>
	  </nav>
	);
};
export default Navbar;