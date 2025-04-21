import * as Sentry from "@sentry/react";
import React from "react";

class SentryService {
  static initializationOfSentry(remoteMessage, fromBackground) {
    Sentry.init({
        dsn: "https://76b630f30d97f06f57ab81f926bfcee1@o4507708666413056.ingest.us.sentry.io/4507708680568832",
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
            // Sentry.metrics.metricsAggregatorIntegration(),
            Sentry.reactRouterV6BrowserTracingIntegration({
              useEffect:React.useEffect
            })
            
        ],
        tracesSampleRate: 1.0,
        tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    });
  }
}

export default SentryService;
