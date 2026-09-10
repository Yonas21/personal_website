export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'yonas-alem-theme';
export const THEME_COLOR_DARK = '#07080b';
export const THEME_COLOR_LIGHT = '#f4efe4';

export const themeBootScript = `(function(){try{var stored=localStorage.getItem('${THEME_STORAGE_KEY}')||localStorage.getItem('theme');var theme=stored==='light'||stored==='dark'?stored:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var root=document.documentElement;root.classList.toggle('dark',theme==='dark');root.style.colorScheme=theme;var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',theme==='dark'?'${THEME_COLOR_DARK}':'${THEME_COLOR_LIGHT}');}catch(e){}})();`;

export const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const readStoredTheme = (): Theme | null => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY) ?? localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' ? stored : null;
};

export const resolveTheme = (): Theme => readStoredTheme() ?? getSystemTheme();

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? THEME_COLOR_DARK : THEME_COLOR_LIGHT);
};
