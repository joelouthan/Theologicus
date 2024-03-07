export default async (request, context) => {
  const userAgent = request.headers.get('user-agent');

  if (userAgent.includes("Bytespider")) {
    return new Response("Access Denied", {
      status: 403,
      statusText: "Forbidden",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return context.next();
};

export const config = { path: "/test1" };