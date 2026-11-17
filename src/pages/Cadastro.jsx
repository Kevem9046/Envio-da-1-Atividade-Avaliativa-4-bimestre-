import { useState } from "react";

const formInicial = {
  nome: "",
  email: "",
  curso: "",
  senha: "",
  confirmar: "",
};

export default function Cadastro() {
  const [form, setForm] = useState(formInicial);
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState("");

  function alterar(evento) {
    const { name, value } = evento.target;
    setForm((anterior) => ({ ...anterior, [name]: value }));
    setErros((anterior) => ({ ...anterior, [name]: "" }));
    setSucesso("");
  }

  function validar() {
    const novosErros = {};

    if (form.nome.trim().length < 3) {
      novosErros.nome = "Informe pelo menos 3 caracteres.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      novosErros.email = "Digite um e-mail válido.";
    }

    if (!form.curso) {
      novosErros.curso = "Escolha um curso de interesse.";
    }

    if (form.senha.length < 6) {
      novosErros.senha = "Use pelo menos 6 caracteres.";
    }

    if (!form.confirmar || form.confirmar !== form.senha) {
      novosErros.confirmar = "As senhas devem ser iguais.";
    }

    return novosErros;
  }

  function enviar(evento) {
    evento.preventDefault();
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      const nome = form.nome.trim();
      const curso = form.curso;
      setSucesso(`Tudo pronto, ${nome}! Seu interesse em ${curso} foi registrado. Esta é uma confirmação simulada.`);
      setForm(formInicial);
    }
  }

  return (
    <section className="registration-layout">
      <div className="registration-intro">
        <span className="eyebrow"><span className="eyebrow-dot" /> PRIMEIRO PASSO</span>
        <h1>Seu próximo<br />capítulo começa <span>aqui.</span></h1>
        <p>Conte um pouco sobre você e escolha o curso que combina com seus planos.</p>
        <div className="intro-aside">
          <span className="aside-icon" aria-hidden="true">↗</span>
          <p>Aprender algo novo é investir em todas as possibilidades do seu futuro.</p>
        </div>
      </div>

      <div className="form-card">
        <div className="form-heading">
          <span className="form-step">01 <span>/ 01</span></span>
          <h2>Crie seu cadastro</h2>
          <p>Preencha os campos para começar.</p>
        </div>

        <form onSubmit={enviar} noValidate>
          <div className="field">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              name="nome"
              autoComplete="name"
              placeholder="Ex.: Ana Silva"
              value={form.nome}
              onChange={alterar}
              aria-invalid={Boolean(erros.nome)}
              aria-describedby={erros.nome ? "erro-nome" : undefined}
            />
            {erros.nome && <small id="erro-nome" className="error-message">{erros.nome}</small>}
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              value={form.email}
              onChange={alterar}
              aria-invalid={Boolean(erros.email)}
              aria-describedby={erros.email ? "erro-email" : undefined}
            />
            {erros.email && <small id="erro-email" className="error-message">{erros.email}</small>}
          </div>

          <div className="field">
            <label htmlFor="curso">Curso de interesse</label>
            <select
              id="curso"
              name="curso"
              value={form.curso}
              onChange={alterar}
              aria-invalid={Boolean(erros.curso)}
              aria-describedby={erros.curso ? "erro-curso" : undefined}
            >
              <option value="">Selecione uma opção</option>
              <option value="Desenvolvimento Web">Desenvolvimento Web</option>
              <option value="Design Digital">Design Digital</option>
              <option value="Marketing Digital">Marketing Digital</option>
            </select>
            {erros.curso && <small id="erro-curso" className="error-message">{erros.curso}</small>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                name="senha"
                type="password"
                autoComplete="new-password"
                placeholder="Mínimo de 6 caracteres"
                value={form.senha}
                onChange={alterar}
                aria-invalid={Boolean(erros.senha)}
                aria-describedby={erros.senha ? "erro-senha" : undefined}
              />
              {erros.senha && <small id="erro-senha" className="error-message">{erros.senha}</small>}
            </div>

            <div className="field">
              <label htmlFor="confirmar">Confirmar senha</label>
              <input
                id="confirmar"
                name="confirmar"
                type="password"
                autoComplete="new-password"
                placeholder="Repita sua senha"
                value={form.confirmar}
                onChange={alterar}
                aria-invalid={Boolean(erros.confirmar)}
                aria-describedby={erros.confirmar ? "erro-confirmar" : undefined}
              />
              {erros.confirmar && <small id="erro-confirmar" className="error-message">{erros.confirmar}</small>}
            </div>
          </div>

          <button className="button button-submit" type="submit">
            Criar meu cadastro <span aria-hidden="true">→</span>
          </button>
          <p className="form-privacy">Cadastro demonstrativo. Seus dados não são enviados nem armazenados.</p>
        </form>

        {sucesso && <p className="success-message" role="status">{sucesso}</p>}
      </div>
    </section>
  );
}
