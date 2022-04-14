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
    (async function(){
      //  handleClientLoad()
      //  //handleAuthClick()
      // listUpcomingEvents()
    })()

  }, [])

    const CLIENT_ID = '547407918902-o255ba1ter6756b4uf2jv3q6210mc1qj.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyDfiNOUaN_D7zosoGn5d0pllR9zEJgoQpU'; //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

    // Array of API discovery doc URLs for APIs used by the quickstart
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";


    /**
     *  On load, called to load the auth2 library and API client library.
     */
    function handleClientLoad() {
      window.gapi.load('client:auth2', initClient);
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    function initClient() {
      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        // authorizeButton.onclick = await ;
        // signoutButton.onclick = handleSignoutClick;
        console.log('success calendar api')
      }, function(error) {
        console.log('error calendar api', error)
        appendPre(JSON.stringify(error, null, 2));
      });
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    function updateSigninStatus(isSignedIn) {
      // if (isSignedIn) {
      //   authorizeButton.style.display = 'none';
      //   signoutButton.style.display = 'block';
      //   listUpcomingEvents();
      // } else {
      //   authorizeButton.style.display = 'block';
      //   signoutButton.style.display = 'none';
      // }
    }

    /**
     *  Sign in the user upon button click.
     */
    function handleAuthClick (event) {
      window.gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    function handleSignoutClick(event) {
      window.gapi.auth2.getAuthInstance().signOut();
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    function appendPre(message) {
      // var pre = document.getElementById('content');
      // var textContent = document.createTextNode(message + '\n');
      // pre.appendChild(textContent);
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    function listUpcomingEvents() {
      window.gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(function(response) {
        var events = response.result.items;
        appendPre('Upcoming events:');

        console.log('event event event ...', events)
        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            var event = events[i];
            var when = event.start.dateTime;
            if (!when) {
              when = event.start.date;
            }
            appendPre(event.summary + ' (' + when + ')')
          }
        } else {
          appendPre('No upcoming events found.');
        }
      });
    }



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
