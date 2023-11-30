export function getUser(userEmail) {
  const user = users.filter((u) => u.email == userEmail);
  return user;
}

const users = [
  {
    id: 101,
    name: "Alice Johnson",
    email: "alice@example.com",
  },
  {
    id: 102,
    name: "Bob Smith",
    email: "bob@example.com",
  },
];
