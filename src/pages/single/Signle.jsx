import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from "../../components/table/Table"
function Signle() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">

          <div className="left">
            <div className="editButton">edit</div>
            <h1 className="title">Information</h1>
            <div className="item">

              <img className='itemImg' src="https://images.hindustantimes.com/img/2022/07/22/1600x900/The_Gray_Man_review_1658473088264_1658473103562_1658473103562.jpg" alt="" />
              <div className="itemDetails">
                <h1 className="itemTitle">jane done</h1>
                <div className="itemD">
                  <span className="itemKey">email:</span>
                  <span className="itemValue">lehazali@13gmail.com</span>


                </div>
                <div className="itemD">
                <span className="itemKey">phone:</span>
                <span className="itemValue">+923488899315</span>


              </div>

              <div className="itemD">
              <span className="itemKey">countery:</span>
              <span className="itemValue">pakistan</span>


            </div>
            <div className="itemD">
            <span className="itemKey">address:</span>
            <span className="itemValue">kpk kohat</span>


          </div>

              </div>

            </div>

          </div>
          <div className="right">
            <Chart aspect={3/1} title="user spending last(6 months)"/>

          </div>


        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <Table/>
        
        
        
        
        
        </div>

      </div>




    </div>
  )
}

export default Signle