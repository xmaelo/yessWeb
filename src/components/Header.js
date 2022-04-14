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
import { useEffect } from 'react/cjs/react.production.min';
export default function Header({ bgColor, change }) {
    const [showSidebar, setShowSidebar] = useState('-left-64');

    const [addedClass, setAddedClass] = useState({})
    const [aside, offAside] = useState(false)

    
    //justify-end md:justify-between
    return (
        
            <div className='header-website'>
                <header className={"fixed  md:visible  z-30 w-full px-2 py-0  sm:px-4 shadow-2xl "} style={{ backgroundColor: bgColor? bgColor : "#0040FF" }}>
                    <div className="flex items-center justify-end md:justify-between mx-auto max-w-7xl">

                            <a href="#" className="hidden md:flex items-center py-4 px-2">
                                <img src={logo} style={{ width: 200 }} />
                            </a>
                            <div className="hidden md:flex items-center space-x-1">
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
                            </div>
                        <div className="inline-flex md:hidden">
                            <button className="flex-none px-2 drawer-toggle drawer-hamburger " onClick={()=>{offAside(!aside); console.log('clcik')}}>
                            <span className="sr-only">toggle navigation</span>
                            <span className="drawer-hamburger-icon"></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* <aside
                    class={"transform  top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 "+('-translate-x-full')}
                    >

                </aside> */}

                {/* <aside
                    // :class="open ? 'navbar-open' : 'navbar-close'"
                    class={"navbar transform w-64 absolute z-30 fixed overflow-x-scroll bg-gray-700 top-0  h-full  "+(aside? "navbar-open": "navbar-close")}
                    >
                    <div class="flex pr-2 justify-center">
                        <button onClick={()=>{offAside(!aside); console.log('clcik')}} class="p-2 text-white text-xl font-bold">&#9747;</button>
                    </div>
                    <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
                    <ul class="list-none text-white text-center">
                        <li class="my-8">
                        <a href="#"></a>Teams
                        </li>
                        <li class="my-8">
                        <a href="#"></a>Projects
                        </li>
                        <li class="my-8">
                        <a href="#"></a>Favourites
                        </li>
                        <li class="my-8">
                        <a href="#"></a>Notifications
                        </li>
                        <li class="my-8">
                        <a href="#"></a>Members
                        </li>
                    </ul>
                    </aside> */}


                        <input type="checkbox" class="openSidebarMenu md:hidden" id="openSidebarMenu"/>
                        <label for="openSidebarMenu" class="sidebarIconToggle md:hidden shadow-2xl">
                                <div class="spinner diagonal part-1 shadow-2xl"></div>
                                <div class="spinner horizontal shadow-2xl"></div>
                                <div class="spinner diagonal part-2 shadow-2xl"></div>
                        </label>
                    <div id="sidebarMenu" className='md:hidden shadow-xl shadow-current'>
                        <ul class="sidebarMenuInner">
                            <li>
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
                                    <span className={'title-resp ' + (addedClass['Accueil'] ? "title-resp2" : "")} >Accueil
                                    </span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Accueil'] && " grow line-color-change")} />
                                </NavLink>
                            </li>
                            <li>
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
                                    <span className={'title-resp ' + (addedClass['Services'] ? "title-resp2" : "")}>Nos services</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Services'] && " grow line-color-change")} />
                                </NavLink>
                            </li>
                            <li>
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
                                    <span className={'title-resp ' + (addedClass['Histoire'] ? "title-resp2" : "")}>Notre histoire</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Histoire'] && " grow line-color-change")} />
                                </NavLink>
                            </li>
                            <li>
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
                                    <span className={'title-resp ' + (addedClass['Appel'] ? "title-resp2" : "")}>Céduler un appel</span>
                                    <hr className={'trans--grow hr0 ' + (addedClass['Appel'] && " grow line-color-change")} />
                                </NavLink>

                            </li>
                        </ul>
                    </div>


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
