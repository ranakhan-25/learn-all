import React, { useState } from "react";

const NewUser = () => {
  type User = {
    name: string;
    email: string;
  };
  const [user, setUser] = useState<User>({ name: " ", email: " " } as User);

  const handelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value});
  };
  const handelEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, email: e.target.value });
  };
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(user)
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <h1>Register Form</h1>
        <div>
          <input
            type="text"
            name="name"
            onChange={handelNameChange}
            placeholder="name"
            required
          />
        </div>
        <div>
          <input type="email" name="email" onChange={handelEmailChange} placeholder="email" required />
        </div>
        <button type="submit" className="border">
          Add User
        </button>
      </form>
    </div>
  );
};

export default NewUser;
