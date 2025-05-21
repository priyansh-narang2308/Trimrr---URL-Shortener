import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLink } from 'react-icons/fa';
import Header from '../components/header';

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Header />

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-gray-900 text-gray-300 py-6 mt-50">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h2 className="text-xl font-semibold text-white">TrimMR</h2>
                        <p className="text-sm text-gray-400">Your smart URL shortener.</p>
                    </div>

                    <div className="flex space-x-5">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <FaLink size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} TrimMR — Built with ❤️ by Priyansh
                </div>
            </footer>
        </div>
    );
};

export default AppLayout;
