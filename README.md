<h1 align="center">
    API Service Hub
</h1>



---

</div>

## :card_index_dividers: API Design

![image](https://github.com/williamalonso/api-service-hub/assets/48453909/63d6a2f3-d327-4acb-8ed7-b33e122b6dd4)

## :lock: Data Modeling

<div align="start">
  <img src="/public/modelling.png" alt"schema system" title="schema system" width="600" />
</div>

### 🤔 About the System?

It's an API made on ExpressJS where you can create an account(login), and access a panel where you can register company demands.

---

## 🚀 Technologies

This project was develop with the following technologies:

- [Node.js](https://nodejs.org/en)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com)
- [Nodemon](https://nodemon.io)
- [JWT Authentication](https://jwt.io)
- [Swagger](https://swagger.io)
- [TypeScript](https://www.typescriptlang.org)

---

### ✨ About project's construction:

- You can create an account;
- You can make login;
- After logging, you can access admin panel;
- The logged user can make a CRUD about services demands;
- The admin panel routes are protected with middleware;

---

## 🙅 Facilities and uses:

The system was developed using Visual Studio Code and Node version `16.17.0`.

The Express version is `4.18.2`.

The Mongoose version is `7.5.2`.

The jwt version is `9.0.2`.

If you want, you can clone or download this repository:

```
# Clone the repository
$ git clone git@github.com:williamalonso/api-service-hub.git
```

Create a `.env` file and add the userDB, passwordDB (from MongoDB Atlas) and jwtSECRET as your credentials.

After downloading or cloning the repository, run the `npm i` command.

To run the application, give it the command `npm start` which is already configured to run Nodemon.

<h3 align="center">William Alonso</h3>
