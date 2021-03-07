import { ListItem, ListItemIcon, ListItemText, withStyles } from "@material-ui/core";

export const StyledListItem=withStyles({
    root:{
        width:"100%",
        background:"#ECECEE",
        
        color:"#212121",
        transition:"all .4s ease",
        '&:hover':{
            background:"#D2D2D3",
        }
    },
})(ListItem);

export const StyledListItemText=withStyles({
    primary:{
        fontSize:"13px",
        fontWeight:"600"
    }
})(ListItemText)

export const StyledListItemIcon=withStyles({
    root:{
        fontSize:"30px",
        color:"#212121",
    }
})(ListItemIcon)