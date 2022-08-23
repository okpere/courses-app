import './App.css';
import React from 'react'
import Card from './Componets/Card';
import SideBar from './Componets/SideBar';

export const App = () => {
  return (
    <div className='base'>
      <div className='base-courses'>
        <h1 className='billing'>Biliing & Accounts</h1>
        <Card
          tag={'HR'}
          title={'Human Resource module'}
          price={'N 40,000 NGN'}
        />
        <Card
          tag={'Payroll'}
          title={'Payroll Module'}
          price={'N 60,000 NGN'}
        />
        <Card
          tag={'leave ManageMent'}
          title={'Leave Management Module'}
          price={'N 30,000 NGN'}
        />
      </div>
      <SideBar
        nam={'make payment'}
      />
    </div>
  )
}

export default App;
