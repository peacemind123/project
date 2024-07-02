import { useContext } from "react";
import {Typography, Box} from '@mui/material';
import ManagePosts from './ManagePosts'
import UserContext from "../../context/userContext";

const Profile = () => {
  const { user }= useContext(UserContext);

  return (
    <>
      <Box
        sx={{
          marginTop: 10,
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome, {user.username}
        </Typography>
        <ManagePosts user={user}/>
      </Box>
    </>
  )
}

export default Profile;