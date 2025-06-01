# Selecionar questões

Você consegue navegar pela lista de questões com o comando abaixo no terminal:

```bash
tko open .
```

Se você clicar na questão que selecionou o código do problema será baixado na pasta `src`.

# Fazendo as questões

Procure na pasta `src` a pasta da questão baixada. Dentro da pasta da questão você tem o arquivo `draft.ts`, onde você irá adicionar sua solução.

## Dicas

-   **Não altere a primeira linha** dos arquivos `draft.ts`. O input é uma função que tem como saída uma string. Ele simula uma entrada. Veja no exemplo abaixo:

```typescript
let textoInicial = input();
console.log(textoInicial);
```

-   Para receber vários inputs (em várias linhas) repita o `input()`:

```typescript
const a = input(); //1ª linha
const b = input(); //2ª linha
const c = input(); //3ª linha
```

-   Para navegar nas pastas use no terminal:

```bash
# para entrar numa pasta
cd nomedapasta

# para sair de uma pasta e ir para o nível acima
cd ..
```

# Validando as questões

No terminal, use os comandos abaixo para rodar e validar uma questão:

```bash
tko run
tko tui
```

Você também pode validar se as questões que baixou foram resolvidas com:

```bash
npm test
```

Caso tenha baixado alguma questão e desistiu dela, delete a pasta referente à questão no `src`.

# Enviar a atividade

Para enviar vamos adicionar, commitar e fazer o push. Precisamos ter atenção em alguns pontos. Siga as instruções abaixo:

1. `git add . ` - Use este comando na pasta raiz do projeto, caso contrário, você só irá adicionar as alterações daquela pasta
   Para validar, use o comando: `git status`

2. `git commit -m "feat: enviando questões"` - Crie o bloco de alterações com a solução das questões. Para validar se deu certo, use os comandos: `git status` e `git log` (se ficar preso no git log, use o `q` para sair). Sugestão: faça um commit por questão.

3. `git push` - Envie os commits para o repositório online. Caso tenha algum problema no envio, talvez o repositório online esteja algum commit à frente (o bot do Classroom faz alguns commits). Neste caso tente o comando `git pull --rebase` para trazer essas alterações para seu código local. Para validar se deu certo, use os comandos: `git status` e `git log`. E sempre veja se seu código subiu no repositório do GitHub.

# Veja as questões

[Veja a lista e descrição das questões](./Readme.md)
