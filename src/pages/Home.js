import React, { useState, useEffect, useCallback } from 'react';
import Yes from './../assets/img/On dit Yess.png'
import Advantage from "../components/Advantage"
import Realisations from "../components/Realisations"
import PorteFolio from "../components/PorteFolio"
import History from "../components/History"
import Demo from "../components/Demo"
import './Home.css'
export default function Home() {

  useEffect(() => {
    console.log('disptachin loanding');

  }, [])


  return (
    <div className='bg-white'>

      <Realisations />
      <Advantage />
      <PorteFolio />
      <History />
      <Demo />
    </div>
  );
}
