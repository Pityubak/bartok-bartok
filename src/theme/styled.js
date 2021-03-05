import { ListItem, ListItemIcon, ListItemText, withStyles } from "@material-ui/core";

export const StyledListItem=withStyles({
    root:{
        width:"100%",
        background:"#A1171B",
        color:"#fff",
        transition:"all .4s ease",
        '&:hover':{
            background:"#781115"
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