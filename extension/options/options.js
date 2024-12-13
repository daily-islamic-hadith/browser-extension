// Saves options to chrome.storage
const saveOptions = () => {
  const selected_hadith_lang = document.getElementById('hadithLang').value;
  const selected_hadith_mode = document.getElementById('hadithFetchMode').value;
  const selected_theme = document.getElementById('theme').value;
  chrome.storage.local.set(
    {
      preferredHadithLang: selected_hadith_lang,
      preferredHadithFetchMode: selected_hadith_mode,
      preferredTheme: selected_theme,
    },
    () => {
      const applyDarkMode = selected_theme === 'dark'
        || (selected_theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      applyTheme(applyDarkMode);
      const status = document.getElementById('status');
      status.textContent = 'Your Preference saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    }
  );
};

const onDomContentLoaded = () => {
  chrome.storage.local.get(
    { preferredHadithLang: 'ar', preferredHadithFetchMode: 'daily', preferredTheme: 'auto' },
    (item) => {
      document.getElementById('hadithLang').value = item.preferredHadithLang;
      document.getElementById('hadithFetchMode').value = item.preferredHadithFetchMode;
      document.getElementById('theme').value = item.preferredTheme;
      const applyDarkMode = item.preferredTheme === 'dark'
        || (item.preferredTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      applyTheme(applyDarkMode);
    }
  );
};

function applyTheme(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded);
document.getElementById('save').addEventListener('click', saveOptions);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => applyTheme(e.matches));
