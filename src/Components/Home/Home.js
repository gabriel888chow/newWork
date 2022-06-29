import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Vcard from '../Vcard/Vcard';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OrcidTable from '../ORCID/OrcidTable';

// import { createRoot } from 'react-dom/client';
// import { ReactSVG } from 'react-svg';

// --------------------------------------------Modal--------------------------------------------
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
// };

// function ChildModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <React.Fragment>
//             <Button onClick={handleOpen}>Open Child Modal</Button>
//             <Modal
//                 hideBackdrop
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="child-modal-title"
//                 aria-describedby="child-modal-description"
//             >
//                 <Box sx={{ ...style, width: 200 }}>
//                     <h2 id="child-modal-title">Text in a child modal</h2>
//                     <p id="child-modal-description">
//                         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                     </p>
//                     <Button onClick={handleClose}>Close Child Modal</Button>
//                 </Box>
//             </Modal>
//         </React.Fragment>
//     );
// }

// --------------------------------------------Modal--------------------------------------------



function Home() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [department, setdepartment] = useState("");
    const [jobtitle, setjobtitle] = useState("");
    const [email, setemail] = useState("");
    const [officephonenumber, setofficephonenumber] = useState("");
    const [mobilephonenumber, setmobilephonenumber] = useState("");
    const [organization, setorganization] = useState("");
    const [urladdress, seturladdress] = useState("");
    const [address, setaddress] = useState("");

    const [vcardListEnglish, setvCardListEnglish] = useState([]);
    const [vcardListChinese, setvCardListChinese] = useState([]);

    const getVcardDataInEnglish = async () => {
        await Axios.get("http://localhost:8080/data").then((response) => {
            setvCardListEnglish(
                response.data.filter((rec) => rec.language === "English")
            );
        });
    }

    const getVcardDataInChinese = async () => {
        await Axios.get("http://localhost:8080/data").then((response) => {
            setvCardListChinese(
                response.data.filter((rec) => rec.language === "Chinese")
            );
        });
    }

    const getOrganization = (language) => {
        if (language === "Chinese") {
            return "香港理工大學";
        } else if (language === "English") {
            return "The Hong Kong Polytechnic University";
        } else {
            return ""
        }
    }
    // const qrcodePost = async (id) => {
    //     await Axios.post(`http://localhost:8080/qrcode/${id}`).then((response) => {
    //         console.log(response.data);
    //         console.log('show the code');
    //     });
    //     console.log("get the data");
    //     Axios.get("http://localhost:8080/data").then((data) => {
    //         console.log(data.data);
    //         setNameCardList(response.data);
    //     });
    // };
    const renderOrganization = (props) => {
        const isOrgenizationInChinese = props.row.language;
        return (
            getOrganization(isOrgenizationInChinese)
        )
    }
    // --------------------------------------------Button in DataGrid--------------------------------------------
    const RenderDate = (props) => {

        // console.log("btn props:", props.row.firstname)


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

        // const container = document.getElementById('root')
        // const root = createRoot(container)
        // root.render(<ReactSVG src="svg.svg" />)

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
                        setfirstname(props?.row?.firstname);
                        setlastname(props?.row?.lastname);
                        setdepartment(props?.row?.department);
                        setjobtitle(props?.row?.jobtitle);
                        setemail(props?.row?.email);
                        setofficephonenumber(props?.row?.officephonenumber);
                        setmobilephonenumber(props?.row?.mobilephonenumber);
                        setorganization(props?.row?.organization);
                        seturladdress(props?.row?.urladdress);
                        setaddress(props?.row?.address);
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
                        <Typography id="keep-mounted-modal-title" variant="h4" sx={{ fontWeight: 'bold' }}>
                            Qr Code
                        </Typography>
                        <Vcard
                            firstname={firstname}
                            lastname={lastname}
                            department={department}
                            jobtitle={jobtitle}
                            email={email}
                            officephonenumber={officephonenumber}
                            mobilephonenumber={mobilephonenumber}
                            organization={organization}
                            urladdress={urladdress}
                            address={address}
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



    const columns1 = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstname', headerName: 'First name', width: 130 },
        { field: 'lastname', headerName: 'Last name', width: 130 },
        { field: 'department', headerName: 'Department', width: 250 },
        { field: 'jobtitle', headerName: 'Jobtitle', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'officephonenumber', headerName: 'Office Phone Number', width: 200 },
        { field: 'mobilephonenumber', headerName: 'Mobile Phone Number', width: 200 },
        { field: 'organization', headerName: 'Organization', width: 300, renderCell: renderOrganization },
        { field: 'urladdress', headerName: 'URL Address', width: 200 },
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'qrcode', headerName: 'qrcode', width: 200, renderCell: RenderDate },
    ];

    const columns2 = [
        { field: 'id', headerName: '號碼', width: 70 },
        { field: 'firstname', headerName: '名稱', width: 130 },
        { field: 'lastname', headerName: '姓氏', width: 130 },
        { field: 'department', headerName: '部門', width: 250 },
        { field: 'jobtitle', headerName: '職稱', width: 200 },
        { field: 'email', headerName: '電郵', width: 200 },
        { field: 'officephonenumber', headerName: '辦公電話號碼', width: 200 },
        { field: 'mobilephonenumber', headerName: '手機號碼', width: 200 },
        { field: 'organization', headerName: '組織', width: 300, renderCell: renderOrganization },
        { field: 'urladdress', headerName: '網址地址', width: 200 },
        { field: 'address', headerName: '地址', width: 300 },
        { field: 'qrcode', headerName: '二維碼', width: 200, renderCell: RenderDate },
    ];

    // useEffect(() => {
    //     if (namecardList?.length > 0) {
    //         setRow(namecardList.map((val, key) => { return ({ id: val.id, firstname: val.firstname }) }))
    //     }
    // }, [namecardList])

    // const rows = namecardList.map((val, key) => { return ({ id: val.id, firstname: val.firstname }) })

    // console.log("namecardList,", namecardList)




    return (
        <Container maxWidth="xl" >
            {/* --------------------------------------------eng------------------------------------------------ */}
            <Grid item xs={12}>
                <Button onClick={() => { getVcardDataInEnglish() }}>
                    show
                </Button>

                <Link to="/create" activeclassname="active" >
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    English vCard Record
                </Typography>
            </Grid>

            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={vcardListEnglish}
                    columns={columns1}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <br />
            {/* --------------------------------------------eng------------------------------------------------ */}



            {/* --------------------------------------------chi------------------------------------------------ */}
            <Button onClick={() => { getVcardDataInChinese() }}>
                show
            </Button>
            <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    Chinese vCard Record
                </Typography>
            </Grid>

            <br />
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={vcardListChinese}
                    columns={columns2}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            {/* --------------------------------------------chi------------------------------------------------ */}

            <br />
            <br />
            <br />
            <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    Orcid Record
                </Typography>
            </Grid>
            <br />
            <OrcidTable />
        </Container>
    );

}


export default Home;
