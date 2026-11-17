import { NavLink } from "react-router";

const destaques = [
  { numero: "01", titulo: "Aprenda no seu ritmo", texto: "Conteúdo pensado para acompanhar sua jornada." },
  { numero: "02", titulo: "Desenvolva habilidades", texto: "Conhecimentos que fazem diferença na prática." },
  { numero: "03", titulo: "Dê o próximo passo", texto: "Comece hoje a construir novas possibilidades." },
];

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> SEU FUTURO COMEÇA AQUI</span>
          <h1>Conhecimento<br />que <span>abre caminhos.</span></h1>
          <p>
            Descubra cursos para desenvolver novas habilidades e transformar
            seus próximos passos em grandes conquistas.
          </p>
          <NavLink className="button button-primary" to="/cadastro">
            Encontrar meu curso <span aria-hidden="true">→</span>
          </NavLink>
          <div className="hero-note">
            <span className="note-line" />
            <span>Uma nova jornada começa com uma escolha.</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <span className="art-spark">✳</span>
            <span className="art-letter">A</span>
          </div>
          <div className="art-tag tag-top">IDEIAS EM MOVIMENTO</div>
          <div className="art-tag tag-bottom"><span /> APRENDER É CRESCER</div>
          <span className="art-star star-one">✳</span>
          <span className="art-star star-two">✦</span>
        </div>
      </section>

      <section className="highlights" aria-label="Benefícios do portal">
        {destaques.map((item) => (
          <article className="highlight-card" key={item.numero}>
            <span className="highlight-number">{item.numero}</span>
            <div>
              <h2>{item.titulo}</h2>
              <p>{item.texto}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
