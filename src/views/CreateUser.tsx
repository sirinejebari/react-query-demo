import React from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import {useMutation} from 'react-query'
import {User} from "../definitions/user";
import {UserForm} from "../components/UserForm/UserForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";

const postUser = async (newUser: User): Promise<User> =>
    await (await axios.post('http://localhost:3004/users', newUser)).data

export const CreateUser: React.FC = () => {
    const mutation = {} // TODO implement mutation

   // const { isLoading, isError, error, isSuccess } = mutation

    const onSubmit = async (data: User) => {
        //TODO use mutation to save new user
    }

    /*if (isSuccess) {
        return <Navigate to="/" />
    }*/

    return (
        <Box sx={{flexGrow: 1, padding: "30px"}}>
            <Card>
                <CardContent>
            <h2>New User</h2>

          {/*  {isError && <div>An error occurred: {error.message}</div>}

            {isLoading && <div>Loading...</div>}
*/}
            <UserForm submitText="Create" submitAction={onSubmit} />
                </CardContent>
            </Card>
        </Box>
    )
}
