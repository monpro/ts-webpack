
function recordGoogleAnalytics(event: string) {
    window.googleAnalytics?.trackEvent(event);
}