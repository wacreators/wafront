import React from 'react'
import img from '../@assests/Settings Information Icons (1).png'
import Nav from '../@components/Nav'
import Transactions from '../@components/Transactions'
import '../@styles/Wallet.css'


function Wallet() {
  return (
    <div className='wallet'>
        <Nav 
            heading="Wallet"
            link="/profile"
        />
      <div className="sub-wallet">
        <div className="head">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="card">
                <p>balance</p>
                <h2>$350.00</h2>
                <div className="botton-div">
                    <button>Withdraw</button>
                    <button>History</button>
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
        </div>
      </div>
    </div>
  )
}

export default Wallet
