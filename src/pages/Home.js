import React, { useState, useEffect, useCallback } from 'react';

import Advantage from "../components/Advantage"
export default function Home() {

    useEffect(()=>{
        console.log('disptachin loanding');

    }, [])


    return (
        <div className='bg-white'>
        <Advantage/>

        </div>
    );
}
