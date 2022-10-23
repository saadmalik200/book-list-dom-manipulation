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

books.map((bookItem) => {
  console.log(bookItem.img);
  const img = bookItem.img;
  const title = bookItem.title;
  const author = bookItem.author;

  const read = bookItem.alreadyRead;
  book(img, title, "", author, read);
});

function book(src, title, text, authorname, read) {
  // CARD CONTAINER
  const card = document.createElement("div");
  card.classList.add("card");

  //1. CHILD -IMG
  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = src;

  //2.child - CARDBODY
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  //GRANDCHILDREN
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = title;
  const p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = text;
  const author = document.createElement("p");
  author.innerText = authorname;
  const a = document.createElement("a");
  a.classList.add("btn", "btn-danger");
  if (read) {
    a.classList.remove("btn-danger");
    a.classList.add("btn-success");
  }

  a.innerText = read ? "Read" : "too read";

  cardBody.append(h5, p, author, a);
  card.append(img, cardBody);
  console.log(card);

  const bookList = document.querySelector(".book-list");
  bookList.append(card);
}
