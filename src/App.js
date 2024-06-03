import './App.css';

import Calculator from './MobileApp/Calculator';
import SolarCalculatorPieChart from './MobileApp/SolarCalculatorPieChart'
import LoginForm from './PersonalOrganisation/Loginform';
import SignUpForm from './PersonalOrganisation/Signupform';
// import Route from './PersonalOrganisation/Route';
import Home3 from './PersonalOrganisation/Home3';
import NavBar from './PersonalOrganisation/NavBar';
import PolicyTracker from './PersonalOrganisation/PolicyTracker';
import Home from './PersonalOrganisation/Home'
import { BrowserRouter, Router,Route, Routes } from 'react-router-dom';
import CarManagementApp from './PersonalOrganisation/CarManagementApp';
import TodoListApp from './PersonalOrganisation/TodoListApp';
import LoanManagementApp from './PersonalOrganisation/LoanManagementApp';
import HomePage from './PersonalOrganisation/Cardemo';
import LoanInfo from './PersonalOrganisation/Loan';
import Cardemo from './PersonalOrganisation/Cardemo';
import ReminderForm from './PersonalOrganisation/Reminder';
import LoanCalculator from './PersonalOrganisation/LoanCalculator';
import Login from './PersonalOrganisation/Login';
import LoanManagement from './PersonalOrganisation/Loan';
import ServiceRecordForm from './PersonalOrganisation/ServiceForm';
import ExpensesForm from './PersonalOrganisation/ExpensesForm';
import LicensesForm from './PersonalOrganisation/LicensesForm';
import CategoryCards from './PersonalOrganisation/CarManagementApp';
import PolicyPage from './PersonalOrganisation/PolicyPage';
import Insurance from './PersonalOrganisation/InsurancePolicy';
import CarInsurance from './PersonalOrganisation/CarInsuranc';
import PolicyTrackerForm from './PersonalOrganisation/Insurancedemo';
import TermLife from './PersonalOrganisation/TermLife';
import Health from './PersonalOrganisation/Health';
import InsurancePolicy from './PersonalOrganisation/InsurancePolicy';

// import FourCardLayout from './PersonalOrganisation/CarManagementApp';



function App() {

  return (
    <BrowserRouter>
   
    <Routes>
    //   {/* <Route path="/" element={<NavBar/>}></Route> */}
    <Route index element={<LoginForm />} />
    <Route path="/SignUp" element={<SignUpForm/>}></Route>
    {/* <Route path="/Signup" element={<Home/>}></Route> */}
    <Route path="/Home" element={<Home/>}></Route>
      <Route index element={<Home />} />
      {/* <Route path="/PolicyTrackerForm" element={<PolicyTracker/>}></Route> */}
    <Route index element={<InsurancePolicy />} />
    <Route path="/PolicyPage" element={<PolicyPage/>}></Route>
    <Route path="/CarInsurance" element={<CarInsurance/>}></Route>
    <Route path="/Termlife" element={<TermLife/>}></Route>
      <Route path="/ToDo1" element={<TodoListApp/>}></Route>
      <Route path="/Loan" element={<LoanManagementApp/>}></Route>
      <Route path="/CarManagement" element={<CarManagementApp/>}></Route>
      <Route index element={<CarManagementApp />} />
      <Route path="/Service" element={<ServiceRecordForm/>}></Route>
      <Route path="/Insurance" element={<PolicyTracker/>}></Route>
      <Route path="/Expenses" element={<ExpensesForm/>}></Route>
     <Route path="/LicensesForm" element={<LicensesForm/>}></Route>

      <Route path="/LoanCalculator" element={<LoanCalculator/>}></Route>
      {/* <Route index element={<SignUpForm />} /> */}
    {/* <Route path="/Home" element={<Home/>}></Route> */}
    </Routes>
        </BrowserRouter>
//    <BrowserRouter>
// <Routes>
//     <Route index element={<Insurance />} />
//     <Route path="/PolicyPage" element={<PolicyPage/>}></Route>
//     <Route path="/CarInsurance" element={<CarInsurance/>}></Route>
//     <Route path="/Termlife" element={<TermLife/>}></Route>
//     <Route path="/Health" element={<Health/>}></Route>

//     </Routes>
//     </BrowserRouter>
//  <InsurancePolicy /> 

  );
}

export default App;