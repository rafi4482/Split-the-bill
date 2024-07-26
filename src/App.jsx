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
    <div className="card bg-base-100 w-96 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={friend.image} alt={friend.name} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};
