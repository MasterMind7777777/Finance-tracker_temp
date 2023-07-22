import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Common
import Home from './components/Common/Home';
import Navbar from './components/Common/Navbar';
// User
import UserList from './components/User/UserList';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
// Transaction CRUD
import TransactionDetail from './components/Transaction/TransactionDetail';
import AddTransaction from './components/Transaction/AddTransaction';
import UpdateTransaction from './components/Transaction/UpdateTransaction';
import TransactionListWithAdd from './components/Transaction/TransactionListWithAdd';
// Transaction Custom
import RecommendationComponent from './components/Transaction/RecommendationComponent';
// Budget CRUD
import BudgetListWithAdd from './components/Budget/BudgetListWithAdd';
import BudgetDetail from './components/Budget/BudgetDetail';
import CreateBudget from './components/Budget/CreateBudget';
import UpdateBudget from './components/Budget/UpdateBudget';
// Category CRUD
import CategoryListWithAdd from './components/Category/CategoryListWithAdd';
import CategoryDetail from './components/Category/CategoryDetail';
import AddCategory from './components/Category/AddCategory';
import UpdateCategory from './components/Category/UpdateCategory';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* User */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
        {/* Transaction CRUD */}
        <Route path="/transactions" element={<ProtectedRoute><TransactionListWithAdd /></ProtectedRoute>} />
        <Route path="/transactions/:id" element={<ProtectedRoute><TransactionDetail /></ProtectedRoute>} />
        <Route path="/transactions/add" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} />
        <Route path="/transactions/update/:id" element={<ProtectedRoute><UpdateTransaction /></ProtectedRoute>} />
        {/* Transaction Custom */}
        <Route path="transactions/recommendations" element={<ProtectedRoute><RecommendationComponent numRecommendations={5} /></ProtectedRoute>} />
        {/* Budget CRUD */}
        <Route path="/budgets" element={<ProtectedRoute><BudgetListWithAdd /></ProtectedRoute>} />
        <Route path="/budgets/:id" element={<ProtectedRoute><BudgetDetail /></ProtectedRoute>} />
        <Route path="/budgets/create" element={<ProtectedRoute><CreateBudget /></ProtectedRoute>} />
        <Route path="/budgets/update/:id" element={<ProtectedRoute><UpdateBudget /></ProtectedRoute>} />
        {/* Category CRUD */}
        <Route path="/categories" element={<ProtectedRoute><CategoryListWithAdd /></ProtectedRoute>} />
        <Route path="/categories/:id" element={<ProtectedRoute><CategoryDetail /></ProtectedRoute>} />
        <Route path="/categories/add" element={<ProtectedRoute><AddCategory /></ProtectedRoute>} />
        <Route path="/categories/:id/edit" element={<ProtectedRoute><UpdateCategory /></ProtectedRoute>} />
        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
