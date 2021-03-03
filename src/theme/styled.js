import { ListItem, ListItemIcon, ListItemText, withStyles } from "@material-ui/core";

export const StyledListItem=withStyles({
    root:{
        background:"#468189",
        color:"#eee",
        
        '&:hover':{
            background:"#37666C"
        }
    },
})(ListItem);

export const StyledListItemText=withStyles({
    primary:{
        fontSize:"16px",
        fontWeight:"600"
    }
})(ListItemText)

export const StyledListItemIcon=withStyles({
    root:{
        fontSize:"32px",
        color:"#eee",
    }
})(ListItemIcon)