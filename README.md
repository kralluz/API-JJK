# API do Anime Jujutsu Kaisen

Este projeto é uma API RESTful inspirada no anime Jujutsu Kaisen.

---

#### Breve descrição do anime 

  É um anime de fantasia sobrenatural que conta a história de Yuji Itadori, um estudante do ensino médio que possui força física incomparável. Um dia, ele come o dedo de Ryomen Sukuna, uma maldição poderosa que está selada em 20 dedos. Isso faz com que Yuji se torne um meio-maldição, e ele é forçado a se juntar à Jujutsu High School, uma escola que treina exorcistas de maldições. 
Imagem de Yuji Itadori, o protagonista do anime Jujutsu Kaisen.

  A série é escrita e ilustrada por Gege Akutami e foi publicada na Weekly Shōnen Jump desde 2018. O anime foi adaptado pela MAPPA e estreou em 2020.

  Jujutsu Kaisen é um anime muito popular e bem recebido pela crítica. Foi elogiado por sua animação, ação, história e personagens. A série ganhou vários prêmios, incluindo o "Anime do Ano" no Crunchyroll Anime Awards 2021.

  Jujutsu Kaisen é um anime emocionante e envolvente que tem algo a oferecer a todos. É uma história sobre amizade, coragem e o poder do espírito humano.

---
## Tecnologias

- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a segurança e compreensibilidade do código.
- **Zod**: Biblioteca de validação de dados para garantir a consistência dos dados recebidos.
- **Express**: Framework web para definição eficiente de rotas e manipuladores de rotas.
- **Prisma**: ORM para interação segura e fácil com o banco de dados.

## Instalação e Execução

1. Clone o repositório: `git clone https://github.com/seuusuario/seuprojeto.git`
2. Navegue até o diretório do projeto: `cd seuprojeto`
3. Instale as dependências: `npm install`
4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias.
5. Execute as migrações do Prisma: `npx prisma migrate dev`
6. Inicie o servidor: `npm start`

## Endpoints da API

- `GET /characters`: Obtenha todos os personagens.
- `GET /characters/:id`: Obtenha um personagem específico.
- `POST /characters`: Crie um personagem.
- `PUT /characters/:id`: Atualize um personagem.
- `DELETE /characters/:id`: Exclua um personagem.

## Créditos

Esta API foi desenvolvida por Joao Victor da Silva Cunha(J0aoCunha).

## Contribuição

Sinta-se à vontade para relatar problemas ou enviar pull requests.

---

Aproveite a nossa API!
