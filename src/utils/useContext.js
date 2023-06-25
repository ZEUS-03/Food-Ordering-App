import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "🤖 Ankit Kumar",
    email: "📨 createrankit@gmail.com"
  }
});

export default UserContext;
