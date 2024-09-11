document.addEventListener('DOMContentLoaded', function () {
    const hadithElement = document.getElementById('hadith');

    function fetchHadith() {
        fetch('https://marine-diane-daily-hadith-c60e1c0d.koyeb.app/api/today-hadith')
            .then(response => response.json())
            .then(data => {
                chrome.storage.local.get(
                    {preferredHadithLang: 'arabic'},
                    (item) => {
                        if (item.preferredHadithLang === 'english') {
                            hadithElement.textContent = data.hadithEnglish;
                            hadithElement.style.direction = "ltr";
                        } else {
                            hadithElement.textContent = data.hadithArabic;
                            hadithElement.style.direction = "rtl";
                        }
                    }
                );
            })
            .catch(error => {
                hadithElement.textContent = 'Failed to load Hadith.';
                console.error('Error fetching Hadith:', error);
            });
    }

    // Fetch Hadith on page load
    fetchHadith();
});

document.querySelector('#go-to-options').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});
