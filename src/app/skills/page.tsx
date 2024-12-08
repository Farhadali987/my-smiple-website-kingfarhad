import React from 'react';
import Image from 'next/image';

const Skills: React.FC = () => {
  const servicesList = [
    'HTML',
    'Mobile App Development',
    'SEO Services',
    'CSS',
    'JavaScript',
    'TypeScript',
    'GitHub',
    'React.js',
    'Next.js',
  ];

  const repositories = [
    {
      title: 'Navbar',
      description: 'A responsive navigation bar built with React.',
      url: 'https://github.com/Farhadali987/Navbar.git',
      imageUrl: '/repo1.webp', // Replace with actual image URL
    },
    {
      title: 'To-do List',
      description: 'A simple to-do list application to manage tasks.',
      url: 'https://github.com/Farhadali987/Todolist.git',
      imageUrl: '/repo2.webp', // Replace with actual image URL
    },
    {
      title: 'Student Marks Checker',
      description: 'A simple web app to check student marks.',
      url: 'https://farhadali987.github.io/My-Simple-Student-Marks-Checker/',
      imageUrl: '/repo3.webp', // Replace with actual image URL
    },
    {
      title: 'Number Game',
      description: 'A simple number guessing game.',
      url: 'https://farhadali987.github.io/My-Simple-Number-game/',
      imageUrl: '/repo4.webp', // Replace with actual image URL
    },
    {
      title: 'Multiplication Number Game',
      description: 'A web app for multiplication games.',
      url: 'https://farhadali987.github.io/My-Simple-Multiplication-Number/',
      imageUrl: '/repo5.webp', // Replace with actual image URL
    },
    {
      title: 'School Registration Form',
      description: 'A simple school registration form.',
      url: 'https://farhadali987.github.io/School-Registration-Form/',
      imageUrl: '/repo6.webp', // Replace with actual image URL
    },
    {
      title: 'Personal Website',
      description: 'My personal website showcasing my work.',
      url: 'https://farhadali987.github.io/My-website-farhad-ali/',
      imageUrl: '/repo7.webp', // Replace with actual image URL
    },
    {
      title: 'Digital Stopwatch',
      description: 'A digital stopwatch for timing tasks.',
      url: 'https://farhadali987.github.io/Digital-Stopwatch-Farhad/',
      imageUrl: '/repo8.webp', // Replace with actual image URL
    },
    {
      title: 'Digital Clock',
      description: 'A simple digital clock application.',
      url: 'https://farhadali987.github.io/-My-Digital-Clock-Farhad-Ali/',
      imageUrl: '/repo9.webp', // Replace with actual image URL
    },
    {
      title: 'Simple Lamp',
      description: 'A simple lamp web application.',
      url: 'https://farhadali987.github.io/my-simple-Lamp/',
      imageUrl: '/repo10.webp', // Replace with actual image URL
    },
    {
      title: 'CLI Currency Converter',
      description: 'A command line interface for currency conversion.',
      url: 'https://github.com/Farhadali987/CLI-Currency-Convertor.git',
      imageUrl: '/repo11.webp', // Replace with actual image URL
    },
    {
      title: 'Inventory Management System',
      description: 'A simple inventory management web app.',
      url: 'https://farhadali987.github.io/my-simple-Inventry-Management-System-./',
      imageUrl: '/repo12.webp', // Replace with actual image URL
    },
    {
      title: 'Farhad Keyboard',
      description: 'An interactive keyboard application.',
      url: 'https://farhadali987.github.io/farhad-keyboard/',
      imageUrl: '/repo13.webp', // Replace with actual image URL
    },
    {
      title: 'Calculator',
      description: 'A simple calculator web app.',
      url: 'https://farhadali987.github.io/Calculator-Farhad-Ali/',
      imageUrl: '/repo14.webp', // Replace with actual image URL
    },
    {
      title: 'CLI ATM Machine',
      description: 'A command line interface for an ATM machine.',
      url: 'https://github.com/Farhadali987/CLI_ATM_MACHINE.git',
      imageUrl: '/repo15.webp', // Replace with actual image URL
    },
    {
      title: 'Number Guessing Game',
      description: 'A fun number guessing game.',
      url: 'https://github.com/Farhadali987/Number_Guessing_Game.git',
      imageUrl: '/repo16.webp', // Replace with actual image URL
    },
    {
      title: 'Sample Calculator',
      description: 'A sample calculator application.',
      url: 'https://github.com/Farhadali987/a-sample-calculator.git',
      imageUrl: '/repo17.webp', // Replace with actual image URL
    },
  ];

  return (
    <>
    <div className="p-4">
      {/* Services List */}
      <div className="flex justify-center">
        <ul className="mt-4 space-y-2">
          {servicesList.map((service, index) => (
            <li key={index} className="text-lg">{service}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <Image 
          src="/aipic.webp"
          alt="Code Image"
          width={400}
          height={200}
          className="mr-4"
        />
      </div>
<h1 className=''> My Progects </h1>
      {/* Repository Cards */}
      <div className="flex flex-wrap justify-center mt-10">
        {repositories.map((repo) => (
          <div key={repo.title} className="max-w-xs rounded overflow-hidden shadow-lg m-4 border-4 border-red-500">
            <Image 
              className="w-full h-48 object-cover" 
              src={repo.imageUrl} 
              alt={repo.title} 
              width={400} 
              height={200} 
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{repo.title}</div>
              <p className="text-gray-700 text-base">{repo.description}</p>
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default Skills; 