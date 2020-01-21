
<!-- PROJECT LOGO -->

<br />

<p  align="center">

<h3  align="center">Template Jholdy</h3>

</p>



<!-- TABLE OF CONTENTS -->



## Tabela de Conteúdo



- [Tabela de Conteúdo](#tabela-de-conte%c3%bado)

- [Sobre o Projeto](#sobre-o-projeto)

- [Feito Com](#feito-com)

- [Começando](#come%c3%a7ando)

- [Pré-requisitos](#pr%c3%a9-requisitos)

- [Instalação](#instala%c3%a7%c3%a3o)

- [Passo Adicional no Android e IOS](#passo-adicional-no-android-e-ios)

- [Publicação](#publica%c3%a7%c3%a3o)

- [Contribuição](#contribui%c3%a7%c3%a3o)

- [Licença](#licen%c3%a7a)

- [Contato](#contato)



<!-- ABOUT THE PROJECT -->



## Sobre o Projeto



Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.



### Feito Com



Abaixo segue o que foi utilizado na criação deste template:



- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;

- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;

- [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;

- [React native Navigation](https://wix.github.io/react-native-navigation/#/) - O React Native Navigation fornece navegação 100% nativa da plataforma no iOS e Android para aplicativos React Native. A API JavaScript é simples e multiplataforma - basta instalá-la no seu aplicativo e dar aos usuários a sensação nativa que eles merecem;

- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;

- [apisauce](https://github.com/infinitered/apisauce) - Axios + erros padronizados + transformações de solicitação / resposta;

- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;

- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;

- [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;

- [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md) - Plugin que permite acompanhar todas as Actions que são disparadas na aplicação, mostrando toda a estrutura da Action;

- [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md) - Plugin que permite você percorrer uma saga na sua aplicação, poderá ver a saga e os efeitos que ela desencadeia ao longo do caminho;

- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;

- [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;

- [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);

- [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));

- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;

- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;

- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;

- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;

- [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;

- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;

- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;



<!-- GETTING STARTED -->



## Começando



Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.



### Pré-requisitos



Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:



[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)



### Instalação



1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:



```sh

react-native init AwesomeExample --template jholdy

```



2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.



Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.



---



#### Passo Adicional no Android e IOS



Para que funcione as rotas, icons e o redux-persist. É necessario instalar manualmente as libs conforme o react-native-navigation indica.



- [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

- [@react-native-community/async-storage](https://github.com/react-native-community/async-storage)



---



### Publicação



Para publicar um template como esse, o processo é bastante simples e rápido.



1. Crie uma conta no [site do NPM](https://www.npmjs.com/);



2. Com a conta criada execute o comando abaixo e insira suas credenciais;



```sh

npm login

```



3. Basta abrir o arquivo `package.json` e modificar as informações de acordo com o seu template, mas as informações mais importantes são duas, o `name` e o `version`, que são os únicos que tem restrições, seguem abaixo as restrições:



1. O `name` sempre deve começar com o prefixo `react-native-template-` seguido do nome do seu template;

2. O template deve ser publicado em uma conta pessoal, pois quando publicado em uma **Organization** é acrescentado o prefixo `@<nome_da_organization>` no nome do pacote;

3. O `name` deve ser único, não podendo ser igual ao de um template já publicado;

4. A `version` deve ser atualizada a cada publicação, se o template está na versão **0.0.1** e é preciso publicar uma atualização no mesmo, a `version` deve ser diferente e superior a versão atual, por exemplo, **0.0.2**;



4. Após configurar corretamente o `package.json` basta executar no terminal/prompt o comando `npm publish`;



5. Com a publicação finalizada o template deve ficar disponível através do link `https://www.npmjs.com/package/react-native-template-<nome_do_template>`.



<!-- CONTRIBUTING -->



## Contribuição



Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.



1. Faça um Fork do projeto

2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)

3. Adicione suas mudanças (`git add .`)

4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)

5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)

6. Abra um Pull Request



<!-- LICENSE -->



## Licença



Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.



<!-- CONTACT -->



## Contato



Jholdy Damasceno - [Github](https://github.com/jholdy) - **jholdydamasceno@gmail.com**
