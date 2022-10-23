const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// console.log();

// books.sort((a, b) => (a.author > b.author ? 1 : -1));

books.forEach((item) => {
  //   console.log(item);
  const title = item.title;
  const author = item.author.split(" ").reverse().join(", ");

  //   console.log(author);
  const alreadyRead = item.alreadyRead;
  const src = item.img;

  booksFunc(src, title, author, alreadyRead);
  //   console.log(author);
});

function booksFunc(src, title, author, alreadyRead) {
  const bookList = document.querySelector(".book-list");

  // Card - Parent
  const div = document.createElement("div");
  div.classList.add("card", "book");
  //   div.style.width = "15rem";
  bookList.append(div);

  // Image - Child 1
  const img = document.createElement("img");
  img.classList.add("card-img-top", "book-cover");
  img.setAttribute("src", src);

  // Div - Child 2
  const div2 = document.createElement("div");
  div2.classList.add("card-body");
  div.append(img, div2);

  // h5 - G-Child 1
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.textContent = title;

  // p - G-Child 1
  const p = document.createElement("p");
  p.classList.add("card-text");
  p.textContent = author;

  // a - G-Child 1
  const a = document.createElement("a");
  a.classList.add("btn", "btn-danger");
  a.innerText = alreadyRead ? "Read" : "To read";
  if (alreadyRead) {
    a.classList.remove("btn-danger");
    a.classList.add("btn-success");
  }

  div2.append(h5, p, a);
}

// books();
