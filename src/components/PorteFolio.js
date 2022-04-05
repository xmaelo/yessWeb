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
import img1 from './../assets/img/1.svg'
import img2 from './../assets/img/2.svg'
import img3 from './../assets/img/3.svg'
import img4 from './../assets/img/4.svg'

export default function PorteFolio() {

    return (
        <div className='container mx-auto py-10 bg-white px-20'>
            <h3 className="text-4xl text-center text-primary font-bold">Voici ce que nous faisons<br />de mieux chez YessWeb</h3>

                <div className='flex pt-20 items-end'>
                    <div className="">
                        <img src={img1} className="Img1" />
                    </div>
                    <div>
                        <h4 className='outlined text-5xl'>Conception de site web <br />pré-conçu</h4>
                        <p className="pt-10 text-2xl text-blueGray font-bold">Nous avons plusieurs alternatives pour les site web pré-conçu:<br />
                        wordpress, elementor ou bien nos modèles de maquettes de base.<br />
                        Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br />
                        qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
                    </div>
                    <div className='content-end'>
                        <p className='text-4xl text-right text-primary font-bold'>Je veux cette option</p>
                        <div className='flex justify-end justify-items-end justify-self-end'>
                            <AiFillForward  className='outlined text-5xl text-right text-primary'/>
                        </div>
                    </div>
                </div>


                <div className='flex pt-20'>
                    <div className='flex content-end items-end'>
                        <div>
                            <p className='text-4xl text-primary font-bold'>Je veux cette option</p>
                            <div className='flex'>
                                <AiFillBackward  className='outlined text-5xl  text-primary'/>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <img src={img2} className="Img2" />
                        </div>
                        <div>
                            <h4 className='outlined text-5xl'>Conception de site web <br />sur mesure</h4>
                            <p className="pt-10 text-2xl text-blueGray font-bold text-right">Nous avons plusieurs alternatives pour les site web pré-conçu:<br />
                            wordpress, elementor ou bien nos modèles de maquettes de base.<br />
                            Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br />
                            qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
                        </div>
                    </div>
                </div>

                <div className='flex pt-20 items-end'>
                    <div className="">
                        <img src={img3} className="Img1" />
                    </div>
                    <div>
                        <h4 className='outlined text-5xl'>Conception<br />d'application mobile</h4>
                        <p className="pt-10 text-2xl text-blueGray font-bold">Nous avons plusieurs alternatives pour les site web pré-conçu:<br />
                    wordpress, elementor ou bien nos modèles de maquettes de base.<br />
                    Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br />
                    qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
                    </div>
                    <div className='content-end'>
                        <p className='text-4xl text-right text-primary font-bold'>Je veux cette option</p>
                        <div className='flex justify-end justify-items-end justify-self-end'>
                            <AiFillForward  className='outlined text-5xl text-right text-primary'/>
                        </div>
                    </div>
                </div>

                <div className='flex pt-20'>
                    <div className='flex content-end items-end'>
                        <div>
                            <p className='text-4xl text-primary font-bold'>Je veux cette option</p>
                            <div className='flex'>
                                <AiFillBackward  className='outlined text-5xl  text-primary'/>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <img src={img4} className="Img2" />
                        </div>
                        <div>
                            <h4 className='outlined text-5xl'>Conception d'image de marque<br />sur mesure</h4>
                            <p className="pt-10 text-2xl text-blueGray font-bold text-right">Nous avons plusieurs alternatives pour les site web pré-conçu:<br />
                    wordpress, elementor ou bien nos modèles de maquettes de base.<br />
                    Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br />
                    qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
                    
                        </div>
                    </div>
                </div>

                
                
        </div>
    );
}
