const express = require('express');
const router = express.Router();

const { 
    registerUser, 
    loginUser, 
    forgotPassword, 
    resetPassword, 
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails,
    updateUser,
    deleteUser,
    logout 
} = require('../controllers/authController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser, getUserProfile);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// admin routes
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails);
router.route('/admin/user/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateUser);
router.route('/admin/user/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

module.exports = router;