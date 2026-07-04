type datatype = {
  count: {
    count:number,
  },
  counterReducer:()=> 
}

const increment = () => {
    return {
     type:"increment"
   }
 }
  const decrement = () => {
    return {
     type:"decrement"
   }
}
 

const Counter = ({count, counterReducer}:datatype) => {
  
  
  return (
    <div className=" p-3 text-center flex flex-col justify-center m-4 border-2">
      <h1>Count:{count.count}</h1>
      <div className="flex gap-4 p-3">
        <button className="bg-green-400 text-red-500 px-10 py-3  rounded-xl" onClick={increment}>Increment</button>
        <br />
        <button  className="bg-green-400 text-red-500 px-10 py-3  rounded-xl inline-block" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
