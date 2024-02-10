import { useEffect, useState } from "react";
import * as Vibrant from "node-vibrant";
import "./Book.scss";
import classNames from "classnames";

const BOOK_BASE_HEIGHT = 250;
const HEIGHT_VARIANCE_PER_PAGE = 0.15;
const COVER_WIDTH = 16; // "min-width"
const PAGE_WIDTH = 0.08;
const FONT_SIZE_PAGE_THRESHOLD = 100;

const Book = (book) => {
  const [palette, setPalette] = useState({});

  useEffect(() => {
    if (book.coverImg && Object.keys(palette).length === 0) {
      Vibrant.from(book.coverImg)
        .getPalette()
        .then((calculatedPalette) => setPalette(calculatedPalette));
    }
  }, [book]);

  const backgroundColor = palette?.Muted?.hex;
  const textColor = palette?.Muted?.bodyTextColor;

  const shortenedBookTitle = book.title.split(":")[0];

  const seriesAcronym = book.series
    .split(/\s/)
    .reduce((a, word) => (a += word.slice(0, 1)), "");

  const authorLastName = book.author.split(" ").at(-1);

  return (
    <div
      className={classNames("Book", {
        "Book--hasSeries": book.series,
        "Book--isSkinny": book.numberOfPages <= 250,
        "Book--isWide": book.numberOfPages > 250,
      })}
      style={{
        width: `${book.numberOfPages * PAGE_WIDTH + COVER_WIDTH}px`,
        minWidth: `${COVER_WIDTH}px`,
        backgroundColor,
        height: `${
          book.numberOfPages * HEIGHT_VARIANCE_PER_PAGE + BOOK_BASE_HEIGHT
        }px`,
      }}
    >
      <span
        className="Book-title"
        style={{
          color: textColor,
          // fontSize:
          //   book.numberOfPages > FONT_SIZE_PAGE_THRESHOLD ? "12px" : "8px",
          fontSize: "clamp(8px, 70%, 16px)",
        }}
      >
        {shortenedBookTitle}
      </span>
      <span
        className="Book-author"
        style={{
          color: textColor,
          // fontSize: "clamp(8px, 70%, 16px)",
        }}
      >
        {authorLastName}
      </span>
      {book.series && (
        <span
          className="Book-series"
          style={{
            color: textColor,
          }}
        >
          {seriesAcronym}
        </span>
      )}
      {book.seriesNumber && (
        <span
          className="Book-seriesNumber"
          style={{
            color: textColor,
          }}
        >
          {book.seriesNumber}
        </span>
      )}
    </div>
  );
};

export default Book;
