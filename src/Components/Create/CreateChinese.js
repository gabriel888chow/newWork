import React, { useState } from 'react';
import { connect } from 'react-redux';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

function CreateChinese() {
    // Card Front (In Chinese)
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [officephonenumber, setOfficePhoneNumber] = useState("");
    const [mobilephonenumber, setMobilePhoneNumber] = useState("");
    const [organization, setOrganization] = useState("");
    const [urladdress, setURLaddress] = useState("");
    const [address, setAddress] = useState("");

    const addvcardChinese = () => {
        // console.log(name);
        Axios.post('http://localhost:8080/create', {
            firstname: firstname,
            lastname: lastname,
            department: department,
            jobtitle: jobtitle,
            email: email,
            officephonenumber: officephonenumber,
            mobilephonenumber: mobilephonenumber,
            organization: organization,
            urladdress: urladdress,
            address: address,
            language: "Chinese"
        }).then(() => {
            console.log("success addvcardChinese", firstname);
        });
    };

    return (

        <Paper
            elevation={0}
            variant="outlined"
            sx={{
                m: 2,
                p: 4,
                border: "1px solid grey",
            }}
        >


            <Grid container spacing={2}>
                {/* -------------------------------------------------------------------Title------------------------------------------------------------------ */}
                <Grid item xs={12}>
                    <Typography variant='h4' align="center">
                        vCard QR Code Generator
                    </Typography>
                </Grid>
                {/* -------------------------------------------------------------------Title------------------------------------------------------------------ */}

                {/* -------------------------------------------------------------------In Chinese------------------------------------------------------------------ */}
                <Grid item xs={12}>
                    <Typography variant='h5' align="start" >
                        vCard (In Chinese)
                    </Typography>
                </Grid>
                {/* -------------------------------------------------------------------In Chinese------------------------------------------------------------------ */}

                {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}
                <Grid item xs={12} sm={6} md={6} xl={6}>
                    <TextField
                        required
                        id="FirstName"
                        label="名稱"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setFirstName(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={6} xl={6}>
                    <TextField
                        required
                        id="LastName"
                        label="姓氏"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setLastName(event.target.value); }}
                        fullWidth
                    />
                </Grid>


                {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}

                {/* -------------------------------------------------------------------2nd row------------------------------------------------------------------ */}
                <Grid item xs={12} sm={6} md={6} xl={6}>
                    <TextField
                        required
                        id="Department"
                        label="部門"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setDepartment(event.target.value); }}
                        fullWidth
                    />
                </Grid>



                <Grid item xs={12} sm={6} md={6} xl={6}>
                    <TextField
                        required
                        id="JobTitle"
                        label="職稱"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setJobTitle(event.target.value); }}
                        fullWidth
                    />
                </Grid>
                {/* -------------------------------------------------------------------2nd row------------------------------------------------------------------ */}


                {/* -------------------------------------------------------------------3rd row------------------------------------------------------------------ */}
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <TextField
                        required
                        id="Email"
                        label="電郵"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setEmail(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <TextField
                        required
                        id="OfficePhoneNumber"
                        label="辦公電話號碼"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setOfficePhoneNumber(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <TextField
                        required
                        id="MobilePhoneNumber"
                        label="手機號碼"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setMobilePhoneNumber(event.target.value); }}
                        fullWidth
                    />
                </Grid>
                {/* -------------------------------------------------------------------3rd row------------------------------------------------------------------ */}

                {/* -------------------------------------------------------------------4th row------------------------------------------------------------------ */}
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <TextField
                        required
                        id="Organization"
                        label="組織"
                        size="small"
                        defaultValue="香港理工大學"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setOrganization(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <TextField
                        required
                        id="URLaddress"
                        label="網址地址"
                        size="small"
                        defaultValue="www.polyu.edu.hk"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setURLaddress(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <TextField
                        required
                        id="Address"
                        label="地址"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setAddress(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}
                <Grid item xs={6} >
                    <Stack spacing={2} direction="row" align="center">
                        {/* <Button variant="contained" > */}
                        <Button variant="contained" href="#contained-buttons" onClick={addvcardChinese}>
                            Save
                        </Button>

                        <Button variant="contained" >
                            {/* <Button variant="contained" href="#contained-buttons" onClick={addEmployee}> */}
                            Create QR Code
                        </Button>
                    </Stack>
                </Grid>
                {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}

            </Grid>
        </Paper>


    )
}

export default connect()(CreateChinese)