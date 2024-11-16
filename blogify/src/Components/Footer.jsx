import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
function FooterComponent() {
    return (
        <div>
            <Footer container className='border border-t-8 border-teal-500'>
                <div className='w-full  max-w-7xl mx-auto'>
                    <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                        <Link to='/' className='self-center whitespace-nowrap text-3xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blogify</span>.com
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div className=''>
                    <Footer.Title title='ABOUT'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='#'
                        target=''_blank
                        >
                            100 Js Projects
                        </Footer.Link>
                        <Footer.Link
                        href='#'
                        target=''_blank
                        >
                            Projects
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div className=''>
                    <Footer.Title title='FOLLOW US'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='#'
                        target=''_blank
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link
                        href='#'
                        target=''_blank
                        >
                            Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div className=''>
                    <Footer.Title title='LEGAL'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='#'
                        target=''_blank
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link
                        href='#'
                        target=''_blank
                        >
                            Tersm &amp; Condition
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    </div>
                    <Footer.Divider/>
                    <div className='lg:flex lg:flex-row lg:justify-around'>
                    <div className='text-center'>
                        <Footer.Copyright href='#' by="Bogify-app" year= {new Date().getFullYear()} />
                  
                    </div>
                    <div className='flex justify-center gap-5 mt-4'>
                    <Footer.Icon href="https://facebook.com" icon={BsFacebook} />
                    <Footer.Icon href="https://facebook.com" icon={BsInstagram} />
                    <Footer.Icon href="https://facebook.com" icon={BsTwitter} />
                    <Footer.Icon href="https://facebook.com" icon={BsGithub} />
                    </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

export default FooterComponent