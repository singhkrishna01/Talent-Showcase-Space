import React from 'react'
import { Link } from 'react-router-dom'
import todomachine from '/images/projectsImages/todomachine.webp'

const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src: "/images/projectsImages/Shoppers.png",
            demo: '',
            code: 'https://github.com/singhkrishna01/Shoppers_Ecommerce'
        },
        {
            id: 2,
            src: "/images/projectsImages/2345.png",
            demo: '',
            code: 'https://github.com/singhkrishna01/Job_Portal_Frontend'
        },
        {
            id: 3,
            src: "/images/projectsImages/dogsblog.webp",
            demo: 'https://barking-blogs.netlify.app/',
            code: 'https://github.com/singhkrishna01/Barking-Blog'
        },
        {
            id: 4,
            src: "/images/projectsImages/Codex.png",
            demo: 'https://codex-reactjs.netlify.app/',
            code: 'https://github.com/singhkrishna01/Codex-React-Page'
        },
        {
            id: 5,
            src: "/images/projectsImages/Weather.png",
            demo: 'https://whiz-weather.netlify.app/',
            code: 'https://github.com/singhkrishna01/Weather-Whiz'
        },
        {
            
            id: 6,
            src: "/images/projectsImages/front.png",
            demo: 'https://strategic-grid.netlify.app/',
            code: 'https://github.com/singhkrishna01/Strategic-Grid'
        },
        {
            id: 7,
            src: todomachine,
            demo: '',
            code: 'https://github.com/singhkrishna01/TO-DO-MACHINE'
        },
        {
            id: 8,
            src: "/images/projectsImages/age.png",
            demo: 'https://age-quantify.netlify.app/',
            code: 'https://github.com/singhkrishna01/Age-Calculator'
        },
        {
            id: 9,
            src: "/images/projectsImages/calc.png",
            demo: 'https://ks-calculator.vercel.app/',
            code: 'https://github.com/singhkrishna01/CalcBot'
        },
        {
            id: 10,
            src: "/images/projectsImages/buzz.png",
            demo: 'https://buzzblink.netlify.app/',
            code: 'https://github.com/singhkrishna01/Social-Media-Networking'
        },
    ]

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
