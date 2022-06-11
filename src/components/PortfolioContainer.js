import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';

function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Home');

    function loadPage () {
        if (currentPage === 'Home') {
            return <Home></Home>;
        }
        if (currentPage === 'About') {
            return <About></About>;
        }
        if (currentPage === 'Resume') {
            return <Resume></Resume>;
        }
        return <Contact></Contact>
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} ></NavBar>
            {loadPage()}
        </div>
    );
}

export default PortfolioContainer;