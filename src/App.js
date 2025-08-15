import React from "react";
import { useState } from "react";
const vegetables = await fetch(
  "https://gist.githubusercontent.com/ChrisNjubi/1d3c5ac9974b8cac73d48a756d3b7a42/raw/0db36c0ed658d91140714c459e7a5c0570d9e537/gistfile1.txt"
);
const veggy = await vegetables.json();
const fruit = await fetch(
  "https://gist.githubusercontent.com/amlcurran/6d174c472e2523be5f9cad7092e1d7ab/raw/fruits.json"
);
const { fruits } = await fruit.json();
const updatedFruits = fruits.map((item) => {
  item.photo_url = item.image;
  item.original = item.price;
  return item;
});
const updatedVeggey = veggy.map((item) => {
  item.original = item.price;
  return item;
});
const data = [...updatedVeggey, ...updatedFruits];
export default function App() {
  const [carts, setCarts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(filter);
  const res = data.filter((cart) =>
    cart.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  console.log(res);
  // const [CartIsDeleted, setCartIsDeleted] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function deleteItem(item) {
    // console.log(carts.filter((cart) => cart.id !== item.id));
    setCarts((carts) => carts.filter((cart) => cart.id !== item.id));
    // setIsOpen((isOpen) => false);
    // setIsOpen(false);
  }

  // function handleHide() {
  //   // console.log(CartIsDeleted);
  //   if (isOpen === true) setIsOpen(false);
  // }

  // function isDeleted(value) {
  //   setCartIsDeleted(value);
  // }

  function handleSelectedItem(item) {
    console.log(item);
    setSelectedItem(item);
  }
  return (
    <div className="app">
      {selectedItem ? (
        <View selectedItem={selectedItem} onSetSelectedItem={setSelectedItem} />
      ) : (
        <>
          <Header
            carts={carts}
            onSetCarts={setCarts}
            isOpen={isOpen}
            onClick={handleToggle}
            onDeleteItem={deleteItem}
            filter={filter}
            onSetFilter={setFilter}
            // CartIsDeleted={CartIsDeleted}
            // onCartIsDeleted={isDeleted}
          />
          <Menu
            carts={carts}
            onSetCarts={setCarts}
            res={res}
            onSetSelectedItem={handleSelectedItem}
            // CartIsDeleted={CartIsDeleted}
            // onCartIsDeleted={setCartIsDeleted}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

function Header({
  carts,
  onSetCarts,
  isOpen,
  onClick,
  onDeleteItem,
  filter,
  onSetFilter,
  // CartIsDeleted,
  // onCartIsDeleted,
}) {
  const totalPrice = carts.reduce((acc, cart) => acc + cart.price, 0);
  // onSetCarts((carts) => carts.filter((cart) => cart.name.includes(filter)));
  return (
    <header>
      <div className="header">
        <p className="veggy">Veggy</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for Vegetables and Fruits"
            value={filter}
            onChange={(e) => onSetFilter(e.target.value)}
          />
          <button>🔍</button>
        </form>
        <div className="cart">
          <div>
            <p>No. of items : {carts.length}</p>
            <p>Sub total : {totalPrice}</p>
          </div>
          <span onClick={onClick}>🛒</span>
        </div>
        {isOpen && (
          <div className="cart-storage">
            {carts.length > 0 ? (
              <div className="items">
                {carts.map((item) => (
                  <Item
                    item={item}
                    key={item.id}
                    onDeleteItem={onDeleteItem}
                    // CartIsDeleted={CartIsDeleted}
                    // onCartIsDeleted={onCartIsDeleted}
                  />
                ))}
              </div>
            ) : (
              <div>
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png"
                  alt="empty cart"
                />
                <p>your cart is empty</p>
              </div>
            )}
            <button>proceed to checkout</button>
          </div>
        )}
      </div>
    </header>
  );
}

function Menu({ carts, onSetCarts, res, onSetSelectedItem }) {
  return (
    <div className="menu-com">
      <div className="menu">
        {res.length > 0 ? (
          res.map((item) => (
            <Type
              item={item}
              key={item.name}
              carts={carts}
              onSetCarts={onSetCarts}
              onSetSelectedItem={onSetSelectedItem}
            />
          ))
        ) : (
          <div className="not-found">
            sorry there is no <b>fruit</b> <strong>or</strong> <b>vegetables</b>
            with this name
          </div>
        )}
        {}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://kareemtarekK.github.com">see source code on github</a>
        <span>/</span>
        <a href="mailto:kareemtarek33333@gmail.com">need any help?</a>
        <span>/</span>
        <a href="https://github.com/kareemtarekK">view my github account</a>
        <span>/</span>
        <a href="https://www.linkedin.com/in/kareem-tarek-37027b241/">
          <b>kareem-tarek</b>
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} <b>Veggy</b> - Organic Green Store
      </p>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  const num = item.price / item.original;
  return (
    <div className="cart-item">
      <img src={`${item.photo_url}`} alt="cart img" />
      <div className="price-contents">
        <div className="content">
          <span>{item.name} - 1 Kg</span>
          <span>€ {item.original}</span>
        </div>
        <div className="number">
          <span>{num} No.</span>
          <span>
            <b>€ {item.price}</b>
          </span>
        </div>
        <button
          onClick={() => {
            onDeleteItem(item);
            // onCartIsDeleted(true);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}

function Type({ item, carts, onSetCarts, onSetSelectedItem }) {
  const [number, setNumber] = useState(1);

  function handleIncrease(e) {
    e.preventDefault();
    setNumber((n) => n + 1);
  }

  function handleDecrease(e) {
    e.preventDefault();
    setNumber((n) => (n > 1 ? n - 1 : n));
  }

  function handleAddToCart(e) {
    e.preventDefault();
    const filterCards = carts.find((cart) => cart.name === item.name);
    onSetCarts((carts) =>
      filterCards
        ? carts.map((i) =>
            i.id === filterCards.id
              ? { ...i, price: number * i.original + filterCards.price }
              : i
          )
        : [...carts, { ...item, price: number * item.original }]
    );
  }

  return (
    <div className="item">
      <div className="div-img">
        <img
          src={`${item.photo_url}`}
          alt="img"
          onClick={() => onSetSelectedItem(item)}
        />
      </div>
      <div className="weight-price">
        <p>{item.name} - 1 Kg</p>
        <p className="price">€ {item.price}</p>
      </div>
      <form className="controls" onSubmit={(e) => handleAddToCart(e)}>
        <button
          className="increase-decrease"
          onClick={(e) => handleDecrease(e)}
        >
          -
        </button>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
        <button
          className="increase-decrease"
          onClick={(e) => handleIncrease(e)}
        >
          +
        </button>
        <button className="add">add to cart</button>
      </form>
    </div>
  );
}

function View({ selectedItem, onSetSelectedItem }) {
  return (
    <div className="view-FV">
      <div className="view">
        <button onClick={() => onSetSelectedItem(null)}>x</button>
        <img src={`${selectedItem.photo_url}`} alt={`${selectedItem.name}`} />
        <div className="weight-price">
          <span>{selectedItem.name} - 1 Kg</span>
          <span>€ {selectedItem.price}</span>
        </div>
      </div>
    </div>
  );
}
