import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel",
    isFollowing: false,
  },
  {
    userName: "bato",
    name: "Francisco Miguel",
    isFollowing: true,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        // const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            username={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
