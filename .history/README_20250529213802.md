# Instalação

- Para conseguir rodar tanto os testes quando síncrono, você precisa instalar o `esbuild` e o `readline-sync` e o `tsx`:
  - npm install esbuild readline-sync tsx
- Como o tko é feito em pytnon, você precisa instalar o `pipx` para instalar o tko
  - sudo apt update
  - sudo apt install pipx
  - pipx install tko
- Por questões de compatibilidade, o package.json package.json no root precisa ter o parâmetro "type": "commonjs"
- Você consegue navegar pelo repositório e baixar outras questões com `tko open .`, e o que você clicar, vai ser baixado em src, mas posso desabilitar isso
- Dentro de uma pasta, dá pra rodar só essa atividade com
  - tko run
  - tko tui
- Os testes estão rodando via `npm test`
