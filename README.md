# commondev-auth

## Authorization system via commondev api for everyone

### Installation

```sh
npm i commondev-auth
```

### Usage

```sh
const { CommondevAuth } = require('commondev-auth');
// or
import { CommondevAuth } from 'commondev-auth';
```

#### CommondevAuth.register

This method takes as input email.
Sends 4-digit code to the specified email.
This code expires in 5 minutes, to resend code use CommondevAuth.resendCode.

```sh
const registerRequest = await CommondevAuth.register({
  email: 'example@gmail.com'
});
```

This method returns next step of authorization. For example:

```sh
{
  error: null,
  data: { next: "complete" },
}
```

#### CommondevAuth.complete

This method takes as input email and code.

```sh
const completeRequest = await CommondevAuth.complete({
  email: 'example@gmail.com'
  code: 4232
});
```

This method returns authorization token. For example:

```sh
{
  error: null,
  data: { token: "EXAMPLE_TOKEN" },
}
```

#### CommondevAuth.login

This method takes as input email.
Sends 4-digit code to the specified email.
This code expires in 5 minutes, to resend code use CommondevAuth.resendCode.

```sh
const loginRequest = await CommondevAuth.login({
  email: 'example@gmail.com'
});
```

This method returns next step of authorization. For example:

```sh
{
  error: null,
  data: { next: "complete" },
}
```

#### CommondevAuth.getUserByToken

This method takes as input jwt token that you can get via CommondevAuth.complete.

```sh
const getUserDataRequest = await CommondevAuth.getUserByToken({
  token: 'TOKEN',
});
```

This method returns user data. For example:

```sh
{
    "error": null,
    "data": {
        "user": {
            "created": "2023-06-18T14:46:55.307Z",
            "email": "example@gmail.com",
            "token": "EXAMPLE_TOKEN"
        }
    }
}
```

#### CommondevAuth.resendCode

This method takes as input email.
Sends 4-digit code to the specified email.
This code expires in 5 minutes, to resend code use CommondevAuth.resendCode.

```sh
const resendCodeRequest = await CommondevAuth.resendCode({
  email: 'example@gmail.com'
});
```

This method returns next step of authorization. For example:

```sh
{
  error: null,
  data: { next: "complete" },
}
```
