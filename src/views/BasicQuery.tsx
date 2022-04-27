import React, {useEffect} from 'react'
import {useQuery} from 'react-query'

import {User} from "../definitions/user";
import {UsersTable} from "../components/UsersTable/UsersTable";
import {Typography} from "@mui/material";

export const BasicQuery: React.FC = () => {
    const fetchAllUsers = async () =>
        await (await fetch('http://localhost:3004/users')).json()

    //const {data, error, status} = {} //TODO implement with useQuery hook

    //status : idle, loading, error or success.

   /* useEffect(() => {
        console.log("status is ", status)
    }, [status])*/

    return (
        <div>
            <Typography variant="h3" component="div" gutterBottom style={{textAlign: "center", padding: "20px"}}>
                Basic Query Example
            </Typography>
            <div>
               {/* {status === 'error' && <div>{error.message}</div>}

                {status === 'loading' && <div>
                    Loading...</div>}

                {status === 'success' && <UsersTable users={data}/>}*/}
            </div>
        </div>
    )
}
