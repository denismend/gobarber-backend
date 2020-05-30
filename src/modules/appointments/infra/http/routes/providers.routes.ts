import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityControlller = new ProviderMonthAvailabilityController();
const providerDatAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.create);
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityControlller.create,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDatAvailabilityController.create,
);

export default providersRouter;
