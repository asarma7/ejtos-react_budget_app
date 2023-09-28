import React, { useContext, useState } from 'react';


const Currency = (props) => {
    const [currency, setCurrency] = useState('');

    return (
        <div>
            <select>
            <option disable selected>Currency (£ Pound)</option>
            <option value="Dollar" name="dollar">$ Dollar</option>
            <option value="Pound" name="Pound">£ Pound</option>
            <option value="Euro" name="euro">€ Euro</option>
            <option value="Ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;