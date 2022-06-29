import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Axios from 'axios';

function Orcid() {
    const [orcidURL, setOrcidURL] = useState("");

    const addorcid = () => {
        // console.log(name);
        Axios.post('http://localhost:8080/create/orcid', {
            orcidURL: "https://orcid.org/" + orcidURL
        }).then(() => {
            console.log("success addorcid", orcidURL);
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

                <Grid item xs={12}>
                    <Typography variant='h5' align="center" >
                        ORCID ID QR Code Generator
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography variant='h5'>
                        https://orcid.org/
                    </Typography>
                </Grid>

                <Grid item xs={10} >
                    <TextField
                        required
                        id="ORCID"
                        label="0000-0000-0000-0000"
                        size="small"
                        multiline
                        maxRows={2}
                        onChange={(event) => { setOrcidURL(event.target.value); }}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={6} >
                    <Button variant="contained" href="#contained-buttons" onClick={addorcid}>
                        Save
                    </Button>
                </Grid>
                {/* <QRCodeCanvas value={myVCard.toString()} size={60.472441} /> */}
            </Grid>
        </Paper>
    )

}

export default (Orcid)