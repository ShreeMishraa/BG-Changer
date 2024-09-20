import React from 'react';

function Card({ username, place }) {
  return (
    <div className="flex justify-center items-center mt-8">
      <figure className="md:flex bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-2xl dark:bg-slate-800">
        {/* Image section */}
        <img
           className="w-[310px] h-[450px] md:rounded-none rounded-full mx-auto md:mx-0"
          src="src/assets/linkedin_bg.png"
          alt="Profile"
        />
        {/* Text and caption section */}
        <div className="p-6 md:p-8 space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
              "In this project, I practiced React by creating a simple web-app with dynamic background color changes using buttons. I utilized the useState hook to manage color state and built a Card component displaying user info. Tailwind CSS was used for responsive styling and UI design. This project helped reinforce core React concepts like state management, component structure, and modern styling techniques."
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 text-xl">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {place}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;

