# Podcast Management

### Descrição

Um app que filtra poscasts por categorias!

### Domínio

Podcasts feito em vídeos

### Features

- Listar podcasts em seções de categorias;
  -[saúde, fitness, mentalidade, humor...];
- Filtrar episódios por nome de podcast.

## Como

#### Feature:
  - Listar

### Como vou implementar:
  - Vou retornar em uma API REST o nome do podcast, nome do episódio, imagem da capa, link do vídeo

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    cover: "http:image.com",
    link: "http:video.com,
    categories:["saude", "fitness"]
  },
  {
    podcastName: "flow2",
    episode: "Fallen - Flow #329",
    cover: "http:image.com",
    link: "http:video.com,
    categories:["games", "esports"]
  }
]
```

