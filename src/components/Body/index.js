import React from 'react';
import Nav from '../Nav';
import About from '../About';
import Cards from '../Cards';
import Contact from '../Contact';
import Resume from '../Resume';

const Body=() => {
    //need to set default to render about
    const [currentPage, handlePageChange] = useState('About');

    //conditionally render whichever page is selected
    
}