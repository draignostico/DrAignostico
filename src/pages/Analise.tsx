import React from 'react';
import medicoAnalise from "../img/medicapaganalise.jpeg";
import "../styles/auth.css";

const Analise: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center text-center p-6 relative font-sans overflow-hidden">
      <div className="absolute top-0 w-full h-1/2 bg-[#0056b3] -z-10 rounded-b-[40px]"></div>
      
      <div className="flex flex-col items-center max-w-2xl w-full">
        <img src={medicoAnalise} alt="Médica em análise" className="w-64 md:w-80 mb-12" />
        <h1 className="text-4xl font-extrabold text-[#003366] mb-4">Seus dados estão em análise</h1>
        <p className="text-gray-600 text-lg font-medium">Enviaremos um email para você confirmando o status</p>
      </div>
    </div>
  );
};

// ESSA LINHA É A MAIS IMPORTANTE:
export default Analise;