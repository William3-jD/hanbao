import React from 'react';

const CartContext = React.createContext({
    mealsCart: [],
    totalAmount: 0,
    totalPrices: 0,
    onAddHandle: () => {
    },
    onSubHandle: () => {
    },
    clearCart: () => {
    }

});

export default CartContext;