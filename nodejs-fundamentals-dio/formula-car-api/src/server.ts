import fastify from "fastify";

const server = fastify();

server.register(require("@fastify/cors"), {
  origin: true
});

server.get("/", async (request, reply) => {
  return { hello: "world" };
});

const drivers = [
  {
    id: 1,
    name: "Michael Schumacher",
    team: "Red Bull",
    nationality: "German",
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Mercedes",
    nationality: "British",
  },
  {
    id: 3,
    name: "Max Verstappen",
    team: "Red Bull",
    nationality: "Dutch",
  },
  {
    id: 4,
    name: "Charles Leclerc",
    team: "Ferrari",
    nationality: "Monegasque",
  },
  {
    id: 5,
    name: "Carlos Sainz",
    team: "Ferrari",
    nationality: "Spanish",
  },
  {
    id: 6,
    name: "Valtteri Bottas",
    team: "Mercedes",
    nationality: "Finnish",
  },
  {
    id: 7,
    name: "Pierre Gasly",
    team: "Red Bull",
    nationality: "French",
  },
  {
    id: 8,
    name: "Esteban Ocon",
    team: "Renault",
    nationality: "French",
  },
  {
    id: 9,
    name: "Lando Norris",
    team: "McLaren",
    nationality: "British",
  },
  {
    id: 10,
    name: "Sebastian Vettel",
    team: "Ferrari",
    nationality: "German",
  },
  {
    id: 11,
    name: "Yuki Tsunoda",
    team: "AlphaTauri",
    nationality: "Japanese",
  },
]

server.get("/drivers", async (request, reply) => {
  return { drivers }
})

interface DriverParams {
  id: string,
  name: string,
  team: string,
  nationality: string,
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (request, reply) => {
  const id = parseInt(request.params.id)
  const driver = drivers.find(d => d.id === id)

  if (!driver) {
    return reply.code(404).send({ message: "Driver not found" })
  } else {
    return reply.code(200).send(driver)
  }
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  console.log(`server listening on ${address}`);
})