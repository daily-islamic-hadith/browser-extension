// Saves options to chrome.storage
const saveOptions = () => {
    const selected_hadith_lang = document.getElementById('hadithLang').value;
    chrome.storage.local.set(
        {preferredHadithLang: selected_hadith_lang},
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Your Preferrence saved.';
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
        {preferredHadithLang: 'arabic'},
        (items) => {
            document.getElementById('hadithLang').value = items.preferredHadithLang;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);