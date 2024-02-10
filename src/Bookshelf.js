import books2023 from "./data/books-2023";
import "./Bookshelf.scss";
import Book from "./Book";

const Bookshelf = () => {
  const totalPages = books2023.reduce(
    (runningSum, book) => runningSum + book.numberOfPages,
    0
  );

  return (
    <div>
      <div className="Bookshelf">
        {books2023.map((book) => (
          <div key={book.title} className="Bookshelf-bookWrap">
            <Book {...book} />
          </div>
        ))}
      </div>
      <br />
      <h3>
        Total number of pages:{" "}
        {totalPages.toLocaleString(
          undefined, // leave undefined to use the visitor's browser
          // locale or a string like 'en-US' to override it.
          { minimumFractionDigits: 0 }
        )}
      </h3>
      <h3>Total number of Books: {books2023.length}</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th># Pages</th>
            <th>Date Read</th>
          </tr>
        </thead>
        <tbody>
          {books2023.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.numberOfPages}</td>
              <td>{book.dateRead}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookshelf;
