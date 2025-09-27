import http from "http";

export const trees: Record<string, any> = {};

/**
 * Handles GET requests for a tree by ID
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 */
export const getTreeById = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const id = req.url?.replace("/trees/", "") || "";
  const tree = trees[id];
  sendJsonResponse(res, tree || {});
};

/**
 * Handles POST requests to add a new tree
 *
 * @param req - The HTTP request object
 * @param res - The HTTP response object.
 */
export const addTree = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const { id, species, age, location } =
        JSON.parse(body);
      trees[id] = { id, species, age, location };
      sendJsonResponse(res, {
        message: `Tree ${species} has been added!`
      });
    } catch (err) {
      sendJsonResponse(res, { error: "Invalid JSON" }, 400);
    }
  });
};

/**
 * Handles PUT requests to update an existing tree
 *
 * @param req - The HTTP request object
 * @param res - The HTTP response object.
 */
export const updateTree = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const id = req.url?.replace("/trees/", "") || "";
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const { species, age, location } = JSON.parse(body);
      trees[id] = { id, species, age, location };
      sendJsonResponse(res, {
        message: `Tree ${id} has been updated!`
      });
    } catch (err) {
      sendJsonResponse(res, { error: "Invalid JSON" }, 400);
    }
  });
};

/**
 * Sends a JSON response to the client
 *
 * @param res - The outgoing HTTP response object.
 * @param data - The data object to be sent as the response body.
 * @param statusCode - The HTTP status code (default: 200).
 */

export const sendJsonResponse = (
  res: http.ServerResponse,
  data: object,
  statusCode: number = 200
) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(data));
};

export const server = http.createServer((req, res) => {
  if (
    req.method === "GET" &&
    req.url?.startsWith("/trees/")
  ) {
    getTreeById(req, res);
  } else if (
    req.method === "POST" &&
    req.url === "/trees"
  ) {
    addTree(req, res);
  } else if (
    req.method === "PUT" &&
    req.url?.startsWith("/trees/")
  ) {
    updateTree(req, res);
  } else {
    sendJsonResponse(res, { error: "Not Found" }, 404);
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
