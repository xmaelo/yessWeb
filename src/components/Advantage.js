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

export default function Advantage() {

    return (
        <div className='container mx-auto py-10 bg-white'>
            <div class="grid md:grid-cols-2  gap-4 text-primary text-center">
                <div>
                    <img src={advantageImg} alt="Logo" class="mr-2"/>
                </div>
                <div>
                    <h2 className='text-3xl'>
                        Les avantages de nous choisir
                    </h2>
                </div>
            </div>
        </div>
    );
}
