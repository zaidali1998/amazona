import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";
import { orderDeleteReducer, orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer, orderSummaryReducer } from "./reducers/orderReducers";
import { productListReducer, productDetailsReducer, productCreateReducer, productUpdateReducer, productDeleteReducer, productCategoryListReducer, productReviewCreateReducer} from "./reducers/productReducers";
import { userAddressMapReducer, userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userTopSellerListReducer, userUpdateProfileReducer, userUpdateReducer } from "./reducers/userReducers";


const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems')) 
        : [],
        shippingAddress: localStorage.getItem('shippingAddress') 
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: "PayPal"
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    productCreate : productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete : productDeleteReducer,
    orderList : orderListReducer,
    orderDeliver: orderDeliverReducer,
    userList : userListReducer,
    userDelete: userDeleteReducer,
    orderDelete: orderDeleteReducer,
    userTopSellersList: userTopSellerListReducer,
    productCategoryList: productCategoryListReducer,
    productReviewCreate: productReviewCreateReducer,
    userAddressMap: userAddressMapReducer,
    orderSummary: orderSummaryReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;



