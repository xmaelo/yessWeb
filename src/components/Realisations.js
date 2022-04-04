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

export default function Realisations() {

    return (
        <div className='container mx-auto py-10 bg-white px-10'>
            <div class="grid md:grid-cols-3  gap-4 text-primary text-center">
                
                <div className='mx-auto'>
                    <h2 class="outlined text-5xl text-left">Plus de</h2>
                    <div className='flex gap-4 pt-16'>
                        <h2 class="outlined text-7xl">10</h2>
                        <div className='bg-primary text-white shadow-xl text-center items-center justify-center p-10 rounded-3xl w-64'>
                            <span className='text-3xl font-bold'>Sites web</span>
                            <IoIosHome className="text-7xl mx-auto pt-5" color={"white"}/>
                        </div>
                    </div>
                    <h2 class="outlined text-5xl pt-5">réalisé</h2>
                </div>
                <div className='mx-auto'>
                    <div className='flex gap-4 -pt-16'>
                        <h2 class="outlined text-7xl">2</h2>
                        <div className='bg-primary text-white shadow-xl text-center items-center justify-center p-10 rounded-3xl w-64'>
                        
                        <span className='text-3xl font-bold'>Images de marques</span>
                        <IoIosHome className="text-7xl mx-auto pt-5" color={"white"}/>
                        </div>
                    </div>
                    <h2 class="outlined text-5xl pt-5">réalisé</h2>
                </div>

                <div className='mx-auto'>
                    <div className='flex gap-4 pt-16'>
                        <h2 class="outlined text-7xl">2</h2>
                        <div className='bg-primary text-white shadow-xl text-center items-center justify-center p-10 rounded-3xl w-64'>
                        
                        <span className='text-3xl font-bold'>Applications mobiles</span>
                        <IoIosHome className="text-7xl mx-auto pt-5" color={"white"}/>
                        </div>
                    </div>
                    <h2 class="outlined text-5xl pt-5">réalisé</h2>
                </div>
            </div>
        </div>
    );
}
