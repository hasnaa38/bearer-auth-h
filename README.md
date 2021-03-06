# bearer-auth-h

## Description

This API is able to allow a user to create an account as well as to handling basic authentication (user provides a username + password). When a “good” login happens, the user is considered to be “authenticated” and  a JWT token is generated and signed for them.

## Links

* Heroku: https://bearer-auth-h.herokuapp.com/
* PR: https://github.com/hasnaa38/bearer-auth-h/pull/1

## Endpoint Results

* post `/signup`:

![endpoint1](./images/signup.PNG)

* post `/signin`:

![endpoint2](./images/signin.PNG)

* get `/users`:

![endpoint3](./images/users.PNG)

* get `/secret`:

![endpoint4](./images/secret.PNG)

## Passed Tests

![tests](./images/tests.PNG)

## UML

![uml](./images/lab07.png)
