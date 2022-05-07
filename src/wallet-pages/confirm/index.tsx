import { useNavigate } from 'react-router-dom';

import { TextField, Grid, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useTransactionService from '../../utils/useTransactionService';

export default function Send(this: any) {
    const navigate = useNavigate();
    const { confirmTransaction, state } = useTransactionService();

    const transaction = {
        form: {

            publicAddress: '',
            amount: 0
        }
    }

    const handleClose = () => {
        navigate('/')
    }

    const handleSend = () => {
        const { form } = transaction;
        if (!form.publicAddress || !form.amount) { return; }
        const amount = Number(form.amount);
        if (amount > 0 && amount <= state.balance) {
            confirmTransaction(form.publicAddress, amount);
            navigate('/success');
        }
    };


    const handleChange = (field: string, value: string) => {
        const fTransaction: any = { ...transaction };

        fTransaction.form[field] = value;
    }


    return (
        <div style={{flexGrow: 1,paddingTop: '15px',paddingLeft: '5px',paddingRight: '5px',minHeight: '550px',position: 'relative'}}>
            <Grid container direction="row" alignItems="center" justifyItems="space-between" spacing={4} sx={{minHeight: '100px', borderBottom: '1px solid #f4f6f7', paddingLeft: '15px', paddingRight: '15px'}}>
                <Grid item xs={11}>
                    <Typography variant="h6" component="h2" fontWeight="600">
                        Send Ether
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <form autoComplete="off">
                <Grid container direction="row" alignItems="center" justifyItems="space-between" spacing={4}>
                    <Grid item xs={12}>
                        <Typography>Add Recipient</Typography>
                        <TextField fullWidth id="publicAddress" variant="standard"
                            placeholder="Enter Public Address" autoComplete="off"
                            onChange={(event) => handleChange('publicAddress', event.target.value)}
                            inputProps={{ maxLength: 38 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography>ETH Amount To Transfer</Typography>
                        <TextField fullWidth id="amount" type="number"  variant="standard"
                            placeholder="Enter Amount" autoComplete="off"
                            onChange={(event) => handleChange('amount', event.target.value)}
                        />
                    </Grid>
                </Grid>
            </form>

            <Grid container direction="row" alignItems="flex-end" justifyItems="space-evenly" spacing={4} sx={{position: 'absolute', bottom: 0,}}>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" sx={{border: '2px solid black',color: 'black', '&:hover': {border:"2px solid grey" }}} onClick={handleClose}>
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" color="primary" disableElevation onClick={handleSend}>
                        Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}