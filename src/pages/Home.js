import React, { useState, useEffect, useCallback } from 'react';

import Advantage from "../components/Advantage"
import Realisations from "../components/Realisations"
export default function Home() {

    useEffect(()=>{
        console.log('disptachin loanding');

    }, [])


    return (
        <div className='bg-white'>
            <Realisations/>
            <Advantage/>

        </div>
    );
}
