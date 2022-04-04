import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from 'assets/img/LogoWhite.png'
import {IoIosHome} from 'react-icons/io'
import {FaLaptopCode, FaBook} from 'react-icons/fa'
import {MdAddIcCall} from 'react-icons/md'
import Button from "@material-tailwind/react/Button";
import headerImg from '../assets/img/SVGHEADER.svg'; 
import Elementor from './../assets/img/Elementor.png'; 
import Application from './../assets/img/Application mobile.png';
import ReactNative from './../assets/img/React native.png';
import Seo from './../assets/img/SEO.png';
import Shopify from './../assets/img/Shopify.png'; 
import Stratégie from './../assets/img/Stratégie marketing.png'; 
import Wordpress from './../assets/img/Wordpress.png';
export default function Header() {
    const [showSidebar, setShowSidebar] = useState('-left-64');

    const [addedClass, setAddedClass] = useState({})

    // const btn = document.querySelector("button.mobile-menu-button");
    // const menu = document.querySelector(".mobile-menu");

    // btn.addEventListener("click", () => {
    //     menu.classList.toggle("hidden");
    // });

    return (
        <div className='header-website'>
       
            <nav className="NavigationBar">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-4">
                            <div>
                                <a href="#" class="flex items-center py-4 px-2">
                                    <img src={logo} style={{width:200, marginTop:24,marginRight:250}}/>
                                </a>
                                    
                            </div>
                            <div class="hidden md:flex items-center gap-8">
                                <NavLink
                                    to="/"
                                    onClick={()=>setAddedClass({Accueil: true})}
                                    exact
                                    className={"py-4 px-3 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Accueil']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                    <div className="Square"> 
                                        <IoIosHome className="text-xl" color={"#0040FF"}/>
                                        </div>
                                    </div>
                                    <span>Accueil</span>
                                    <hr class={'trans--grow hr0 '+ (addedClass['Accueil'] && " grow line-color-change")}/>
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={()=>setAddedClass({Services: true})}
                                    className={"py-4 px-3 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Services']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                        <div className="Square"> 
                                        <FaLaptopCode className="text-xl" color={"#0040FF"} />
                                        </div>
                                    </div>
                                    <span>Nos services</span>
                                    <hr class={'trans--grow hr0 '+ (addedClass['Services'] && " grow line-color-change")}/>
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={()=>setAddedClass({Histoire: true})}
                                    className={"py-4 px-3 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Histoire']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                    <div className="Square"> 
                                        <FaBook className="text-xl" color={"#0040FF"}/>
                                        </div>
                                    </div>
                                    <span>Notre histoire</span>
                                    <hr class={'trans--grow hr0 '+ (addedClass['Histoire'] && " grow line-color-change")}/>
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={()=>setAddedClass({Appel: true})}
                                    className={"py-4 px-3 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Appel']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                    <div className="Square"> 
                                        <MdAddIcCall  className="text-xl" color={"#0040FF"}/>
                                    </div>
                                    </div>
                                    <span>Céduler un appel</span>
                                    <hr class={'trans--grow hr0 '+ (addedClass['Appel'] && " grow line-color-change")}/>
                                </NavLink>

                            </div>
                        </div>
                        <div class="hidden md:flex items-center space-x-3 ">
                        </div>
                        <div class="md:hidden flex items-center">
                            <button class="outline-none mobile-menu-button">
                            <svg class=" w-6 h-6 text-gray-500 hover:text-primary "
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                <div class="hidden mobile-menu">
                    <ul class="">
                        
                    </ul>
                </div>
            </nav>
            <div className='container mx-auto px-4 pt-32'>
                <div className="MainSection">
                    <div className="HeaderTextButton">
                        <h1 className="MainTitle">
                        L'agence web là pour vous<br/>avec vous<span className="MainPoint">.</span>
                        </h1>
                        <p className='MainParagraph'>
                        Notre <span className="MainSpecialWord">objectif</span> est de venir compléter la ressource<br/>
                        manquante à votre <span className="MainSpecialWord">entreprise</span> pour votre <span className="MainSpecialWord">présence</span><br/>
                        sur le <span className="MainSpecialWord">web</span> selon vos <span className="MainSpecialWord">valeurs</span> et votre <span className="MainSpecialWord">vision</span>.
                        </p>
                        <br/>
                        <button className="Button">
                        <span className="ButtonText">Planifier un appel</span>
                        </button>
                    </div>

                    <div>
                        <img src={headerImg} alt="Logo" className="IMG"/>
                    </div>
                </div>
            </div>
            <img src={Application} className="Application"/>
            <img src={Elementor} className="Elementor"/> 
            <img src={ReactNative} className="ReactNative"/> 
            <img src={Seo} className="Seo"/> 
            <img src={Shopify} className="Shopify"/> 
            <img src={Stratégie} className="Stratégie Marketing"/> 
            <img src={Wordpress} className="Wordpress"/> 
            
        </div>
    );
}
