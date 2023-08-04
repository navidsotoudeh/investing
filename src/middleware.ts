import { stackMiddlewares } from './middlewares/stackMiddlewares';
import { withAuthentication } from './middlewares/withAuthentication';
import { withLogging } from './middlewares/withLogging';

export default stackMiddlewares([withAuthentication, withLogging]);
