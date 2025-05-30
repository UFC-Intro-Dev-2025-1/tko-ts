import { execSync } from 'child_process';
import * as fs from 'fs'; // Importa o módulo 'fs'
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

let passed = 0;
let total = 0;
let diff_showed = false;

console.log(
    '\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

function save_file(path: string, content: string) {
    try {
        fs.writeFileSync(path, content);
    } catch (error) {
        console.error(`Erro ao escrever no arquivo (Síncrono): ${error}`);
    }
}
function remove_file(path: string) {
    if (fs.existsSync(path)) {
        // Verifica se o arquivo existe antes de tentar apagar
        fs.unlinkSync(path);
    }
}
function show_diff(content_a: string, content_b: string) {
    if (diff_showed) {
        return;
    }
    diff_showed = true;
    let file_a = '.debug_a.txt';
    let file_b = '.debug_b.txt';
    save_file(file_a, content_a);
    save_file(file_b, content_b);
    console.log(
        execSync(`tko -w 140 diff -d --path ${file_a} ${file_b}`).toString()
    );
    remove_file(file_a);
    remove_file(file_b);
}


// Teste 5: Media

function run_tko(folder: string) {
    try {
        total += 1;
        // testa primeiro se roda
        const output = execSync(
            `tko run -d ${folder}/cases.tio ${folder}/draft.ts`
        ).toString();
        let lines = output.split('\n');
        if (output.split('\n').length === 3) {
            passed++;
            console.log(`✅ ${folder}: Saída em texto do código é a esperada.`);
            console.log(
                lines
                    .slice(1, -1)
                    .map((x) => '   ' + x)
                    .join('\n')
            );
        } else {
            console.log(
                `❌ ${folder}: Saída em texto do código não é a esperada.`
            );
            if (!diff_showed) {
                diff_showed = true;
                console.log(
                    lines
                        .slice(1, -1)
                        .map((x) => '   ' + x)
                        .join('\n')
                );
            }
        }
    } catch (e) {
        console.log(`❌ ${folder}: Erro: ` + e.message);
    }
}

// Lê todas as entradas da pasta raiz src
const root = 'src';
const entries = readdirSync(root);

// Filtra apenas subpastas e executa a função
entries.forEach(entry => {
  const fullPath = join(root, entry);
  if (statSync(fullPath).isDirectory()) {
    run_tko(fullPath);
  }
});

// Resultado final
console.log(
    `\n\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        '\n\n---------------------------\n\n'
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);
