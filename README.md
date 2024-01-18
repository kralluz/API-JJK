<h1 align="center" style="font-weight: bold;">API do Anime Jujutsu Kaisen 💻</h1> 

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="start" >
    <b>Esta é uma API dedicada ao anime JUJUTSU KAISEN. Ela fornece uma ampla gama de informações relacionadas ao anime, incluindo detalhes sobre personagens, habilidades dos personagens e seus domínios. Além disso, a API foi aprimorada com recursos de paginação para os três conjuntos de dados disponíveis.</b>
</p>


<h2 id="technologies">💻 Technologies</h2>

- NodeJS
- TypeScript
- Zod
- Express
- Prisma

<h2 id="started">🚀 Getting started</h2>

1. Clone o repositório
2. Navegue até o diretório do projeto
3. Instale as dependências
4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias: 

  ``` 
  DATABASE_URL="file: Caminho do arquivo do banco de dados"
  ```

5. Execute as migrações do Prisma
6. Inicie o servidor

<h3>Prerequisites</h3>

- [NodeJS](https://nodejs.org/en)

<h3>Cloning</h3>

```bash
git clone https://github.com/J0aoCunha/Ts-Node-API-JJK.git
```

<h3>Starting</h3>

Como iniciar seu projeto

```bash
cd project-name
npm install
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /characters</kbd>     | retorna as informacoes completas dos personagens [response details](#get-chars-detail)
| <kbd>POST /character</kbd>     | cria um personagem fazendo a ligacao do personagem com os poderes [request details](#post-chars-detail)
| <kbd>GET /powers</kbd>     | retorna todos os poderes e o nome do personagem ligado ao poder [response details](#get-powers-detail)
| <kbd>POST /power</kbd>     | cria um poder [request details](#post-powers-detail)
| <kbd>GET /domainExpansions</kbd>     | retorna todas as expansoes de dominio e o personagem ligado a expansao [response details](#get-Domains-detail)
| <kbd>POST /domainExpansion</kbd>     | cria uma expansao de dominio  [request details](#post-Domains-detail)

<h3 id="get-chars-detail">GET /characters</h3>

**RESPONSE**

```json
{
  "id": "b39588ab-add1-434b-b8d8-af3e8fbe9e68",
  "name": "Satoru Gojo",
  "age": 26,
  "bio":"Satoru Gojo é um personagem fictício da série de anime e mangá Jujutsu Kaisen criado por Gege Akutami. Ele fez sua primeira aparição no prequel Jujutsu Kaisen 0 como o mestre de Yuta Okkotsu, um adolescente amaldiçoado.",
  "image":"https://defeatzone.com/wp-content/uploads/2023/09/Jujutsu-Kaisen-5-Curiosidades-que-voce-Precisa-saber-sobre-Satoru-Gojo-1600x960.webp",
  "powers": [
    {
    "name": "Infinito",
    "description":"Esta habilidade oferece uma defesa impenetrável, permitindo que Gojo interaja conforme necessário. O Mugen controla o espaço ao redor de Gojo e pode ser usada ofensivamente ao alterar a energia amaldiçoada ao seu redor.",
    }
  ],
  "domainExpansions":[
    {
    "name": "Vazio Infinito",
    "description":"A Expansão de Domínio de Satoru Gojo se chama “Vazio Infinito” e é extremamente poderosa pois todo oponente colocado ali recebe uma quantidade imensurável de informações de uma só vez, o que levaria uma pessoa normal à morte em menos de 1 segundo.",
    }
  ]
}
``` 

<h3 id="post-chars-detail">POST /character</h3>

**REQUEST**

```json
{
  "name": "Satoru Gojo",
  "age": 26,
  "bio":"Satoru Gojo é um personagem fictício da série de anime e mangá Jujutsu Kaisen criado por Gege Akutami. Ele fez sua primeira aparição no prequel Jujutsu Kaisen 0 como o mestre de Yuta Okkotsu, um adolescente amaldiçoado.",
  "image":"https://defeatzone.com/wp-content/uploads/2023/09/Jujutsu-Kaisen-5-Curiosidades-que-voce-Precisa-saber-sobre-Satoru-Gojo-1600x960.webp",
  "powers": [
    "id": "c45e6979-037c-40d6-b182-ce071ff483af"
  ],
  "domainExpansions":[
    "id": "6f119b87-11d1-45a8-a44b-fb539249a6e3"
  ]
}
```


<h3 id="get-powers-detail">GET /Powers</h3>

**RESPONSE**

```json
{
  "id":"c45e6979-037c-40d6-b182-ce071ff483af",
  "name": "Infinito",
  "description":"Esta habilidade oferece uma defesa impenetrável, permitindo que Gojo interaja conforme necessário. O Mugen controla o espaço ao redor de Gojo e pode ser usada ofensivamente ao alterar a energia amaldiçoada ao seu redor.",
  "Characters":[
    "CharacterId": "b39588ab-add1-434b-b8d8-af3e8fbe9e68"
  ]
}
```

<h3 id="post-powers-detail">POST /Power</h3>

**RESPONSE**
```json
{
  "name": "Infinito",
  "description":"Esta habilidade oferece uma defesa impenetrável, permitindo que Gojo interaja conforme necessário. O Mugen controla o espaço ao redor de Gojo e pode ser usada ofensivamente ao alterar a energia amaldiçoada ao seu redor.",
}
```

<h3 id="get-Domains-detail">GET /domainExpansions</h3>

**RESPONSE**

```json
{
  "id":"6f119b87-11d1-45a8-a44b-fb539249a6e3",
  "name": "Vazio Infinito",
  "description":"A Expansão de Domínio de Satoru Gojo se chama “Vazio Infinito” e é extremamente poderosa pois todo oponente colocado ali recebe uma quantidade imensurável de informações de uma só vez, o que levaria uma pessoa normal à morte em menos de 1 segundo.",
  "Characters":[
    "CharacterId": "b39588ab-add1-434b-b8d8-af3e8fbe9e68"
  ]
}
```

<h3 id="post-Domains-detail">POST /domainExpansions</h3>

**REQUEST**

```json
{
  "name": "Vazio Infinito",
  "description":"A Expansão de Domínio de Satoru Gojo se chama “Vazio Infinito” e é extremamente poderosa pois todo oponente colocado ali recebe uma quantidade imensurável de informações de uma só vez, o que levaria uma pessoa normal à morte em menos de 1 segundo.",
}
```

<h2 id="colab">🤝 Collaborators</h2>

Esta API foi desenvolvida por Joao Victor da Silva Cunha(@J0aoCunha).

 <a href="#">
        <img src="https://media.licdn.com/dms/image/D4D03AQFCCuAsAnp6vw/profile-displayphoto-shrink_800_800/0/1681515236076?e=1710979200&v=beta&t=0nH2KnkGeWXN03oLgSvY4Ui7ghdDdU_JX97-yg0SV1o" 
        width="100px;" alt="Fernanda Kipper Profile Picture"
        /><br>
        <sub>
          <b>Joao Victor da Silva Cunha</b>
        </sub>
      </a>

<h2 id="contribute">📫 Contribute</h2>

1. `git clone https://github.com/J0aoCunha/Ts-Node-API-JJK.git`
2. `git checkout -b feature/nome da branch`
3. Follow commit patterns
4. Abra um Pull Request explicando o problema resolvido ou recurso realizado, se existir, anexe screenshot das modificações visuais e aguarde a revisão!

<h3>Documentações que podem ajudar a realizar o Pull Request</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://github.com/iuricode/padroes-de-commits)