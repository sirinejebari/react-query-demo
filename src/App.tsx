import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {BasicQuery} from "./views/BasicQuery";
import {InfiniteQuery} from "./views/InfiniteQuery";
import {PaginatedQuery} from "./views/PaginatedQuery";
import {EditUser} from "./views/EditUser";
import {CreateUser} from "./views/CreateUser";
import {Navigation} from "./components/Navigation/Navigation";
import Box from "@mui/material/Box";


function App() {
    // Create a client
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: false, //network reconnected
                retry: false, //retry infinitely when fail
                staleTime: 5 * 60 * 1000, //ms
            },
        },
    })


    return (

        <Box sx={{ width: '100vw', height: '100%', bgcolor: '#e7ebf0' }}>
            <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Navigation/>

                        <Routes>
                            <Route path="/" element={<BasicQuery/>}/>
                            <Route path="/infinite" element={<InfiniteQuery/>}/>
                            <Route path="/paginated" element={<PaginatedQuery/>}/>

                            <Route element={<EditUser/>} path="/user/edit/:id"/>
                            <Route element={<CreateUser/>} path="/user/create"/>


                        </Routes>
                    </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </Box>
    )
}

export default App