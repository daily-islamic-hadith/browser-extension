const ALARM_TIME_HOUR_OF_DAY = 12; //12PM
const ALARM_NAME = "dailyUnreadAlarm"
const BADGE_COLOR = '#016efa';

function setDailyUnreadAlarm() {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(ALARM_TIME_HOUR_OF_DAY, 0, 0, 0);
    if (now > targetTime) {
        targetTime.setDate(now.getDate() + 1);
    }
    const delay = targetTime.getTime() - now.getTime();
    chrome.alarms.create(ALARM_NAME, {
        when: Date.now() + delay,
        periodInMinutes: 1440
    });
}

function checkInactivity() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0)
    chrome.storage.local.get({lastInteraction: new Date(currentDate.getDate() - 1).toISOString()}, function (result) {
        const lastInteraction = new Date(result.lastInteraction);
        if (lastInteraction < currentDate) {
            chrome.action.setBadgeText({text: '!'});
            chrome.action.setBadgeBackgroundColor({color: BADGE_COLOR});
        } else {
            chrome.action.setBadgeText({text: ''});
        }
    });
}

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === ALARM_NAME) {
        checkInactivity();
    }
});

setDailyUnreadAlarm();
