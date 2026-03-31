import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


const SuperCoin = () => {

    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector (state => state.cart.cartItems);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0 );

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200){
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300){
            setSuperCoins(20);
        } else if (totalAmount >= 300){
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    },[totalAmount]);

    return(
        <div className='super-coins' style={{textAlign: 'center'}}>
            <h3 className='super-coins-title'>Super Coins</h3>
            <p className="super-coins-info">You have earned {superCoins} super coins!</p>
        </div>
    );

};

export default SuperCoin;








// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const SuperCoin = () => {
//     const [superCoins, setSuperCoins] = useState(0);
//     const cartItems = useSelector(state => state.cart.cartItems); // دقت کنید که نام ریجستر شده در استور 'cart' باشد یا 'data'

//     // 1. اصلاح نام متد به reduce
//     const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     useEffect(() => {
//         // 2. منطق محاسبه سکه‌ها
//         if (totalAmount >= 100 && totalAmount < 200) {
//             setSuperCoins(10);
//         } else if (totalAmount >= 200 && totalAmount < 300) {
//             setSuperCoins(20);
//         } else if (totalAmount >= 300) {
//             setSuperCoins(30);
//         } else {
//             setSuperCoins(0);
//         }
//     }, [totalAmount]); // 3. انتقال آرایه وابستگی به داخل پرانتز useEffect

//     return (
//         <div className='super-coins' style={{ textAlign: 'center' }}>
//             <h3 className='super-coins-title'>Super Coins</h3>
//             <p className="super-coins-info">You have earned {superCoins} super coins!</p>
//         </div>
//     );
// };

// export default SuperCoin;
