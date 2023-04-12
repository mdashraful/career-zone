// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getAppliedJobs = () => {
  let appliedJObs = [];

  //get the shopping cart from local storage
  const applied = localStorage.getItem("appliedJobs");
  if (applied) {
    appliedJObs = JSON.parse(applied);
  }
  return appliedJObs;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, getAppliedJobs, deleteShoppingCart };
