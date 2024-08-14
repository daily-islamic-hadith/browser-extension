document.addEventListener('DOMContentLoaded', function () {
    const hadithElement = document.getElementById('hadith');

    function fetchHadith() {
        fetch('https://marine-diane-daily-hadith-c60e1c0d.koyeb.app/today-hadith')
            .then(response => response.json())
            .then(data => {
                hadithElement.textContent = data.hadithArabic;
            })
            .catch(error => {
                hadithElement.textContent = 'Failed to load Hadith.';
                console.error('Error fetching Hadith:', error);
            });
    }

    // Fetch Hadith on page load
    fetchHadith();
});
