# Portal Aprender

Aplicação de demonstração criada com React e Vite para navegação entre Início e Cadastro.

## Executar localmente

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite (por padrão, `http://localhost:5173`).
Para gerar a versão de produção, execute `npm run build`.

## Publicação no GitHub Pages

O deploy é feito automaticamente pelo GitHub Actions a cada atualização da branch `main`.
Depois que a ação **Deploy to GitHub Pages** terminar, acesse
`https://kevem9046.github.io/Envio-da-1-Atividade-Avaliativa-4-bimestre-/`.

## Navegação e validação

A navegação usa `BrowserRouter`, `Routes` e `NavLink` do React Router para trocar entre Início, Cadastro e uma rota não encontrada sem recarregar a página.
O formulário é controlado com `useState`; a validação ocorre no envio e exige nome com pelo menos 3 caracteres, e-mail válido, curso escolhido e senhas iguais com 6 ou mais caracteres.
Mensagens acessíveis aparecem junto aos campos inválidos, que podem ser corrigidos sem reenviar a página; ao corrigir todos os dados, o formulário é limpo e mostra uma confirmação simulada.
Os dados permanecem somente no estado do navegador e não são enviados a uma API ou banco de dados.

## Evidências dos testes

As quatro capturas dos testes estão na pasta [`screenshots/`](./screenshots/):

1. `01-inicio.png` — página inicial.
2. `02-cadastro.png` — formulário de cadastro.
3. `03-validacao.png` — erros de validação visíveis.
4. `04-sucesso.png` — confirmação após cadastro válido.

Não use senhas pessoais: o formulário é apenas demonstrativo. A pasta `node_modules` não faz parte do projeto e é ignorada pelo Git.
