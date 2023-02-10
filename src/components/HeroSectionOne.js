import React from 'react'

const HeroSectionOne = () => {
  return (
    <div>
      <div className="text h-3/4  pb-10 bg-white mt-20 w-full px-60">
            <h1 className="text-8xl font-semibold">Learn without limits</h1>
            <p className="text-2xl font-semibold mt-16 ">Start, switch, or advance your career with more than 5,400 courses, Professional Certificates, and degrees from world-class universities and companies</p>
            <div className="text mt-10">
                  <button className="text-2xl text-white font-bold w-80 h-24 rounded bg-blue-800">Join for free</button>
                  <button className="text-xl text-blue-800 font-bold w-96 hover:bg-sky-100 h-24 rounded border-blue-800 border-2 ml-4">Try Coursera for Business</button>
            </div>
      </div>
    </div>
  )
}

export default HeroSectionOne
