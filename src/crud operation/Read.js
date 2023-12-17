import React,{useState, useEffect} from "react";
import {Table, Button, TableCell} from 'semantic-ui-react';
import { API_URL } from "../Constants/URL";
import axios from "axios";
 
function Read(){
    const[APIData, setAPIData]= useState([]);
    const[updatedData,setUpdatedData] = useState(data);
    const deleteUser = async(id)=>{
        await axios.delete(API_URL + id)
        callGetAPI();
    }
    const updateUser=(data)=>{
        const 
    }
    const callGetAPI=async () =>{
        const resp = await axios.get(API_URL);
        setAPIData(resp.data);
    }
    useEffect(() =>{
        callGetAPI();
    },[])
    return(
       <Table singleLine>
           <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Checked</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
           </Table.Header>
           <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <TableCell>{data.firstName}</TableCell>
           <TableCell>{data.lastName}</TableCell>
           <TableCell>{data.checkbox ? 'Checked' : 'Unchecked'}</TableCell>
           <TableCell>
            <Button onClick={()=>
            deleteUser(data.id)}>Delete</Button>
            <Button onClick={()=>
            // deleteUser(data.id)}>update</Button>
            updateUser(data)}>update</Button>
           </TableCell>
        </Table.Row>
   )})}
</Table.Body>
       </Table>
    )
}
export default Read