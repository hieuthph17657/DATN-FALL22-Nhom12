import React, { useState, useEffect, Component } from "react";
// import { observer } from "mobx-react";
import { Table } from 'reactstrap';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ModalForm from './ModalForm';
import TablePagination from '@material-ui/core/TablePagination';
import Pagination from '@material-ui/lab/Pagination';

class AccountIndex extends Component{ 
  
    items=[
      {
        id:"1",
        name: "Nguyen Van A",
        username:"nguyenvana",
        password:"12345678",
        email:"nguyenvana@gmail.com"
      },
      {
        id:"2",
        name: "Nguyen Van B",
        username:"nguyenvanb",
        password:"12345678",
        email:"nguyenvanb@gmail.com"
      },
  ]
    


    
  // const {ethnicStore}=useStore();
  // const {
  //   ethnicList,
  //   page,
  //   rowsPerPage,
  //   totalElements,
  //   totalPages,
  //   changePageClick,
  //   createEthnics,
  //   editEthnics,
  //   updatePageData,
  //   handleChangeRowsPerPage,
  //   getEthnics, 
  //   setPage, 
  //   handleChangePage,
  //   handleListEthnic,
  //   handleConfirmDelete
  //   }=ethnicStore;
  // const [searchChange, setSearchChange] = React.useState('');

  // useEffect(() => {
  //   getEthnics()
  // }, []);

  // const addItemToState = (item1) => {
  //   console.log(item1)
  //   createEthnics(item1)
  // };


  // const updateState = (item) => {
  //   const itemIndex = ethnicList.findIndex((data) => data.id === item.id);
  //   console.log(itemIndex)
  //   if(itemIndex>-1){
  //     editEthnics(item);
  //   }else{
  //     //handleListCountry(itemIndex);
  //   }
  // };

  // const deleteItem = id => {
  //   let confirmDelete = window.confirm('Delete item forever?')
  //   if(confirmDelete){
  //     handleConfirmDelete(id)
  //   }
  // }

  // const findChange= event=>{
  //   const { value } = event.target
  //   console.log(value)
  //   setSearchChange(value)
  // }

  // const searchClick = ()=> {
  //   console.log('valueSearch', searchChange)
  //   findItemFromState(searchChange)  
  // }

  // const findItemFromState = (item1) => {
  //   updatePageData(item1)
  // };

  // const handleKeyDownEnterSearch = (event) => {
  //   if (event.key === "Enter") {
  //     findItemFromState(searchChange)
  //   }
  // };
  render(){
    // let { items } = this.state;
  return (
      <>
  <h1>Account</h1>
  <div className="input-group">
    <div className="form-outline">
      <input type="search" name="keyword" id="form1" className="form-control" placeholder="Search" 
      // onChange={findChange}
      // onKeyPress={handleKeyDownEnterSearch}
      />
    </div>
    <button type="button" className="btn btn-primary"
    // onClick={() => {searchClick();}}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
    </button>
  </div>
  <br></br>
  <ModalForm buttonLabel="Add" item={null} 
  // addItemToState={addItemToState}
  />
  <br></br>
  <br></br>
  <Table responsive bordered hover>
  <thead class="table-active"> 
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Password</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    { this.items.length > 0 ? (
       this.items.map((coun) => (
        <tr key={coun.id}>
          <td>{coun.name}</td>
          <td>{coun.username}</td>
          <td>{coun.password}</td>
          <td>{coun.email}</td>
          <td>
              <ModalForm buttonLabel="Edit" item={coun} 
              // updateState={updateState}
              >
              </ModalForm>
              <Button
                variant="contained"
                color="secondary"
                className="btn btn-danger"
                style={{
                  float: "right", marginRight: "10px",
                  borderRadius: 5,
                  backgroundColor: "#f50057",
              }}
                startIcon={<DeleteIcon />}
                // onClick={() => deleteItem(coun.id)}
              >
                Delete
              </Button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No account</td>
      </tr>
    )}
  </tbody>
</Table>
<div className="paging">
<TablePagination
    rowsPerPageOptions={[5,10,15,20,25,50,100]}
    component="div"
    count="10"
    page="0"
    // onPageChange={handleChangePage}
    rowsPerPage="10"
    // onRowsPerPageChange={handleChangeRowsPerPage}
  />
  <Pagination count="0" showFirstButton showLastButton 
  // onChange={changePageClick}
  />
</div>

  </>
  )
}
}
export default AccountIndex