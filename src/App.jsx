import React from 'react';
import './index.css';
import LandingPage from './component/landingpage';
import Blog from './component/blog';
import Portfolio from './component/portifolio';
import Resume from './component/resume'; 
import ContactForm from './component/contact';

const App = () => {
  return (
    <div>
      <LandingPage /> {/* Render the LandingPage component */}
      <Blog /> {/* Render the Blog component */}
      <Portfolio /> {/* Render the Portfolio component */}
      <Resume /> {/* Render the Resume component */}
     <ContactForm/>{/* Render the ContactForm component */}
    </div>
  );
};

export default App;
