import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import Form from './Form';
import Registration from './Registration'
import reportWebVitals from './reportWebVitals';
import UsingFind from './UsingFind';
import TemplateLiterals from './templateliterals'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MedicalForm from './Assessment/MedicalForm'
import SummaryPage from './Assessment/SummaryPage'
import Childtoparent from './childtoparent'
//import App from './controlled&uncontrolled/controlled';
import Uncontrolled from './controlled&uncontrolled/uncontrolled';
import UpdateState from './UpdateState'
import Car from '././OnclickFunction'
import Family from '././onChangeFunction'
import PopupModal from '././Popupmodal'
import ListComponent from './ListComponent'
import MapFunction from './mapfunction'
import App from './List'
import Users from './././List1'
import ReduceFunction from './reduce'
import Longest from './longestwordinString'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Longest/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
