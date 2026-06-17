import { useState } from "react";

const Counter = () => {
  type users = {
    Name: string;
    Age: number;
  };

  const [user, setUser] = useState<users>({} as users);

  const handelAddUser = () => {
    setUser({ Name: "Rana Khan", Age: 21 });
  };

  return (
    <div>
      <div>
        <button
          className="bg-gray-400 w-20 h-10 rounded-2xl mx-2"
          onClick={handelAddUser}
        >
          Add
        </button>
      </div>
      <h1 className="text-2xl m-10">{user.Name}</h1>
    </div>
  );
};

export default Counter;
