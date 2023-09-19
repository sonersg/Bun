// console.log("Hello via Bun!");

const server = Bun.serve({
    // port: 5000,
    // port: process.env.PORT || 8000,
    port: Bun.env.PORT || 8000,
    fetch(req) {
        return new Response("Hello server!");
    },
});

console.log(`listening on port ${server.port}`);
