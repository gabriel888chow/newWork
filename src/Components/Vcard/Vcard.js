// import VCard from 'vcard-creator';

// function Vcard(props) {
//     // Define a new myVCard
//     const myVCard = new VCard();

//     myVCard.firstName = props.firstname;
//     myVCard.lastName = props.lastname;
//     myVCard.department = props.department;
//     myVCard.title = props.jobtitle;
//     myVCard.email = props.email;
//     myVCard.officephonenumber = props.officephonenumber;
//     myVCard.faxnumber = props.faxnumber;
//     myVCard.address = props.address;
//     // myVCard.orcid = props.orcid;


//     return (
//         <div>
//             {myVCard}
//         </div>
//     )
// }

// export default Vcard;

import VCard from 'vcard-creator';
// import { QRCodeSVG } from 'qrcode.react';
import { QRCode } from 'qrcode';
import { Typography } from '@mui/material';
// import Divider from '@mui/material/Divider';

function Vcard(props) {

    // Define a new vCard
    const myVCard = new VCard()

    // Some variables
    // const lastname = 'Desloovere'
    // const firstname = 'Jeroen'
    // const additional = ''
    // const prefix = ''
    // const suffix = ''

    myVCard
        // Add personal data
        .addName(props.lastname, props.firstname)
        // Add work data
        .addCompany(props.organization)
        .addJobtitle(props.jobtitle)
        .addRole(props.department)
        .addEmail(props.email)
        .addPhoneNumber(props.officephonenumber)
        .addPhoneNumber(props.mobilephonenumber)
        .addAddress('', '', '', props.address, '', '', '', '')
        .addURL(props.urladdress)

    const QRCode = require('qrcode')

    QRCode.toCanvas(myVCard, 'sample text', { errorCorrectionLevel: 'H' }, function (error) {
        if (error) console.error(error)
        console.log('success to save qrcode!');
      })

    // console.log(myVCard.toString());


    return (
        <Typography variant='h4' align="center" >
            {/* {myVCard.toString()}
                <br />
                <QRCodeCanvas value={myVCard} size={200} />
                <br /> */}
            {/* <Divider variant="middle" /> */}
            {/* <QRCodeSVG value={myVCard} size={200} /> */}
            {QRCode}
            {/* <QRCodeCanvas value={myVCard.toString()} size={60.472441} /> */}
            {/* <Divider variant="middle" /> */}
        </Typography>
    )
}

export default Vcard;