import './App.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function Body(props) {
  const navigate = useNavigate();

  if (props.status === "ok")
    return (
      <>
      </>
    )
  else
    return (
      <div className="body">
        <Button variant="text" disableRipple={true} onClick={() => {navigate('/plex'); window.location.reload(false);}} sx={{color: '#c18605', display: 'block', textTransform: "none", borderRadius: 3, mr: 1, backgroundColor: '#1c3354', '&:hover': {color: '#b95b0f', backgroundColor: '#1d3354'}}} >
          <b style={{fontSize: 20}}>Plex</b>
        </Button>
      </div>
    );
}
