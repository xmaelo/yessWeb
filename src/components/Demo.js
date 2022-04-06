import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import contactImg from './../assets/img/Contact.png'
import DtPicker, { DtCalendar } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
export default function Demo() {
    const [date, setDate] = useState(null)

    return (

        <div className='container mx-auto py-4 px-10 bg-white mt-48'>
            <h3 className="text-5xl  font-extrabold text-primary text-center">Intéressé par nos services?</h3>


            <div class="grid md:grid-cols-2  gap-0 text-primary pt-20">
               <div className=''>
               <img src={contactImg} className="mx-auto" />
               </div>

                <div>
                    <h4 className="text-4xl  font-extrabold text-primary">Planifier un appel avec un expert.</h4>
                    <p className="text-2xl text-blueGray font-semibold pt-8"><span className='text-primary'>L’expert prendra le temps avec vous d’analyser vos besoins</span> selon
                    votre entreprise et votre secteur d’activités. Il pourra ensuite <br/>
                    <span className='text-primary'> vous proposez une solution optimale selon votre vision.</span> </p>

                    <DtCalendar onChange={setDate} withTime showTimeInput/>
                </div>
            </div>
        </div>
   
    );
}
