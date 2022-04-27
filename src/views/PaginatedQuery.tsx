import React, { useState } from 'react'
import {QueryFunctionContext, useQuery, useQueryClient} from 'react-query'
import {UsersTable} from "../components/UsersTable/UsersTable";
import {User} from "../definitions/user";
import {Typography} from "@mui/material";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";



const fetchUsers = async ({queryKey}: QueryFunctionContext): Promise<User[]> => {
    const [key, page, rowsPerPage] = queryKey;

    const response = await fetch(
        `http://localhost:3004/users?_page=${page}&_limit=${rowsPerPage}`
    )
    return response.json()
}

export const PaginatedQuery: React.FC = () => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const queryClient = useQueryClient();

    //const { data, isLoading, isError, status, error } = //TODO implement with useInfiniteQuery hook*/
    //console.log(status, data)

    // Prefetch the next page!
    /*React.useEffect(() => {
        //TODO prefetch next batch of data
    }, [data, page, queryClient, rowsPerPage]);*/



    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <Typography variant="h3" component="div" gutterBottom style={{textAlign: "center", padding: "20px"}}>
                Paginated Query Example
            </Typography>
            <div>
             {/*   {isError && <div>{error.message}</div>}

                {isLoading && <div>Loading...</div>}

                {status === 'success' && <UsersTable users={data} />}*/}
            </div>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={250}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                                'aria-label': 'rows per page',
                            },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableRow>
            </TableFooter>

        </div>
    )
}
