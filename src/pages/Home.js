import React, { useState, useEffect, useCallback } from 'react';
import Yes from './../assets/img/On dit Yess.png'
import Advantage from "../components/Advantage"
import Realisations from "../components/Realisations"
import img1 from './../assets/img/1.svg'
import img2 from './../assets/img/2.svg'
import img3 from './../assets/img/3.svg'
import img4 from './../assets/img/4.svg'
import StoryImg from './../assets/img/STORY.png'
import Photo1 from './../assets/img/Photo1.png'
import Photo2 from './../assets/img/Photo2.png'
import Photo3 from './../assets/img/Photo3.png'
import './Home.css'
import { AiFillForward } from 'react-icons/ai';
import { AiFillBackward } from 'react-icons/ai';
export default function Home() {

    useEffect(()=>{
        console.log('disptachin loanding');

    }, [])


    return (
        <div className='bg-white'>
            
            <Realisations/>
            <Advantage/>
    
         <h3 className="TitleService">Voici ce que nous faisons<br/>de mieux chez YessWeb</h3>
         <div className="LeftService">
           <img src={img1} className="Img1"/>
           <h4>Conception de site web <br/>pré-conçu</h4>
         </div>
         <div>
             <p className="LeftParagraph">Nous avons plusieurs alternatives pour les site web pré-conçu:<br/> 
                wordpress, elementor ou bien nos modèles de maquettes de base.<br/> 
                Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br/> 
                qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
             <span>Yess, ca m'intéresse!</span>
         </div>
         <div>
          <AiFillForward/>
         </div>
         <div className="RightService">
           <img src={img2} className="Img2"/>
           <h4>Conception de site web <br/>sur mesure</h4>
         </div>
         <div>
             <p className="RightParagraph">Nous avons plusieurs alternatives pour les site web pré-conçu:<br/> 
                wordpress, elementor ou bien nos modèles de maquettes de base.<br/> 
                Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br/> 
                qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
             <span>Yess, ca m'intéresse!</span>
         </div>
         <div>
          <AiFillBackward/>
         </div>
         <div className="LeftService">
           <img src={img3} className="Img1"/>
           <h4>Conception<br/>d'application mobile</h4>
         </div>
         <div>
             <p className="LeftParagraph">Nous avons plusieurs alternatives pour les site web pré-conçu:<br/> 
                wordpress, elementor ou bien nos modèles de maquettes de base.<br/> 
                Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br/> 
                qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
             <span>Yess, ca m'intéresse!</span>
         </div>
         <div>
          <AiFillForward/>
         </div>
         <div className="RightService">
           <img src={img4} className="Img2"/>
           <h4>Conception d'image de marque<br/>sur mesure</h4>
         </div>
         <div>
             <p className="RightParagraph">Nous avons plusieurs alternatives pour les site web pré-conçu:<br/> 
                wordpress, elementor ou bien nos modèles de maquettes de base.<br/> 
                Nous allons regarder avec vous selon votre secteur d’activité la meilleure solution<br/> 
                qui convient et nous allons ensuite adapter le site web à votre entreprise et votre vision.</p>
             <span>Yess, ca m'intéresse!</span>
         </div>
         <div>
          <AiFillBackward/>
         </div>

         <div className="StorySection">
         <div className="StroyContainer">
         <h3 className="StoryTitle">L'histoire YessWeb</h3>
         <div>
         <p><span>YessWeb</span> est une <span>agence web</span> qui a été <span>fondé</span> par trois <span>jeunes passionnés</span><br/>
            par <span>l’univers</span> du <span>web</span> voulant faire une <span>différence</span> chez les<br/>
            <span>entreprises</span> souhaitant se <span>démarquer.</span></p>
        <img src={StoryImg}/>
        </div>
        <h3 className="BehindYessWeb">L'équipe derrière YessWeb</h3>
        <div className="TeamSection">
        <div className="Rectangle"> 
        <img src={Photo1} className="Photo"/>
        <span className="Name">Ismael Bienvenu</span>
        <div>
        <span className="JobTitle">Co-Fondateur/Développeur<br/>full-stack</span>
        <p className="Description">
        Ismael est le magicien de la<br/> 
        programmation chez YessWeb<br/>
        avec plus de 10 ans d’expérience en<br/> 
        programmation, Ismael n’a aucun<br/> 
        projet qui lui fait peur, il a soif de défi et<br/>
        est un atout clé à l’équipe.</p>
        </div>
        </div>
        <div className="Rectangle"> 
        <img src={Photo2} className="Photo"/>
        <span className="Name">Xavier Wells</span>
        <div>
        <span className="JobTitle">Co-Fondateur/Développeur<br/>front-end, designer UI/UX</span>
        <p className="Description"> 
        Ismael est le magicien de la<br/> 
        programmation chez YessWeb<br/>
        avec plus de 10 ans d’expérience en<br/> 
        programmation, Ismael n’a aucun<br/> 
        projet qui lui fait peur, il a soif de défi et<br/>
        est un atout clé à l’équipe.</p>
        </div>
        </div>
        <div className="Rectangle"> 
        <img src={Photo3} className="Photo"/>
        <span className="Name">Philippe Robichaud</span>
        <div>
        <span className="JobTitle">Co-Fondateur/Développement<br/>des affaires</span>
        <p className="Description">
        Ismael est le magicien de la<br/> 
        programmation chez YessWeb<br/>
        avec plus de 10 ans d’expérience en<br/> 
        programmation, Ismael n’a aucun<br/> 
        projet qui lui fait peur, il a soif de défi et<br/>
        est un atout clé à l’équipe.</p>
        </div>
        </div>
        </div>
         </div>
         </div>
        <h2 className="ContactTitle">Intéressé par nos services?</h2>
        
        <h3 className="SecondContactTitle">Planifier un appel avec un expert.</h3>
        <div>
        
        </div>
        </div>
    );
}
