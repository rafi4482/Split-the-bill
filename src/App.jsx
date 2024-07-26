const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  return <Friends />;
};

export default App;

const Friends = () => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <div>{friend.name}</div>
      <div>Balance: {friend.balance}</div>
    </li>
  );
};
