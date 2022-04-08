import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from 'assets/img/LogoWhite.png'
import { IoIosHome } from 'react-icons/io'
import { FaLaptopCode, FaBook } from 'react-icons/fa'
import { MdAddIcCall } from 'react-icons/md'
import Button from "@material-tailwind/react/Button";
import headerImg from '../assets/img/SVGHEADER.svg';
import Elementor from './../assets/img/Elementor.png';
import Application from './../assets/img/Application mobile.png';
import ReactNative from './../assets/img/React native.png';
import Seo from './../assets/img/SEO.png';
import Shopify from './../assets/img/Shopify.png';
import Stratégie from './../assets/img/Stratégie marketing.png';
import Wordpress from './../assets/img/Wordpress.png';
export default function Header({ bgColor, change }) {
    const [showSidebar, setShowSidebar] = useState('-left-64');

    const [addedClass, setAddedClass] = useState({})



    return (
        
            <div className='header-website'>
                <header className={"fixed  z-30 w-full px-2 py-0  sm:px-4 shadow-2xl "} style={{ backgroundColor: bgColor? bgColor : "#0040FF" }}>
                    <div className="flex items-center justify-between mx-auto max-w-7xl">

                        <a href="#" className="flex items-center py-4 px-2">
                            <img src={logo} style={{ width: 200 }} />
                        </a>
                        <div className="flex items-center space-x-1">
                            <ul className=" space-x-2 md:inline-flex">
                                <NavLink
                                    to="/"
                                    onClick={() => setAddedClass({ Accueil: true })}
                                    exact
                                    className={"py-4 px-3  font-semibold "+ (change ? "text-primary" : "text-white")}
                                >
                                    <div className={(addedClass['Accueil'] ? "fadeIn" : "fadeOut") + " flex justify-center"}>
                                        <div className="Square">
                                            <IoIosHome className="text-xl" color={"#0040FF"} />
                                        </div>
                                    </div>
                                    <span className=''>Accueil</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Accueil'] && " grow line-color-change")} />
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={() => setAddedClass({ Services: true })}
                                    className={"py-4 px-3 font-semibold "+ (change ? "text-primary" : "text-white")}
                                >
                                    <div className={(addedClass['Services'] ? "fadeIn" : "fadeOut") + " flex justify-center"}>
                                        <div className="Square">
                                            <FaLaptopCode className="text-xl" color={"#0040FF"} />
                                        </div>
                                    </div>
                                    <span>Nos services</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Services'] && " grow line-color-change")} />
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={() => setAddedClass({ Histoire: true })}
                                    className={"py-4 px-3 font-semibold "+ (change ? "text-primary" : "text-white")}
                                >
                                    <div className={(addedClass['Histoire'] ? "fadeIn" : "fadeOut") + " flex justify-center"}>
                                        <div className="Square">
                                            <FaBook className="text-xl" color={"#0040FF"} />
                                        </div>
                                    </div>
                                    <span>Notre histoire</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Histoire'] && " grow line-color-change")} />
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={() => setAddedClass({ Appel: true })}
                                    className={"py-4 px-3  font-semibold "+ (change ? "text-primary" : "text-white")}
                                >
                                    <div className={(addedClass['Appel'] ? "fadeIn" : "fadeOut") + " flex justify-center"}>
                                        <div className="Square">
                                            <MdAddIcCall className="text-xl" color={"#0040FF"} />
                                        </div>
                                    </div>
                                    <span>Céduler un appel</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Appel'] && " grow line-color-change")} />
                                </NavLink>

                            </ul>
                            <div className="inline-flex md:hidden">
                                <button className="flex-none px-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                                    </svg>
                                    <span className="sr-only">Open Menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>


                <div className='container mx-auto px-4 pt-32'>
                    <div className="MainSection">
                        <div className="HeaderTextButton">
                            <h1 className="MainTitle">
                                L'agence web là pour vous<br />avec vous<span className="MainPoint">.</span>
                            </h1>
                            <p className='MainParagraph'>
                                Notre <span className="MainSpecialWord">objectif</span> est de venir compléter la ressource<br />
                                manquante à votre <span className="MainSpecialWord">entreprise</span> pour votre <span className="MainSpecialWord">présence</span><br />
                                sur le <span className="MainSpecialWord">web</span> selon vos <span className="MainSpecialWord">valeurs</span> et votre <span className="MainSpecialWord">vision</span>.
                            </p>
                            <br />
                            <button className="Button">
                                <span className="ButtonText">Planifier un appel</span>
                            </button>
                        </div>

                        <div>
                            <img src={headerImg} alt="Logo" className="IMG" />
                        </div>
                    </div>
                </div>

            </div>
    );
}
