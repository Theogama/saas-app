import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center border-t mt-8 text-sm text-gray-500 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <span>© {new Date().getFullYear()} TutorIQ. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer

