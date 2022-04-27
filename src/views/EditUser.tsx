import React from 'react'
import axios from 'axios'
import {QueryFunctionContext, useMutation, useQuery, useQueryClient} from 'react-query'
import {Navigate, useParams} from 'react-router-dom'

import {User} from "../definitions/user";
import {UserForm} from "../components/UserForm/UserForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";

const fetchUser = async ({queryKey}: QueryFunctionContext): Promise<User> => {
    const [key, id] = queryKey

    if (typeof id === 'undefined') return Promise.reject(new Error('Invalid id'))
    const response = await fetch(`http://localhost:3004/${key}/${id}`)

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}

export const EditUser: React.FC = () => {
    const {id} = useParams()
    //const {isLoading, isError, data, error, refetch} = {} //TODO implement with useQuery hook

    const mutation = {} // TODO implement mutation

   // const {isSuccess} = mutation


    const onSubmit = async (data: User) => {
        //TODO use mutation to save  user
    }
    const queryClient = useQueryClient();

    /*if (isSuccess) {
        return <Navigate to="/"/>
    }*/


    return (
        <Box sx={{flexGrow: 1, padding: "30px"}}>
            <Card>
                <CardContent>
                    <h2>Edit User</h2>
                    <div>
                        <>
                            {/*{isError && <div>{error.message}</div>}

                            {isLoading && <div>Loading...</div>}

                            {data && (
                                <UserForm user={data} submitText="Update" submitAction={onSubmit}/>
                            )}*/}
                        </>
                    </div>
                </CardContent>
            </Card>
        </Box>
    )
}
