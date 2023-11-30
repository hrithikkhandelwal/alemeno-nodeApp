import * as users from "./user.model.js";

export function verifyUser(req, res) {
  const email = req.body.email;
  const user = users.getUser(email);
  res.send(user);
}
