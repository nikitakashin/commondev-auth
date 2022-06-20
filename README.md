# commondev-auth
<<<<<<< HEAD

## Authorization system via commondev api for everyone

### Installation

```sh
npm i commondev-auth
```

=======
## Authorization system via commondev api for everyone


### Installation
```sh
npm i commondev-auth
```
>>>>>>> 0c03e85f8e9c62544552b9f94c9dff7018e603ec
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
<<<<<<< HEAD
status: Boolean,
err: Object,
data: Object
=======
  status: Boolean,
  err: Object,
  data: Object
>>>>>>> 0c03e85f8e9c62544552b9f94c9dff7018e603ec
}
