# commondev-auth

## Authorization system via commondev api for everyone

### Installation

```sh
npm i commondev-auth
```

### Usage

v1 depricated

```sh
const { v2 } = require('commondev-auth');
// or
import { v2 } from 'commondev-auth';

const registerRequest = await v2.register({
  phone: {
    phone: '9530789652',
    countryCode: '7'
  },
  firstname: 'firstname',
  lastname: 'lastname'
});

const loginRequest = await v2.login({
  phone: {
    phone: '9530789652',
    countryCode: '7'
  }
});

const completeRequest = await v2.complete({
  phone: {
    phone: '9530789652',
    countryCode: '7'
  },
  code: '4232'
});

const getUserDataRequest = await v2.getUserByToken({
  token: 'TOKEN',
});
```

### All methods returns unified object

{
status: Boolean,
err: Object,
data: Object
}
