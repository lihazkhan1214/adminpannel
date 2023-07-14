import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from "../../components/datatable/DataTable"
function List() {
  return (
    <div className='list'>
    <Sidebar></Sidebar>
    <div className="listContainer">
    <Navbar/>
  <DataTable/>
    
    </div>
    
    </div>
  )
}

export default List