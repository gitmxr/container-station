const fastify = require("fastify")({ logger: true });

fastify.get("/", function handler(request, reply) {
    reply.send({ hello: "world" });
});

fastify.listen({ port: 8080, host: "0.0.0.0" }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log("Server is running at http://localhost:8080");
});
