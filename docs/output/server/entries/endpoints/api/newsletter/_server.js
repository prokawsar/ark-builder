import { e as error } from "../../../../chunks/index.js";
import "base-64";
const registerEmail = (email) => {
  return;
};
const POST = async ({ request }) => {
  try {
    const { email } = await request.json();
    let result = await registerEmail(email);
    return new Response(
      JSON.stringify(result, {
        status: result.status
      })
    );
  } catch (err) {
    console.error(err);
    throw error(400, "couldn't add email to the newsletter");
  }
};
export {
  POST
};
