(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. TEMA ESCURO / CLARO
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-pressed', 'true');
        themeToggleBtn.setAttribute('title', themeToggleBtn.getAttribute('data-title-dark') || 'Alternar para tema claro');
      }
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#0B1220');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-pressed', 'false');
        themeToggleBtn.setAttribute('title', themeToggleBtn.getAttribute('data-title-light') || 'Alternar para tema escuro');
      }
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#FFFFFF');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  // -------------------------------------------------------------------------
  // 2. MENU MOBILE ACESSÍVEL
  // -------------------------------------------------------------------------
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  function closeMobileMenu() {
    if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      mobileDrawer.classList.remove('is-open');
      if (menuToggleBtn) {
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        menuToggleBtn.focus();
      }
    }
  }

  if (menuToggleBtn && mobileDrawer) {
    menuToggleBtn.addEventListener('click', function () {
      const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
      menuToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileDrawer.classList.toggle('is-open', !isExpanded);
    });

    // Fechar com Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Fechar ao clicar em links internos
    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });
  }

  // -------------------------------------------------------------------------
  // 3. COPIAR E-MAIL COM FEEDBACK E ARIA-LIVE
  // -------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const copyAlert = document.getElementById('copy-live-alert');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      const email = 'brunohcolussi2001@gmail.com';
      const originalText = copyEmailBtn.textContent;
      const feedbackText = copyEmailBtn.getAttribute('data-feedback') || 'E-mail copiado!';

      navigator.clipboard.writeText(email).then(function () {
        copyEmailBtn.textContent = feedbackText;
        if (copyAlert) copyAlert.textContent = feedbackText;

        setTimeout(function () {
          copyEmailBtn.textContent = originalText;
          if (copyAlert) copyAlert.textContent = '';
        }, 3000);
      }).catch(function () {
        window.location.href = 'mailto:' + email;
      });
    });
  }
})();
