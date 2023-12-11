import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

import { UTApi } from "uploadthing/server";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

export async function DELETE(request: Request) {
  const data = await request.json();
  const newUrl = data.url.substring(data.url.lastIndexOf("/") + 1);
  const utApi = new UTApi();
  await utApi.deleteFiles(newUrl);

  return Response.json({ message: "ok" });
}
