import React from "react";

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
  return (
    <div className="flex flex-col items-center">
      <Friends />
      <AddFriend />
    </div>
  );
};

export default App;

const Friends = () => {
  return (
    <ul className="flex flex-col items-center">
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
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

        {friend.balance < 0 && (
          <p className="text-red-500">
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance > 0 && (
          <p className="text-green-500">
            {friend.name} owes you {friend.balance}
          </p>
        )}

        {friend.balance === 0 && (
          <p className="text-yellow-500">{friend.name} and you are even!</p>
        )}

        <div className="card-actions">
          <button className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
  );
};

const AddFriend = () => {
  return (
    <form className="p-4 flex flex-col items-center">
      <div className="form-control mb-4 w-full">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Friend's name"
        />
      </div>
      <div className="form-control mb-4 w-full">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Image URL"
        />
      </div>
      <div className="form-control mb-4 w-full">
        <button type="submit" className="btn btn-primary w-1/2 mx-auto">
          Add Friend
        </button>
      </div>
    </form>
  );
};
