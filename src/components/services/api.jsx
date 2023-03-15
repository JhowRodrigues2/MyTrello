export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#0079bf"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 2,
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#0079bf"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#0079bf"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#0079bf"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#0079bf"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
      ],
    },
    {
      title: "Fazendo",
      cards: [],
    },
    {
      title: "Pausado",
      creatable: true,
      cards: [],
    },
  ];
}
