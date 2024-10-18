// Saves options to chrome.storage
const saveOptions = () => {
    const selected_hadith_lang = document.getElementById('hadithLang').value;
    const selected_hadith_mode = document.getElementById('hadithFetchMode').value;
    chrome.storage.local.set(
        {preferredHadithLang: selected_hadith_lang, preferredHadithFetchMode: selected_hadith_mode},
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Your Preference saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 2000);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.local.get(
        {preferredHadithLang: 'arabic', preferredHadithFetchMode: 'daily'},
        (items) => {
            document.getElementById('hadithLang').value = items.preferredHadithLang;
            document.getElementById('hadithFetchMode').value = items.preferredHadithFetchMode;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);