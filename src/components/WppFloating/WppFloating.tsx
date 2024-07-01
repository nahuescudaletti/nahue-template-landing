import React from 'react';
import Image from 'next/image';
import { getBasePath } from '@/utils/utils'; // Asegúrate de que este path es correcto

const WppFloating = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 text-white p-4 rounded-full shadow-md transition duration-300"
    >
      <Image 
        src={`${getBasePath()}/assets/wpp.png`} 
        alt="Testimonial" 
        width={60} 
        height={50} 
      />
    </a>
  );
};

export default WppFloating;
