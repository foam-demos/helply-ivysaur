import * as foam from '@foam-ai/node-opentelemetry';
import { FOAM_API_KEY, IS_PRODUCTION } from './config';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import type { InstrumentationBase } from '@opentelemetry/instrumentation';

foam.init({
  serviceName: 'integration-gateway',
  isProduction: IS_PRODUCTION,
  apiKey: FOAM_API_KEY,
  additionalInstrumentations: [
    new ExpressInstrumentation({}) as unknown as InstrumentationBase,
  ],
});