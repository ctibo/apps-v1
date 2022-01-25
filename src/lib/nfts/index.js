import Errors from '../Errors';
import Init from './Init';
import Read from './Read';
import Subscribe from './Subscribe';
import { aggregate } from '../../helpers/classes';


class NFTs extends aggregate(
  Errors,
  Read,
  Subscribe,
  Init,
) {}

export default new NFTs();