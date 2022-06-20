# commondev-auth

## Authorization system via commondev api for everyone

### Installation

```sh
npm i commondev-auth
```

### Usage

```sh
const { v1 } = require('commondev-auth');

const registerRequest = await v1.register({
  phone: {
    phone: '9530789652',
    countryCode: '+7'
  },
  firstname: 'firstname',
  lastname: 'lastname'
});

const loginRequest = await v1.login({
  phone: {
    phone: '9530789652',
    countryCode: '+7'
  }
});

const completeRequest = await v1.complete({
  phone: {
    phone: '9530789652',
    countryCode: '+7'
  },
  code: '4232'
});

const getUserDataRequest = await v1.getUserByToken({
  token: 'TOKEN',
});
```

### All methods returns unified object

{
status: Boolean,
err: Object,
data: Object
}
