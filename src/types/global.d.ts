declare global {
    interface Window {
        googleAnalytics?: {
            trackEvent(event: string): void;
        };
        paypalCheckout?: {
            init(): void;
        };
    }
}

export {}