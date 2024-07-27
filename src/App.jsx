import React, { useState } from "react";

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
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Friends />
      </div>
      {showAddForm && <AddFriend />}
      <Button onClick={() => setShowAddForm(!showAddForm)}>Add Friend</Button>
      <BillSplit />
    </div>
  );
};
export default App;

const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary w-1/4 mx-auto"
    >
      {children}
    </button>
  );
};

const Friends = () => {
  return (
    <>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </>
  );
};

const Friend = ({ friend }) => {
  return (
    <div className="card bg-base-100 shadow-xl m-4">
      <figure className="px-5 pt-10">
        <div className="avatar">
          <div className="w-6 rounded-full">
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
      <div className="form-control mb-4 w-full max-w-xs">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="🙍‍♂️ Friend's name"
        />
      </div>
      <div className="form-control mb-4 w-full max-w-xs">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="🌐 Image URL"
        />
      </div>
      <div className="form-control mb-4 w-full"></div>
    </form>
  );
};

const BillSplit = () => {
  return (
    <form className="p-4 flex flex-col items-center mt-10 w-full max-w-md">
      <h3 className="card-title mb-4">Split the bill</h3>
      <div className="form-control mb-4 w-full">
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="💵 Bill Value"
        />
      </div>
      <div className="form-control mb-4 w-full">
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="😊 Your expense"
        />
      </div>
      <div className="form-control mb-4 w-full">
        <input
          type="number"
          className="input input-bordered w-full"
          placeholder="🙍‍♂️ X expense"
          disabled
        />
      </div>
      <select className="select select-warning w-full mb-4">
        <option disabled selected>
          💰 Who's paying ?
        </option>
        <option>You</option>
        <option>X</option>
      </select>
      <div className="form-control mb-4 w-full">
        <button type="submit" className="btn btn-warning w-1/2 mx-auto">
          Split
        </button>
      </div>
    </form>
  );
};
