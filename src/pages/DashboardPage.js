import React, { useState } from 'react'
import Footer from '../components/Footer';
import MainContent from '../components/MainContent/MainContent';
import Navbar from '../components/navbar/Navbar';


function DashboardPage() {
    let getTheme = localStorage.getItem('theme');
    const [switchTheme, setSwitchTheme] = useState(false);

    if (!getTheme) {
        localStorage.setItem('theme', getTheme = 'light')
    }

    if (getTheme === 'light') {
        console.log(getTheme)
        document.querySelector('body').style.cssText = 'background: #ffffff; color:#0B0B0C;';
    } else {
        document.querySelector('body').style.cssText = 'background: #0B0B0C; color:#DEDEDE;';
    }

    const handleTheme = () => {
        setSwitchTheme(!switchTheme);

        if (getTheme === 'light') {
            localStorage.setItem('theme', getTheme = 'dark');
        } else {
            localStorage.setItem('theme', getTheme = 'light');
        }
    }

    return (
        <>
            <div className='w-full h-full'>
                <div className='flex'>
                    {/* navbar */}
                    <Navbar theme={getTheme} handleTheme={handleTheme} />
                    {/* main content */}
                    <MainContent theme={getTheme} />
                </div>

                {/* footer */}
                <Footer theme={getTheme} />
            </div>
        </>
    )
}

export default DashboardPage