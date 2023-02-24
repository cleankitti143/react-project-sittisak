import React from 'react'
import showcase from '../images/hero_539.png'
import { FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="hero xl:mx-20">
      <div>
        <img className="hero-img" src={showcase} alt="hero" />
      </div>
      <div className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left">
        <p className="font-bold text-2xl mb-2">
          Surface Pro 8
        </p>
        <p className="text">
        Surface Pro 8 เป็นพีซีแบบแล็ปท็อปและแท็บเล็ตในเครื่องเดียวรุ่นแรกสำหรับผู้ใช้ทั่วไปที่ใช้แพลตฟอร์ม Intel® Evo™ สำหรับออปชันให้เลือกแบบ i5 และ i7 พร้อมพื้นที่จัดเก็บข้อมูล 256GB ขึ้นไปและออกแบบมาเพื่อเน้นสิ่งที่ดีที่สุดของ Windows 11
        </p>
        <button className="bg-red-600 text-white py-2 px-4 mt-3 hover:bg-red-800 sm:inline-block">
          
          <a target="_blank" href="https://www.microsoft.com/th-th/surface/devices/surface-pro-8?icid=mscom_marcom_H1a_SurfacePro8">Shop Now <FaChevronRight /> </a> <li></li>
        </button>
      </div>
    </section>
  )
}

export default Hero