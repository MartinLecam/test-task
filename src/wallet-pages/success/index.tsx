import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactComponent as Success } from '../../media/success.svg';

export default function Done() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div style={{flexGrow: 1,paddingTop: '15px',paddingLeft: '5px',paddingRight: '5px',minHeight: '550px',position: 'relative'}}>
            <Grid container direction="column" alignItems="center" justifyContent="flex-start" spacing={4} style={{minHeight: '500px', textAlign: 'center', paddingTop:'100px'}}>
                <Grid item xs={12}>
                    <Success style={{maxWidth:'150px',maxHeight:'55px'}}/>
                </Grid>
                <Grid item xs={12} style={{paddingTop:'25px'}}>
                    <Typography variant="h3" fontWeight={600} >
                        Success.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{paddingTop:'15px', maxWidth:'200px'}}>
                        You've successfully sent your funds.
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Button href="#" disableElevation color="primary" endIcon={<ArrowForwardIcon />} sx={{fontWeight:'bold'}}>
                        View on Etherscan
                    </Button>
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="flex-end" justifyContent="space-evenly" spacing={4} sx={{position: 'absolute', bottom: 0,paddingRight: '15px',paddingLeft: '15px',paddingTop: '15px'}}>
                <Grid item xs={12}>
                    <Button fullWidth variant="outlined" sx={{border: '2px solid black',color: 'black', '&:hover': {border:"2px solid grey" }}} onClick={handleClose}>
                        Done
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
