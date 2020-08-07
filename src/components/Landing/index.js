import React, {Component} from 'react';
import Header from './Header';
import Promo from './Promo';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
import Artefacts from './Artefacts';
import Contact from './Contact';
import Footer from './Footer';

class Landing extends Component {

    render() {
        return(
            <div className="main-container">
               <Header/>
               <Promo/>
               <Services/>
               <ServiceDetails/>
               <Artefacts/>
               <Contact/>
               <Footer/>
           </div>
        )
    }
}

export default Landing;
