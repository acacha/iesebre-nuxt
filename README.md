# iesebre-nuxt

https://github.com/pktharindu/nuxt-laravel-passport-example

# Proves Auth-module amb laravel Passport amb Proxy (Janitor package)

- Instal·lar mòdul auth segons: https://auth.nuxtjs.org/guide/setup.html

# DOTENV

TODO: copait del projecte: 

- https://github.com/pktharindu/nuxt-laravel-passport-example

# NOW

S'ha instal·lat cli de now:   

```
npm i -g now
now login
```  

Observeu el fitxer now.json del projecte. Per evitar un error també cal posar a package.json:

```
  ...
  ,
  "engines": {
    "node": "10.x"
  }
``` 

Pujar a explotació:

``` 
now --prod
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
