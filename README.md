# Planejador de Viagens com REACT.JS

# Sobre o projeto
Este sistema foi criado para colocar em prática todos conhecimentos adquiridos no Curso de React.js oferecido pelo Evento NLW da Rocketseat.

Com foco no aprendizado em Front-end , o objetivo do projeto foi criar um interfaces de um sistema de planejador de viagens usando tecnologias como React e seus conceitos ( Estado, Propriedades, e Componentes) , tipagem Typescript, tooling com Vite, Interface Responsiva com TailwindCSS, consumo de API Node.js, Picker de calendário.
# Layout do Projeto 
![Tela de Local e Data]()![Captura de tela_2-8-2024_15917_www figma com](https://github.com/user-attachments/assets/24684306-8d4d-43ae-afdb-6bfe44ba6b86)


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
