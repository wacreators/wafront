import React from 'react'
import Transactions from '../@components/Transactions'
import '../@styles/Wallet.css'
// import { BsArrowLeft, BsPerson } from 'react-icons/bs';
import Sidebar from '../@components/Sidebar';



function Wallet() {
  return (
    <div className='wallet'>
        <Sidebar/>
      <div className="sub-wallet">
        <div className="head">

            <div className="card">
                <p>Balance</p>
                <h2>$350.00</h2>
                <div className="botton-div">
                    <button>Transfer</button>
                    <button>Pay Bills</button>
                </div>
            </div>
        </div>
        <div className="trans">
          <p>Wallet Transactions</p>
          <Transactions />
          <Transactions />
          <Transactions />
          <Transactions />
          <Transactions />
          <Transactions />
          <Transactions />
          <Transactions />
        </div>
      </div>
    </div>
  )
}

export default Wallet
