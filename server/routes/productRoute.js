const express = require("express");
const router = express.Router();

const { 
    getAllProducts, 
    newProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// normal routes
router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProduct);

// admin routes
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);
router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

// review routes
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);


module.exports = router;