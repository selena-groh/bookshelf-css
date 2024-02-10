import books2023 from "./data/books-2023";

const BookStats = () => {
  const totalPages = books2023.reduce(
    (runningSum, book) => runningSum + book.numberOfPages,
    0
  );

  return (
    <div>
      <h3>
        Total number of pages:{" "}
        {totalPages.toLocaleString("default", { minimumFractionDigits: 0 })}
      </h3>
      <h3>Total number of Books: {books2023.length}</h3>
    </div>
  );
};

export default BookStats;
