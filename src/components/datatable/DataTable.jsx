

import * as React from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
export default function DataTable() {
  const [data,setdata]=React.useState(userRows);

  const hanldeDelete=(id)=>{

    setdata(data.filter((d)=>d.id!==id))
    // alert("hi",id)

  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{textDecoration:"none"}}>
              <div className="viewButton">View</div></Link>
          
            <div
              className="deleteButton" onClick={()=>hanldeDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
   <>
   
   <div className="datatable">
   <div className="datatableTitle">
     Add New User
     <Link to='/users/new' className='link'>Add New</Link>
    
   </div>
   <DataGrid
     className="datagrid"
     rows={data}
     columns={userColumns.concat(actionColumn)}
     pageSize={9}
     rowsPerPageOptions={[9]}
     checkboxSelection
   />
 </div>
   
   
   
   
   
   
   </>
  );
}