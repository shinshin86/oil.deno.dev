/**
 * webserver.ts
 */
import { serve } from "https://deno.land/std@0.91.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";
  bodyContent += "\n\n";
  bodyContent +=
    "This sample code is referenced here: https://deno.land/manual@v1.8.2/examples/http_server";

  request.respond({ status: 200, body: bodyContent });
}
