import React, { useState, useEffect, useCallback } from 'react';
import Yes from './../assets/img/On dit Yess.png'
import Advantage from "../components/Advantage"
import Realisations from "../components/Realisations"
import PorteFolio from "../components/PorteFolio"
import History from "../components/History"
import Demo from "../components/Demo"
import './Home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useInView } from "react-intersection-observer";
import { useRef } from 'react';

export default function Home() {

  const [section1Ref, section1InView] = useInView({ threshold: 0 });
  const [section2Ref, section2InView] = useInView({ threshold: 0 });
  const [change, setChange] = useState(false);
  console.log('section1Ref', section1InView)
  
  const myRef = useRef();

  //console.log('myRef', myRef.current);



  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry, entries);
      console.log(document.getElementById("black").getBoundingClientRect().top);
      console.log('entry.isIntersecting', entry.isIntersecting);
      window.onscroll = function(){
        if(entry.isIntersecting && document.getElementById("black").getBoundingClientRect().top < -10){
          setChange(true)
        }else if(!entry.isIntersecting  || document.getElementById("black").getBoundingClientRect().top > 0){
          setChange(false)
        }
        //else if(document.getElementById("black").getBoundingClientRect().top > 0)
        console.log('-------------------------', entry.isIntersecting)
      };
    });

    
    observer.observe(myRef.current);

  }, [])


  return (
    <div className='bg-white'>
      <section ref={section1Ref}>
        <Header  bgColor={change ? 'white' : false} change={change} />
      </section>
      
        <Realisations/>

      <Advantage />
      <PorteFolio />
      <section ref={myRef}  id="black" style={{ backgroundColor: 'green' }}>
        <History />
      </section>
      <Demo />
      <Footer />
    </div>
  );
}
