import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const MuiDrawer = () => {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  return (
    <>
        <IconButton  aria-label='logo' onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
        <Drawer 
            anchor='left' 
            open={isDrawerOpen} 
            onClose={()=>setIsDrawerOpen(false)}
            >
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                {/* <Typography variant='h6' component='div'>
                    Sidepanel
                </Typography> */}
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LightbulbOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Notes</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <NotificationsNoneOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Reminder</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LabelOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Hh</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ModeOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Edit labels</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArchiveOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Archive
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <DeleteOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Trash
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Drawer>
   </>
  )
}

export default MuiDrawer
