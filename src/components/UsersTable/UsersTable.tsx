import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useMutation, useQueryClient} from 'react-query'
import {User} from "../../definitions/user";
import {DeleteModal} from "../DeleteModel/DeleteModel";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const UsersTable: React.FC<{ users: User[] }> = ({users}) => {
    // Delete Modal Show State
    const [deleteId, setDeleteId] = useState<number>(0)
    const [showModal, setShowModal] = useState(false)
    const linkStyle = {
        textDecoration: "none",
        color: 'white'
    };

    const queryClient = useQueryClient();

    const deleteMutation = useMutation(
        (id: string) => axios.delete(`http://localhost:3004/users/${id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
                alert('Delete Successful!')
                hideModal()
            },
        }
    )

    const showDeleteModal = (id: number) => {
        setDeleteId(id)
        setShowModal(true)
    }

    const onDelete = async (id: number) => {
        deleteMutation.mutateAsync(id.toString())
    }

    const hideModal = () => setShowModal(false)

    const rows = users.map((user) => (
        <TableRow
            key={user.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="left">{user.id}</TableCell>

            <TableCell component="th" scope="row">
                {user.first_name}
            </TableCell>
            <TableCell align="center">{user.last_name}</TableCell>
            <TableCell align="center">{user.email}</TableCell>
            <TableCell align="center">{user.gender}</TableCell>
            <TableCell align="center"><Link
                className="p-2 text-cyan-800 hover:text-cyan-500"
                to={`/user/edit/${user.id}`}
            >
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <EditIcon/>
                </IconButton>
            </Link>
                <IconButton color="primary" aria-label="upload picture" component="span"
                            className="p-2 text-cyan-800 hover:text-cyan-500"
                            onClick={() => showDeleteModal(user.id)}
                >
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    ))

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <DeleteModal
                    id={deleteId}
                    showModal={showModal}
                    deleteAction={onDelete}
                    cancelAction={hideModal}/>

                <Grid
                    direction="column"
                    sx={{marginTop: "40px"}} container rowSpacing={4} columnSpacing={2}>
                    <Grid item>
                        <div className="flex items-center justify-between mb-4">
                            <Button variant="contained">
                                <Link style={linkStyle} to="/user/create">
                                    Create User
                                </Link>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item>

                        <TableContainer component={Paper}>
                            <Table stickyHeader sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell align="center">First Name</TableCell>
                                        <TableCell align="center">Last Name</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Gender</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
