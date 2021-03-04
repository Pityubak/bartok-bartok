import { ListItem, ListItemIcon, ListItemText, withStyles } from "@material-ui/core";

export const StyledListItem=withStyles({
    root:{
        background:"#6A0971",
        color:"#eee",
        
        '&:hover':{
            background:"#47064B"
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
        color:"#eee",
    }
})(ListItemIcon)