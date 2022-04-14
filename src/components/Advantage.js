import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import Icon from '@material-tailwind/react/Icon';
import  { AiOutlineHome,} from 'react-icons/ai' 
import {IoIosHome} from 'react-icons/io'
import {FaLaptopCode, FaBook} from 'react-icons/fa'
import {MdAddIcCall} from 'react-icons/md'
import advantageImg from '../assets/img/advantage.png'
import './Advantage.css'
export default function Advantage() {

    return (

        <div className='container mx-auto py-4 px-10 bg-white'>
            <div class="grid md:grid-cols-4  gap-20 text-primary text-center">
                <div>
                    <img src={advantageImg} alt="Logo" className="Movin -pt-10"/>
                </div>
                <div className='col-span-2 text-2xl '>
                    <h2 className="TitleAdvantage font-bold text-5xl">
                        Les avantages de nous choisir.
                    </h2>

                    <div className='pt-10'>
                        <div className='flex text-left gap-3 items-center justify-center font-semibold'>
                            <div className="Square2 p-8"> 
                                <IoIosHome className="text-xl" color={"#0040FF"}/>
                            </div>
                            <p>Vous obtenez un service personnalisé et adapté selon vos besoins �</p>
                        </div>
                    </div>
                    <div className='pt-10 pl-20'>
                        <div className='flex text-left gap-3 items-center justify-center font-semibold'>
                            <div className="Square2"> 
                                <IoIosHome className="text-xl" color={"#0040FF"}/>
                            </div>
                            <p>Vous sauvez du temps avec votre site web livré en moins de 7 jours </p>
                        </div>
                    </div>
                    <div className='pt-10 pl-36'>
                        <div className='flex text-left gap-3 items-center justify-center font-semibold'>
                            <div className="Square2"> 
                                <IoIosHome className="text-xl" color={"#0040FF"}/>
                            </div>
                            <p>Vous obtenez une image de marque qui se démarque de vos compétiteurs sur le web. � </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    );
}
