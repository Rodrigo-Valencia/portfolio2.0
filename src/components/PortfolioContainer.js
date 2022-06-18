import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from '../components/pages/Footer'

function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('About');

    function loadPage () {
        if (currentPage === 'About') {
            return <About></About>;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio></Portfolio>;
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
            {/* <Footer /> */}
        </div>
    );
}

export default PortfolioContainer;