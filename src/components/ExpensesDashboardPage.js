import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseLIstFilters from './ExpenseListFilters';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
export default ExpenseDashboardPage;