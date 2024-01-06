import { Button } from "@mui/material";

function WelcomeScreen(props) {
    return ( 
        <div>
            <div style={{textAlign:"center"}}>
           
            <p>ჩათის დასაწყებად მიაჭირეთ ღილაკს</p>
          
        <Button
        onClick={props.handleStartChat}
        size="large"
        variant="contained"
>მოძებნე პარტნიორი</Button>
        </div>
        </div>
     );
}

export default WelcomeScreen;