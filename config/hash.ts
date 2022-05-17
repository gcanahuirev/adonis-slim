/**
 * Config source: https://git.io/JfefW
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env';
import { HashConfig } from '@ioc:Adonis/Core/Hash';

const hashConfig: HashConfig = {
  default: Env.get('HASH_DRIVER', 'argon'),
  list: {
    argon: {
      driver: 'argon2',
      variant: 'id',
      iterations: 3,
      memory: 4096,
      parallelism: 1,
      saltSize: 16,
    },
    bcrypt: {
      driver: 'bcrypt',
      rounds: 10,
    },
  },
};

export default hashConfig;
