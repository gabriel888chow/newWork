import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// import Vcard from '../Vcard/Vcard';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
import { QRCodeSVG } from 'qrcode.react';


function OrcidTable() {
    const [orcidURL, setOricdURL] = useState("");

    const [orcidList, setOrcidList] = useState([]);
    const getoricddata = async () => {
        await Axios.get("http://localhost:8080/data/orcid").then((response) => {
            console.log(response.data)
            setOrcidList(response.data);
        });
    }


    // --------------------------------------------Button in DataGrid--------------------------------------------
    const RenderDate = (props) => {

        // console.log("btn props:", props.row.firstname)
        console.log("btn props:", props.row.orcidURL)

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
        };

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true)
        };
        const handleClose = () => setOpen(false);

        const { hasFocus, value } = props;
        const buttonElement = React.useRef(null);
        const rippleRef = React.useRef(null);

        React.useLayoutEffect(() => {
            if (hasFocus) {
                const input = buttonElement.current?.querySelector('input');
                input?.focus();
            } else if (rippleRef.current) {
                // Only available in @mui/material v5.4.1 or later
                rippleRef.current.stop({});
            }
        }, [hasFocus]);

        return (
            <strong>
                {/* {value?.getFullYear() ?? ''} */}
                <Button
                    component="button"
                    ref={buttonElement}
                    touchRippleRef={rippleRef}
                    variant="contained"
                    size="small"
                    style={{ marginLeft: 16 }}
                    // Remove button from tab sequence when cell does not have focus
                    tabIndex={hasFocus ? 0 : -1}
                    onKeyDown={(event) => {
                        if (event.key === ' ') {
                            // Prevent key navigation when focus is on button
                            event.stopPropagation();
                        }
                    }}
                    onClick={() => {
                        setOpen(true);
                        setOricdURL(props?.row?.orcidURL);
                    }}
                >
                    Open
                </Button>

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" >
                            Qr Code
                        </Typography>
                        <QRCodeSVG
                            value={orcidURL}
                        />
                        <Button onClick={handleClose}>Close</Button>
                        <Button>
                            save QRcode
                        </Button>
                        {/* <ReactSVG src="svg.svg" /> */}
                    </Box>
                </Modal>

            </strong>
        );
    };

    console.log("qrcode orcidURL", orcidURL)


    RenderDate.propTypes = {
        /**
         * If true, the cell is the active element.
         */
        hasFocus: PropTypes.bool.isRequired,
        /**
         * The cell value, but if the column has valueGetter, use getValue.
         */
        value: PropTypes.instanceOf(Date),
    };

    // --------------------------------------------Button in DataGrid--------------------------------------------
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'orcidURL', headerName: 'ORCID', width: 400 },
        { field: 'orcidQrcode', headerName: 'ORCID qrcode', width: 200, renderCell: RenderDate },
    ];

    return (
        // <Container maxWidth="xl" >
        <>
            <Grid item xs={12}>
                <Button onClick={() => { getoricddata() }}>
                    show
                </Button>
            </Grid>

            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={orcidList}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </>
        // </Container> 
    )
}

export default OrcidTable;
