import StoryImg from './../assets/img/STORY.png'
import Photo1 from './../assets/img/Photo1.png'
import Photo2 from './../assets/img/Photo2.png'
import Photo3 from './../assets/img/Photo3.png'
import { FaLaptopCode, FaBook, FaArrowRight } from 'react-icons/fa'
export default function footer() {
    return (
        <footer>
            <div className='StorySection'>
                <div className='container text-white mx-auto py-56 px-20'>
                    <div className="Square absolute -ml-16">
                        <FaLaptopCode className="text-3xl mx-auto" color={"#0040FF"} />
                    </div>
                    <h3 className="text-2xl  font-extrabold">Nos services</h3>


                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 pt-10">
                        <div>
                            <h4 className='text-2xl text-semibold'> Conception de site web pré-conçu</h4>

                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Elementor</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                            <div className='flex justify-between pt-5'>
                                <span className='text-xl'>Wordpress</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                            <div className='flex justify-between pt-5'>
                                <span className='text-xl'>Voir nos maquettes</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-2xl text-semibold'> Conception de site web sur mesure</h4>

                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Voir les étapes du processus en détails</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-2xl text-semibold'> Conception d’application mobile</h4>

                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Voir les étapes du processus en détails</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-2xl text-semibold'> Conception d’image de marque sur mesure</h4>

                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Stratégie marketing</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                            <div className='flex justify-between pt-5'>
                                <span className='text-xl'>Conception de logo</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                            <div className='flex justify-between pt-5'>
                                <span className='text-xl'>Recherche des couleurs</span>
                                <div>
                                    <FaArrowRight className="text-xl mx-auto text-secondary" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 pt-10">
                        <div>
                            <div className="Square absolute -ml-16">
                                <FaLaptopCode className="text-2xl mx-auto" color={"#0040FF"} />
                            </div>
                            <h3 className='text-2xl  font-extrabold'> Nos heures d’ouvertures</h3>

                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Lundi</span>
                                <span className='text-xl'>8H-17H</span>
                            </div>
                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Mardi</span>
                                <span className='text-xl'>8H-17H</span>
                            </div>
                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Mercredi</span>
                                <span className='text-xl'>8H-17H</span>
                            </div>
                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Jeudi</span>
                                <span className='text-xl'>8H-17H</span>
                            </div>
                            <div className='flex justify-between pt-8'>
                                <span className='text-xl'>Vendredi</span>
                                <span className='text-xl'>8H-17H</span>
                            </div>
                        </div>
                        <div className='col-span-2 pl-32'>
                            <div className="Square absolute -ml-16">
                                <FaLaptopCode className="text-3xl mx-auto" color={"#0040FF"} />
                            </div>
                            <h3 className="text-2xl  font-extrabold">Contact</h3>
                            <div className='flex justify-between pt-2'>
                                <span className='text-xl'>info@yessweb0com</span>
                            </div>
                            <div className='flex justify-between pt-2'>
                                <span className='text-xl'>+1 xxxxxxxx</span>
                            </div>

                            <div className="Square absolute -ml-16 mt-16">
                                <FaLaptopCode className="text-3xl mx-auto" color={"#0040FF"} />
                            </div>
                            <div className='background'>
                                <h3 className="text-2xl  font-extrabold mt-16">Inscrivez-vous à notre Infolettre!</h3>

                                <div className='mt-5'>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder='Tapez votre email ici'
                                        className='bg-primary shadow-lg shadow-primary tewt-white p-2 rounded-xl w-1/2' />
                                    <br/>
                                    <button className='font-bold text-primary bg-secondary px-5 py-1 rounded-xl mt-5'>Confirmez</button>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="Square absolute -ml-16">
                                <FaLaptopCode className="text-3xl mx-auto" color={"#0040FF"} />
                            </div>
                            <h3 className="text-2xl  font-extrabold">Suivez-nous! �</h3>
                            <div className='flex justify-start mt-5 gap-4'>
                                <div>
                                    <FaLaptopCode className="text-3xl mx-auto text-secondary" />
                                </div>
                                <div>
                                    <FaLaptopCode className="text-3xl mx-auto text-secondary" />
                                </div>
                                <div>
                                    <FaLaptopCode className="text-3xl mx-auto text-secondary" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center pt-32'>
                        <p className='text-2xl font-semibold'>Les services YessWeb Enr. Tout droit réservé 2022</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
