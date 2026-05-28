import * as foam from '@foam-ai/node-opentelemetry';
import { FOAM_API_KEY, IS_PRODUCTION } from './config';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'platform-api',
  isProduction: IS_PRODUCTION,
  apiKey: FOAM_API_KEY,
  additionalInstrumentations: [
    new HttpInstrumentation({}) as unknown as InstrumentationBase,
  ],
});