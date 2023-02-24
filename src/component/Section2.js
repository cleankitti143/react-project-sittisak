import React, { useState } from 'react'
import data from '../data/section2'

const Section2 = () => {
  const [cards, setCards] = useState(data)

  return (
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
      {cards.map((card) => {
        const { id, image, title, desc, link } = card

        return (
          <article key={id} className="p-8">
            <div>
              <img src={image} alt="card" />
              <h3 className="font-semibold text-xl mt-2 mb-1">{title}</h3>
              <p>{desc}</p>
              <button className="cursor-pointer text-red-600 font-semibold">
                <a target="_blank" href="https://www.microsoft.com/en-us/flexibility/hybrid-work-solutions?ocid=AID3045379_QSG_57610">Learn more</a> <li></li>
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Section2