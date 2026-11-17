import { NavLink, Route, Routes } from "react-router";
import Cadastro from "./pages/Cadastro.jsx";
import Inicio from "./pages/Inicio.jsx";

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Portal Aprender, início">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span>
            <strong>portal</strong>
            <span className="brand-light">aprender</span>
          </span>
        </NavLink>
        <nav className="main-nav" aria-label="Menu principal">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="*"
            element={
              <section className="not-found">
                <span className="eyebrow">ERRO 404</span>
                <h1>Esta página não existe.</h1>
                <p>Volte ao início e descubra seu próximo caminho.</p>
                <NavLink className="button button-primary" to="/">
                  Ir para o início
                </NavLink>
              </section>
            }
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>Portal Aprender</span>
        <span>Conhecimento abre caminhos.</span>
      </footer>
    </div>
  );
}
