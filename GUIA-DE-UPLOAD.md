# Como subir este site no GitHub Pages

Este pacote está organizado em pastas. **Não mova os arquivos de dentro de `assets/` para a raiz.**

## Estrutura que deve aparecer no repositório

```text
newlabtam/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   ├── data.js
│   │   └── publications.js
│   └── images/
│       ├── logo-labtam.png
│       ├── equipe.jpg
│       └── team/
├── index.html
├── equipe.html
├── midias.html
├── noticias.html
├── equipamentos.html
├── pesquisa.html
├── publicacoes.html
├── editais.html
├── auditorio.html
├── contato.html
├── sobre.html
├── parceiros.html
├── materia.html
├── busca.html
├── 404.html
└── .nojekyll
```

## Upload pela interface do GitHub

1. Extraia o ZIP no computador.
2. Abra a pasta extraída.
3. No repositório, use **Add file → Upload files**.
4. Arraste **todos os arquivos HTML e a pasta `assets`** para a área de upload.
5. Antes do commit, confirme que aparecem arquivos dentro de `assets/css`, `assets/js` e `assets/images`.
6. Faça o commit.
7. Em **Settings → Pages**, use **Deploy from a branch**, branch `main`, pasta `/(root)`.
8. Aguarde a publicação e faça `Ctrl + F5` no site.

Se o site aparecer como HTML cru, o diagnóstico é simples: `assets/css/styles.css` não foi publicado no repositório.
