# Novo site do LabTam/UFRN — versão de apresentação

Versão estática, responsiva e pronta para GitHub Pages do novo site do Laboratório de Tecnologia Ambiental (LabTam/UFRN).

## O que está incluído

- página inicial responsiva;
- páginas de Sobre, Pesquisa, Infraestrutura, Equipe, Notícias, Publicações, Editais, Mídias, Auditório, Parceiros e Contato;
- busca global;
- filtros de equipamentos, publicações, editais e equipe;
- página de equipe com busca, filtros e perfis interativos;
- fotos institucionais e retratos da equipe;
- identidade visual baseada nas cores do LabTam/UFRN;
- menu adaptado para celular;
- página 404;
- arquivo `.nojekyll` para GitHub Pages.

## Integração com mídias e redes sociais

A página `midias.html` reúne:

- YouTube oficial: `https://www.youtube.com/@ufrn.labtam`;
- Instagram oficial: `https://www.instagram.com/labtam.ufrn/`;
- LinkedIn oficial: `https://www.linkedin.com/company/labtam-ufrn`;
- vídeo institucional do LabTam incorporado pelo YouTube;
- seleção de matérias do Portal da UFRN relacionadas ao LabTam;
- conteúdos assinados ou creditados a Evandro Ferreira – LabTam/UFRN quando essa informação está disponível no portal institucional.

A página inicial também possui uma seção **LabTam conectado**, com vídeo, atalhos para as redes e destaques publicados no Portal da UFRN.

O site não usa chaves de API nem widgets pesados de Instagram/LinkedIn. Isso deixa o projeto mais simples para GitHub Pages, reduz dependências externas e evita expor credenciais. O vídeo é incorporado pelo domínio de privacidade aprimorada do YouTube (`youtube-nocookie.com`).

As matérias do próprio site também possuem atalhos de compartilhamento para LinkedIn, WhatsApp e cópia de link.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. No GitHub, abra `Settings` > `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/(root)`.
6. Clique em `Save`.

O GitHub exibirá o endereço público quando a publicação terminar.

## Observação sobre formulários

GitHub Pages hospeda apenas conteúdo estático. Por isso, os formulários de contato e reserva do auditório preparam uma mensagem no aplicativo de e-mail do usuário. Em uma implantação oficial com PHP/backend, eles podem ser conectados ao sistema real de envio e banco de dados.

## Estrutura principal

- `index.html` — página inicial
- `midias.html` — YouTube, redes sociais e LabTam no Portal da UFRN
- `equipe.html` — diretório interativo da equipe
- `assets/css/styles.css` — identidade visual e responsividade
- `assets/js/app.js` — componentes, busca, filtros, menu e interações
- `assets/js/data.js` — conteúdo estruturado
- `assets/js/publications.js` — publicações
- `assets/images/` — imagens e marca

## Equipe

A página `equipe.html` inclui:

- hero próprio com fotografia coletiva;
- destaque visual para a coordenação;
- diretório completo e pesquisável da equipe;
- filtros por vínculo/categoria;
- cartões com fotografias disponíveis;
- perfil em modal ao selecionar uma pessoa;
- layout responsivo específico para celular.
