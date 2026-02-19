// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import DashboardNavbar from "../components/DashboardNavbar";
// import "../styles/informacoes.css";

// interface Doenca {
//   titulo: string;
//   descricao: string;
//   sintomas: string[];
//   tratamentos: string[];
// }

// const Informacoes: React.FC = () => {
//   const { doenca } = useParams<{ doenca: string }>();
//   const navigate = useNavigate();

//   const [dados, setDados] = useState<Doenca | null>(null);

//   useEffect(() => {
//     if (!doenca) return;

//     const dadosMock: Doenca = {
//       titulo: "Hipertensão arterial",
//       descricao:
//         "A hipertensão arterial (pressão alta) é uma condição em que a força do sangue contra as paredes das artérias permanece elevada de forma contínua, aumentando o risco de problemas no coração, cérebro e rins.",
//       sintomas: [
//         "Dor de cabeça frequente",
//         "Tontura",
//         "Visão embaçada",
//         "Falta de ar",
//         "Palpitações",
//         "Cansaço excessivo",
//         "Zumbido no ouvido",
//       ],
//       tratamentos: [
//         "Diuréticos",
//         "Inibidores da ECA",
//         "Bloqueadores dos receptores da angiotensina (BRA)",
//         "Betabloqueadores",
//         "Bloqueadores dos canais de cálcio",
//         "Redução do consumo de sal",
//         "Alimentação saudável (frutas, verduras e legumes)",
//         "Prática regular de atividade física",
//         "Controle do peso",
//         "Redução do estresse",
//         "Evitar álcool em excesso e parar de fumar",
//       ],
//     };

//     setDados(dadosMock);
//   }, [doenca]);

//   if (!dados) return null;

//   return (
//     <div className="info-layout">
//       <div className="info-content">
//         <DashboardNavbar />

//         <div className="info-container">
//           <button className="voltar-btn" onClick={() => navigate(-1)}>
//             <ArrowLeft size={20} />
//           </button>

//           <h1 className="info-title">{dados.titulo}</h1>

//           <p className="info-descricao">{dados.descricao}</p>

//           <h2 className="secao-titulo">Sintomas</h2>

//           <ul className="lista">
//             {dados.sintomas.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>

//           <h2 className="secao-titulo">Tratamentos</h2>

//           <ul className="tratamentos-grid">
//             {dados.tratamentos.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Informacoes;