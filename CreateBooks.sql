CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT not NULL,
  genre TEXT,
  published_year INTEGER,
  isbn TEXT UNIQUE,
  price REAL,
  rating TEXT,
  stock_count INTEGER
  )

  


