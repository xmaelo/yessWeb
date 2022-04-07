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
import advantageImg from '../assets/img/SVGAVANTAGES.svg'
import { AiFillForward } from 'react-icons/ai';
import { AiFillBackward } from 'react-icons/ai';
import StoryImg from './../assets/img/STORY.png'
import Photo1 from './../assets/img/Photo1.png'
import Photo2 from './../assets/img/Photo2.png'
import Photo3 from './../assets/img/Photo3.png'

export default function History() {

    return (
        
        <div className='StorySection'>
            <div className='container text-white mx-auto py-56 px-20'>
                <h3 className="text-5xl  font-extrabold">L'histoire YessWeb</h3>

                <div className='pt-10 text-2xl font-semibold md:flex justify-between'>
                    <div>
                        <p><span className='text-secondary'>YessWeb</span> est une <span>agence web</span> qui a été <span>fondé</span> par trois <span>jeunes passionnés</span><br />
                        par <span>l’univers</span> du <span>web</span> voulant faire une <span>différence</span> chez les<br />
                        <span>entreprises</span> souhaitant se <span>démarquer.</span></p>
                    </div>
                    <div className=''>
                        <img src={StoryImg} className="w-full -mt-16"/>
                    </div>
                </div>

                <div>
                    <h3 className="text-center text-5xl  font-extrabold">L'équipe derrière YessWeb</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-32">
                        <div className="Rectangle text-center p-10">
                            <img src={Photo1} className="Photo mx-auto" />
                            <p className="text-3xl font-bold text-secondary mt-5">Ismael Bienvenu</p>
                            <div className='mt-5'>
                                <span className="text-secondary">Co-Fondateur/Développeur<br />full-stack</span>
                                <p className="mt-5">
                                Ismael est le magicien de la<br />
                                programmation chez YessWeb<br />
                                avec plus de 10 ans d’expérience en<br />
                                programmation, Ismael n’a aucun<br />
                                projet qui lui fait peur, il a soif de défi et<br />
                                est un atout clé à l’équipe.</p>
                            </div>
                        </div>
                        <div className="Rectangle text-center">
                        <img src={Photo2} className="Photo mx-auto" />
                        <p className="text-3xl font-bold text-secondary mt-5">Xavier Wells</p>
                        <div className='mt-5'>
                            <span className="text-secondary">Co-Fondateur/Développeur<br />front-end, designer UI/UX</span>
                            <p className="mt-5">
                            Ismael est le magicien de la<br />
                            programmation chez YessWeb<br />
                            avec plus de 10 ans d’expérience en<br />
                            programmation, Ismael n’a aucun<br />
                            projet qui lui fait peur, il a soif de défi et<br />
                            est un atout clé à l’équipe.</p>
                        </div>
                        </div>
                        <div className="Rectangle text-center">
                        <img src={Photo3} className="Photo mx-auto" />
                        <p className="text-3xl font-bold text-secondary mt-5">Philippe Robichaud</p>
                        <div className='mt-5'>
                            <span className="text-secondary">Co-Fondateur/Développement<br />des affaires</span>
                            <p className="mt-5">
                            Ismael est le magicien de la<br />
                            programmation chez YessWeb<br />
                            avec plus de 10 ans d’expérience en<br />
                            programmation, Ismael n’a aucun<br />
                            projet qui lui fait peur, il a soif de défi et<br />
                            est un atout clé à l’équipe.</p>
                        </div>
                        </div>
                    </div>
                </div>
        
                    
            </div>
            
        </div>
    );
}
