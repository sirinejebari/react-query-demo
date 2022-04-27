import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

import {User} from "../../definitions/user";
import {TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type UserFormProps = { user?: User, submitText: string, submitAction: (user: User) => void }

export const UserForm: React.FC<UserFormProps> = ({user, submitText, submitAction}) => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        defaultValues: user || {},
    })

    const history = useNavigate()

    return (
        <Box sx={{flexGrow: 1}}>

            <form noValidate onSubmit={handleSubmit(submitAction)}>

                <Grid container rowSpacing={4} columnSpacing={2}>

                    {user && (
                        <Grid item container rowSpacing={4} columnSpacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="User ID"
                                    type="text"
                                    disabled
                                    {...register('id', {required: true})}
                                />
                            </Grid>
                        </Grid>
                    )}


                    <Grid item container rowSpacing={4} columnSpacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                type="text"
                                error={!!errors.first_name}
                                helperText={errors.first_name && errors.first_name.type === 'required' && 'First Name is required'}
                                {...register('first_name', {required: true})}
                            />
                        </Grid>
                        <Grid item xs={4}>

                            <TextField
                                error={!!errors.last_name}
                                helperText={errors.last_name && errors.last_name.type === 'required' && 'Last Name is required'}
                                required
                                id="outlined-required"
                                label="Last Name"
                                type="text"
                                {...register('last_name', {required: true})}
                            />
                        </Grid>

                    </Grid>

                    <Grid item container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                type="text"
                                error={!!errors.email}
                                helperText={(errors.email && errors.email.type === 'required' && 'Email is required') || (errors.email && errors.email.type === 'pattern' && 'Provide a valid email address')}
                                {...register('email', {required: true})}
                            />
                        </Grid>
                        <Grid item xs={4}>

                            <FormControl error={!!errors.gender}>
                                <FormLabel  id="gender">Gender</FormLabel>
                                <RadioGroup row
                                            value={user && user.gender || "Female"}
                                            {...register('gender', {required: true})}
                                            aria-labelledby="gender"
                                            name="radio-buttons-group"

                                >
                                    <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                                    <FormControlLabel value="Male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="Other" control={<Radio/>} label="Other"/>
                                </RadioGroup>
                                {errors.gender && <FormHelperText>Gender is required</FormHelperText>}

                            </FormControl>
                        </Grid>

                    </Grid>


                </Grid>

                <Grid sx={{marginTop: "40px"}} container rowSpacing={4} columnSpacing={2}>
                    <Grid item>

                        <Button type="submit" variant="contained"> {submitText}</Button>
                    </Grid>
                    <Grid item>

                        <Button onClick={() => history(-1)} variant="outlined">Back</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}