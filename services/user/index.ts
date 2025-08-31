import {Elysia} from "elysia";

(() => {
    new Elysia()
        .listen(3000, () => {
            console.log("Listening on port 3000");
        })
})();