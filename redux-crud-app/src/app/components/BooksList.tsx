import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, deleteBooks } from "../features/bookSlice";

interface Books {
  booksR: {
    books: [{ title: string; price: number }];
  };
}

const BooksList = () => {
  const books = useSelector((state: Books) => state.booksR.books);
  const dispatch = useDispatch();

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    dispatch(addBooks(data));
  };

  return (
    <div>
      
      <h1 className="text-3xl font-bold">List of Books</h1>

      <ul>
        {books.map((book, i) => {
          return (
            <li key={i}>
              {book.title} By {book.price}{" "}
              <button onClick={() => dispatch(deleteBooks(book.title))} className="bg-red-400  px-3 rounded-2xl ml-6 my-3">
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <form action="" onSubmit={handelSubmit}>
        <label htmlFor="books">
          Books*
          <input name="title" type="text" className="border" />
        </label>
        <label htmlFor="price">
          {" "}
          Price*
          <input name="price" type="number" className="border" />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default BooksList;
