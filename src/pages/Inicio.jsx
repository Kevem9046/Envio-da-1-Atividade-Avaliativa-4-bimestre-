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
          <span className="eyebrow">SEU FUTURO COMEÇA AQUI</span>
          <h1>Conhecimento que <span>abre caminhos.</span></h1>
          <p>
            Descubra cursos para desenvolver novas habilidades e transformar
            seus próximos passos em grandes conquistas.
          </p>
          <NavLink className="button button-primary" to="/cadastro">
            Encontrar meu curso
          </NavLink>
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
