import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        axios.post('https://getform.io/f/bxojpdda', formData)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    iconColor: '#a855f7',
                    title: 'Thank you for contacting me. It will be a pleasure to work with you!',
                    showConfirmButton: true,
                    background: '#191a19',
                    color: '#fff',
                    confirmButtonColor: '#a855f7',
                    backdrop: `
                        rgba(54, 55, 54,0.4)
                    `
                })
            })
            .catch(error => {
            console.log(error);
            });
        
        event.target.reset();
    }
    

    return (
        <section name='Contact' className='relative w-full md:h-screen p-4 text-white h-unset overflow-hidden'>
            {/* Background Effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary-color/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
            
            <div className='relative flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full z-10'>
                <div className='pb-8 text-center'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl animated-gradient text-center'>Reach Out to Me</h2>
                    <p className='py-6 text-gray-300 text-lg'>Let's create something amazing together</p>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='relative w-full md:w-2/3 lg:w-1/2'>
                        {/* Form Container with Glass Effect */}
                        <div className='relative bg-black/30 backdrop-blur-xl border border-primary-color/20 rounded-2xl p-8 shadow-2xl shadow-purple-500/20'>
                            
                            <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
                                {/* Name Field */}
                                <div className='relative group'>
                                    <label className='absolute -top-2 left-4 bg-black/80 px-2 text-primary-color text-sm font-medium'>Name</label>
                                    <input 
                                        type="text" 
                                        name='name' 
                                        placeholder='Your full name' 
                                        className='w-full p-4 bg-transparent border-2 border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-color focus:shadow-lg focus:shadow-primary-color/20 transition-all duration-300 hover:border-primary-color/50' 
                                        required
                                    />
                                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-primary-color/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                                </div>

                                {/* Email Field */}
                                <div className='relative group'>
                                    <label className='absolute -top-2 left-4 bg-black/80 px-2 text-primary-color text-sm font-medium'>Email</label>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        placeholder='your.email@example.com' 
                                        className='w-full p-4 bg-transparent border-2 border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-color focus:shadow-lg focus:shadow-primary-color/20 transition-all duration-300 hover:border-primary-color/50' 
                                        required 
                                    />
                                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-primary-color/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                                </div>

                                {/* Message Field */}
                                <div className='relative group'>
                                    <label className='absolute -top-2 left-4 bg-black/80 px-2 text-primary-color text-sm font-medium'>Message</label>
                                    <textarea 
                                        name="message" 
                                        rows="6" 
                                        placeholder='Tell me about your project or just say hello...' 
                                        className='w-full p-4 bg-transparent border-2 border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-color focus:shadow-lg focus:shadow-primary-color/20 transition-all duration-300 hover:border-primary-color/50 resize-none' 
                                        required
                                    ></textarea>
                                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-primary-color/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                                </div>

                                {/* Submit Button */}
                                <div className='pt-4'>
                                    <button 
                                        type='submit'
                                        className='w-full group relative overflow-hidden bg-gradient-to-r from-primary-color via-purple-600 to-primary-color text-black font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:via-primary-color hover:to-purple-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-color/30 transform'
                                    >
                                        <span className='relative z-10 flex items-center justify-center space-x-2'>
                                            <span>Send Message</span>
                                            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                                            </svg>
                                        </span>
                                        <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact