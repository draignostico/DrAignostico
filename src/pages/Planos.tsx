import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/planos.css";
import medicaHero from "../img/medica-hero.png"; 

export default function Planos() {
  const planosData = [
    { id: 1, nome: "Plano mega", preco: "99,90", qtd: 75 },
    { id: 2, nome: "Plano mega", preco: "99,90", qtd: 75 },
    { id: 3, nome: "Plano mega", preco: "99,90", qtd: 75 },
    { id: 4, nome: "Plano mega", preco: "99,90", qtd: 75 },
  ];

  return (
    <>
      <Navbar />
      <main className="container-planos">
        
        <section className="hero-planos">
          <div className="lado-imagem-hero">
            <img src={medicaHero} alt="Ilustração médica" className="imagem-hero-completa" />
          </div>
          <div className="lado-texto-hero">
            <h1>
              Somos uma plataforma de inteligência artificial que auxilia médicos nas melhores decisões diagnósticas.
            </h1>
          </div>
        </section>

        <section className="secao-planos">
          <h2>Escolha o plano ideal para você</h2>
          <p>Diagnósticos inteligentes com a melhor qualidade do Brasil</p>

          <div className="grade-planos">
            {planosData.map((plano) => (
              <div key={plano.id} className="cartao-plano">
                <h3>{plano.nome}</h3>

                <div className="preco-plano">
                  <span className="moeda">R$</span>
                  <span className="valor">{plano.preco}</span>
                  <span className="periodo">/mês</span>
                </div>
                
                <div className="selo-plano">
                  <strong>{plano.qtd}</strong>
                  <span>Diagnósticos</span>
                </div>

                <ul className="lista-beneficios">
                  <li> Diagnóstico</li>
                  <li> Diagnóstico</li>
                  <li> Diagnóstico</li>
                  <li> Diagnóstico</li>
                </ul>

                <button className="botao-contratar">Contratar Agora</button>
              </div>
            ))}
          </div>
        </section>

        <section className="secao-escolher">
          <h2>Por que Escolher o Dr.Algnóstico?</h2>
          <p>Mais do que conexão, oferecemos uma experiência completa com a melhor tecnologia.</p>

          <div className="grade-recursos">
            {[1, 2, 3].map((i) => (
              <div key={i} className="item-recurso">
                <div className="icone-headset"></div>
                <h4>Suporte Humanizado</h4>
                <p>
                  Equipe de especialistas disponível todos os dias para resolver qualquer problema técnico rapidamente.
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
