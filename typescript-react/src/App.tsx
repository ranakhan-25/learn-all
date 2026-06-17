// import DataFetch from "./components/DataFetch"
// import Post from "./components/Post"
// import User from "./components/User"
// import Counter from "./components/Counter"

import NewUser from "./components/NewUser"

const App = () => {
  // const user1 = {
  //   name: "Rana Khan",
  //   age: 21,
  //   email: "rana@gmail.com",
  //   lang: ["bangla","English"]
  // }
  // const arr = [
  //   {name:"Rana", age:21, email:"rana@gmail.com"},
  // ]
  return (
    <div className=''>
      <h1>TypeScript</h1>
      {/* <User users={arr} /> */}
      {/* <DataFetch status="success"/> */}
      {/* <Post/> */}
      {/* <Counter/> */}
      <NewUser/>
    </div>
  )
}

export default App
