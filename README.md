# Bruno H. Colussi — Portfólio Pessoal

> Site pessoal e portfólio estático, acessível (WCAG AA), bilíngue (Português/Inglês) com suporte a temas claro/escuro.

- **URL de Produção:** [https://brunohcolussi.github.io/](https://brunohcolussi.github.io/)
- **Versão em Inglês:** [https://brunohcolussi.github.io/en/](https://brunohcolussi.github.io/en/)

---

## 🚀 Tecnologias

- **HTML5 Semântico** com foco em acessibilidade e leitura por tecnologias assistivas
- **CSS3 Moderno** com Tokens de Design, CSS Grid, Flexbox e `@media (prefers-reduced-motion)`
- **JavaScript Vanilla** (Zero dependências e frameworks)
- **GitHub Pages** para hospedagem e entrega estática de alta performance

---

## 📁 Estrutura de Diretórios

```
.
├── index.html             # Página principal em Português
├── en/
│   └── index.html         # Página completa em Inglês
├── 404.html               # Página de erro 404
├── assets/
│   ├── css/style.css      # Design System e componentes
│   ├── js/main.js         # Interatividade (tema, menu mobile, cópia de e-mail)
│   └── img/
│       ├── projects/      # Imagens dos projetos (WebP 16:9)
│       └── social/        # Open Graph card (1200x630)
├── curriculo.pdf          # Currículo do autor
├── robots.txt             # Diretivas de rastreamento para buscadores
├── sitemap.xml            # Mapa do site com links recíprocos hreflang
└── .nojekyll              # Desativa processamento Jekyll no GitHub Pages
```

---

## 💻 Executando Localmente

Para visualizar o site localmente, basta utilizar qualquer servidor HTTP estático na raiz do repositório:

```bash
# Com Python 3:
python -m http.server 8000

# Ou com Node.js:
npx serve
```

Acesse `http://localhost:8000/` no navegador.
