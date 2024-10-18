document.addEventListener('DOMContentLoaded', function () {
    const hadithElement = document.getElementById('hadith');
    // Fetch Hadith on page load
    chrome.storage.local.get(
        {preferredHadithLang: 'arabic', preferredHadithFetchMode: 'daily'},
        (item) => {
            fetchHadith(hadithElement, item.preferredHadithLang, item.preferredHadithFetchMode);
        }
    );
});

document.querySelector('#go-to-options').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

function fetchHadith(hadithElement, hadithLang, hadithFetchMode) {
    fetch('https://dailyislamichadith.com/api/fetch-hadith?fetch-mode=' + hadithFetchMode)
        .then(response => response.json())
        .then(data => {
            if (hadithLang === 'english') {
                hadithElement.textContent = data.hadithEnglish;
                hadithElement.style.direction = "ltr";
            } else {
                hadithElement.textContent = data.hadithArabic;
                hadithElement.style.direction = "rtl";
            }
        })
        .catch(error => {
            hadithElement.textContent = 'Failed to load Hadith.';
            console.error('Error fetching Hadith:', error);
        });
}