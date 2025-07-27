import userModel from "../models/userModel.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.itemId]) {
      cartData[req.itemId] = 1;
    } else {
      cartData[req.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// const addToCart = async (req, res) => {
//   try {
//     const itemId = req.itemId;  // ✅ Fix: get itemId from body
//     const userData = await userModel.findById(req.userId);
//     const cartData = userData.cartData;

//     if (!cartData[itemId]) {
//       cartData[itemId] = 1;
//     } else {
//       cartData[itemId] += 1;
//     }

//     await userModel.findByIdAndUpdate(req.userId, { cartData });
//     res.json({ success: true, message: "Added to Cart" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error adding to cart" });
//   }
// };


// remove from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = await userData.cartData;
    if (cartData[req.itemId] > 1) {
      cartData[req.itemId] -= 1;
    } else {
      delete cartData[req.itemId];
    }
    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData: cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
