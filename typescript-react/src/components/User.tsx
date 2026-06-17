type user = {
  users: {
    name: string;
    age: number;
    email: string;
  }[];
};

const User = ({ users }: user) => {
  return (
    <div>
      <div>
        {users.map((l) => (
          <div key={l.age}>
            <h2>User Name :{l.name} </h2>
            <h2>User Email : {l.email}</h2>
            <h2>User Age : {l.age}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
