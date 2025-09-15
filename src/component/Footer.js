import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold mb-3">Visit Us</h2>
          <p className="text-gray-300">
            Come experience the authentic taste of Nigerian in a warm, welcoming
            atmosphere.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-300">
            123 Allen Street <br />
            Opebi <br />
            Ikeja, Lagos State
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-300 hover:text-yellow-400 transition duration-300 cursor-pointer">
            (+2348048123456) <br /> Call for reservations
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hours</h3>
          <p className="text-gray-300">
            Mon-Thu: 11am-10pm <br />
            Fri-Sat: 11am-11pm <br />
            Sun: 12pm-9pm
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Nigerian Restaurant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
