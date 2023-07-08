import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({
  friends,
  setFriends,
  setShowAddFriend,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    setFriends([...friends, newFriend]);
    setShowAddFriend(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>👦Friend Name👧🏼</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷Image URL📸</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled
      />

      <Button>Add</Button>
    </form>
  );
}
