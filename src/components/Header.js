import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import logo from '../assets/img/logo.PNG';
import  { AiOutlineHome,} from 'react-icons/ai' 
import {IoIosHome} from 'react-icons/io'
import {FaLaptopCode, FaBook} from 'react-icons/fa'
import {MdAddIcCall} from 'react-icons/md'
import Button from "@material-tailwind/react/Button";
import headerImg from '../assets/img/SVGHEADER.svg'

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
            <nav class="">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">
                        <div class="flex space-x-7">
                            <div>
                                <a href="#" class="flex items-center py-4 px-2">
                                    <img src={logo} alt="Logo" class="w-48 rounded-full pt-5"/>
                                </a>
                                    
                            </div>
                            <div class="hidden md:flex items-center gap-8">
                                <NavLink
                                    to="/"
                                    onClick={()=>setAddedClass({Accueil: true})}
                                    exact
                                    className={"py-4 px-2 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Accueil']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                    <div className="Square"> 
                                        <IoIosHome className="text-xl"/>
                                        </div>
                                    </div>
                                    Accueil
                                    <hr class={'trans--grow hr0 '+ (addedClass['Accueil'] && " grow line-color-change")}/>
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={()=>setAddedClass({Services: true})}
                                    className={"py-4 px-2 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Services']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                        <div className="Square"> 
                                        <FaLaptopCode className="text-xl" />
                                        </div>
                                    </div>
                                    Nos services
                                    <hr class={'trans--grow hr0 '+ (addedClass['Services'] && " grow line-color-change")}/>
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={()=>setAddedClass({Histoire: true})}
                                    className={"py-4 px-2 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Histoire']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                    <div className="Square"> 
                                        <FaBook className="text-xl"/>
                                        </div>
                                    </div>
                                    Notre histoire
                                    <hr class={'trans--grow hr0 '+ (addedClass['Histoire'] && " grow line-color-change")}/>
                                </NavLink>
                                <NavLink
                                    to="/"
                                    exact
                                    onClick={()=>setAddedClass({Appel: true})}
                                    className={"py-4 px-2 text-white  font-semibold"}
                                >
                                    <div  className={(addedClass['Appel']? "fadeIn": "fadeOut")+ " flex justify-center"}>
                                    <div className="Square"> 
                                        <MdAddIcCall  className="text-xl"/>
                                    </div>
                                    </div>
                                    Céduler un appel
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
                <div class="grid md:grid-cols-2  gap-4 text-white">
                    <div>
                        <h1 className='text-4xl font-semibold'>
                            L'agence web ...
                        </h1>
                        <p className='py-10'>
                        www.google.com unexpectedly closed the connection.
                        www.google.com unexpectedly closed the connection.
                        www.google.com unexpectedly closed the connection.
                        </p>
                        <br/>
                        <Button
                            color="lightBlue"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            upperCase={false}
                            ripple="light"
                            className="px-32"
                        >
                            Ceduler un appel
                        </Button>
                    </div>

                    <div>
                        <img src={headerImg} alt="Logo" class="w-96 mr-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
