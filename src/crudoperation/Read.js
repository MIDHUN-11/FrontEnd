import React, { useState, useEffect } from "react";
import { Table, Button, TableCell, Form, Input } from 'semantic-ui-react';
import { API_URL } from "../Constants/URL";
import axios from "axios";
import Modal from 'react-modal';

function Read() {
    const [APIData, setAPIData] = useState([]);
    const [updatedData, setUpdatedData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteUser = async (id) => {
        await axios.delete(API_URL + id);
        callGetAPI();
    }

    const updateUser = async () => {
        await axios.put(API_URL + updatedData.id, updatedData);
        setIsModalOpen(false);
        callGetAPI();
    }

    const callGetAPI = async () => {
        const resp = await axios.get(API_URL);
        setAPIData(resp.data);
    }

    useEffect(() => {
        callGetAPI();
    }, [])

    const openModal = (data) => {
        setUpdatedData(data);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Table singleLine>
                {/* ... (Table.Header, Table.Body) */}
                <Table.Body>
                    {APIData.map((data) => (
                        <Table.Row key={data.id}>
                            <TableCell>{data.firstName}</TableCell>
                            <TableCell>{data.lastName}</TableCell>
                            <TableCell>{data.checkbox ? 'Checked' : 'Unchecked'}</TableCell>
                            <TableCell>
                                <Button onClick={() => deleteUser(data.id)}>Delete</Button>
                                <Button onClick={() => openModal(data)}>Update</Button>
                            </TableCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            {/* Modal for Update */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Update User Modal"
            >
                <h2>Update User</h2>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <Input
                            value={updatedData.firstName}
                            onChange={(e) => setUpdatedData({ ...updatedData, firstName: e.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <Input
                            value={updatedData.lastName}
                            onChange={(e) => setUpdatedData({ ...updatedData, lastName: e.target.value })}
                        />
                    </Form.Field>
                    <Button onClick={updateUser}>Update</Button>
                    <Button onClick={closeModal}>Cancel</Button>
                </Form>
            </Modal>
        </>
    )
}

export default Read;
