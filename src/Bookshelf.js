import books2023 from "./data/books-2023";
import "./Bookshelf.scss";
import Book from "./Book";
import classNames from "classnames";

const Bookshelf = () => {
  const totalPages = books2023.reduce(
    (runningSum, book) => runningSum + book.numberOfPages,
    0
  );

  const allButLastThreeBooks = books2023.slice(0, -3);
  const lastThreeBooks = books2023.slice(-3);

  return (
    <div className="Bookshelf">
      {allButLastThreeBooks.map((book) => (
        <div key={book.title} className="Bookshelf-bookWrap">
          <Book {...book} />
        </div>
      ))}
      <div className="Bookshelf-endOfBookshelf">
        {lastThreeBooks.map((book, index) => (
          <div
            key={book.title}
            className={classNames("Bookshelf-bookWrap", {
              "Bookshelf-bookWrap--isLastBook":
                index === lastThreeBooks.length - 1,
            })}
          >
            <Book {...book} />
          </div>
        ))}
        <div className="Bookshelf-bookWrap Bookshelf-emptyBookShelfSpace"></div>
      </div>
    </div>
  );
};

export default Bookshelf;
