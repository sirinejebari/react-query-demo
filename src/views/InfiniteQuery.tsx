import React from 'react'
import {useInfiniteQuery} from 'react-query'
import axios from 'axios'
import {User} from "../definitions/user";
import {List, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const parseLinkHeader = (linkHeader: string) => {
    const linkHeadersArray = linkHeader
        .split(', ')
        .map((header) => header.split('; '))
    const linkHeadersMap = linkHeadersArray.map((header) => {
        const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
        const thisHeaderUrl = header[0].slice(1, -1)
        return [thisHeaderRel, thisHeaderUrl]
    })
    return Object.fromEntries(linkHeadersMap)
}

export const InfiniteQuery: React.FC = () => {
    const pageLimit = 5

    const fetchUsers = ({pageParam = 1}) =>
        axios.get(
            `http://localhost:3004/users?_page=${pageParam}&_limit=${pageLimit}`
        )

/*    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = //TODO implement with useInfiniteQuery hook*/

    let userList

  /*  if (data) {
        userList = data.pages.map((page, index) => (
            <React.Fragment key={index}>
                {page.data.map((user: User) => (
                    <ListItem disablePadding key={user.id}>
                        <ListItemButton>

                            <ListItemText primary={`${user.id}. ${user.first_name} ${user.last_name}`}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </React.Fragment>
        ))
    }*/

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center"}}>
            <Typography variant="h3" component="div" gutterBottom style={{textAlign: "center", padding: "20px"}}>
                Infinite Query Example
            </Typography>

            <div>
               {/* {error && <div>An error occurred: {error.message}</div>}

                {isFetchingNextPage && <div>Fetching Next Page...</div>}

             */}   {status === 'success' &&
                <List sx={{width: '100%', maxWidth: 360, margin: "auto", bgcolor: 'white'}}>{userList}</List>}
            </div>
            <Grid sx={{marginTop: "40px"}}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item>

                   {/* <Button onClick={() => fetchNextPage()}
                            disabled={!hasNextPage || isFetchingNextPage} type="submit" variant="contained"> Load
                        More...</Button>*/}
                </Grid>
            </Grid>
        </div>
    )
}
