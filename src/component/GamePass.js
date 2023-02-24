import React from 'react'
import ShowImg from '../images/homepage/game_pass_539.png'

const GamePass = () => {
  return (
    <section className="hero gamepass-hero xl:mx-20">
      <div>
        <img className="hero-img" src={ShowImg} alt="xbox gamepass" />
      </div>

      <div className="overlay bg-gray-800 text-center px-10 py-20 text-white sm:bg-transparent sm:text-left">
        <h2 className="font-semibold text-xl mb-2">Xbox Game Pass Ultimate</h2>
        <p className="mb-4 text">
          Get your first 3 months of Xbox Game Pass Ultimate membership for $1.
          Now includes EA Play. New subscribers only.
        </p>
        <button className="mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80">
        <a target="_blank" href="https://www.microsoft.com/en-us/d/Xbox-Series-X-Forza-Horizon-5-Bundle/8v5cpws7xvk4?icid=mscom_marcom_MPH1a_XboxSeriesXForza&activetab=pivot:overviewtab">Shop Xbox </a> <li></li>
        </button>
      </div>
    </section>
  )
}

export default GamePass