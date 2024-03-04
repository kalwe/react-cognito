# React Cognito

Este projeto integra o AWS Cognito, usa o component de autentição e cadastro de usuário fornecido pela AWS Amplify.

Doc oficial da Aws Amazon:

- [Authenticate React application users by using Amazon Cognito and AWS Amplify](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/authenticate-react-application-users-by-using-amazon-cognito-and-aws-amplify.html)
- [Configurando Amplify com Cognito](https://docs.amplify.aws/javascript/start/getting-started/installation/) Caso nescessario configure via cli [amplify-cli](https://docs.amplify.aws/javascript/prev/build-a-backend/auth/set-up-auth/) para gerar os arquivos 'amplificonfiguration.json' e/ou 'aws-exports.js'

## Amplify CLI config

Depois de instalar via `$ npm install -g @aws-amplify/cli`

```sh
$ amplify init
$ amplify add auth
```

####Atenção:

- A config inicial ja foi realizada no projeto, os passos acima devem ser feitos apenas para novos projetos ou integração.
- ==Segue em anexo no email==, os arquivos **'amplificonfiguration.json'** e **'aws-exports.js'**, copie e cole no projeto

## Iniciando projeto em localhost

```sh
$ npm install
$ npm run dev
```

#### Verions

- [Vite](https://vitejs.dev/guide/) - 5.1.4
- NodeJS - 20.10
- ReactJS - 18.2
- ReactRouter - 6.22
- aws-amplify - 6.0.18
- aws-amplify/ui-react 6.1.5
