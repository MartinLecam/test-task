import { useNavigate } from 'react-router-dom';

import { Avatar, Grid, Typography, IconButton, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { ReactComponent as BlankLogo } from '../../media/blank-logo.svg';
import { ReactComponent as EthLogo } from '../../media/eth-logo.svg';


import Constants from '../../utils/constants';
import { ellipsisText } from '../../utils/functions';

import { Transaction } from '../../services/TransactionsService';
import useTransactionService from '../../utils/useTransactionService';

function Balance() {
    const navigate = useNavigate();
    const { state } = useTransactionService();

    const handleSend = () => {
        navigate('/confirm');
    };

    return (
        <Grid item container xs={12}  direction="row" alignItems="center" justifyContent="center" sx={{backgroundColor: '#eaf3fd', borderRadius: '7px', textAlign: 'center'}}>
            <Grid item xs={12}>
                <Typography variant="h4" fontWeight={400}>
                    {state.balance} ETH
                </Typography>
                <Typography variant="subtitle1" component="h3" color="textSecondary">
                    ${(state.balance * state.ethPrice).toFixed(2)} USD
                </Typography>
            </Grid>
            <Grid item xs={12} onClick={handleSend} sx={{marginTop:'30px'}}>
                <IconButton sx={{backgroundColor:"blue",color:"white", '&:hover': {backgroundColor:"blue" }}}>
                    <ArrowUpwardIcon />
                </IconButton>
            </Grid>
            <Grid item xs={12} onClick={handleSend} >
                <Button>
                    <Typography variant="subtitle1" component="h3" color="textPrimary" fontWeight={600}>
                        Send
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

function Transactions() {
    const { state } = useTransactionService();
    const current = new Date();
    const date = `${String(current.getDate()).padStart(2,'0')}-${String(current.getMonth()+1).padStart(2,'0')}-${current.getFullYear()} ${String(current.getHours()).padStart(2,'0')}:${String(current.getMinutes()).padStart(2,'0')}`;

    return (
        <Grid container direction="row" alignItems="center" spacing={4} justifyContent="flex-start">
            {state.transactions.map((transaction: Transaction) => (
                <Grid item container key={String(transaction.id)} xs={12} direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item xs={1}>
                        <Avatar sx={{backgroundColor:'white', width:'25px'}}>
                            <EthLogo />
                        </Avatar>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body2" fontWeight={600}>
                            Sent Ether
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {date}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} justifyContent="flex-end">
                        <Typography variant="body2" fontWeight={600}>
                            -{transaction.value} ETH
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            -${transaction.value * state.ethPrice} USD
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default function Home() {
    return (
        <div style={{flexGrow:1,paddingTop:'15px'}}>
            <Grid container direction="row" alignItems="center" spacing={4} justifyContent="flex-start">
                <Grid item>
                    <BlankLogo style={{ height: 53, width: 36 }}/>
                </Grid>
                <Grid item xs={10}>
                    <Typography fontWeight={600}>
                        Account 1
                    </Typography>
                    <Typography color="textSecondary">
                        {ellipsisText(Constants.publicAddress)}
                    </Typography>
                </Grid>

                <Balance />
            </Grid>

            <Transactions />

        </div>
    )
}
