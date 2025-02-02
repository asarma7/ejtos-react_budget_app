import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        if (expenses) {
            var totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        }
        if (event.target.value > 20000) {
            alert("The value cannot exceed 20000");
        }
        else if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending");
        }
        else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;