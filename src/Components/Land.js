import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "./Land.css";
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core';
// import background from "../sustainability.jpg";

const useStyles = makeStyles(theme => ({
    title: {
        "margin": 0,
        "position": "absolute",
        "top": "50%",
        "left": "11%",
        "margin-right": "-90%",
        "transform": "translate(-50%, -150%)",
        "color": "white"
    },
    blurb: {
        "margin": 0,
        "position": "absolute",
        "top": "50%",
        "left": "30%",
        "margin-right": "-70%",
        "transform": "translate(-50%, -50%)",
        "color": "white"
    }
}
));

export default function Land() {
    const classes = useStyles();
    return (
        <div className="land">
            <div className="main" >
                <Typography className={classes.title} variant="h2" noWrap>
                    Scrutable
                </Typography>
                <Typography className={classes.blurb} variant="h3" noWrap>
                    Scrutanize the makers of your consumables.
                </Typography>
            </div>
            <div className="body">
                <Typography className={classes.body} variant="h5" noWrap>
                    In a world where market share can drop by 15% because of a tainted supply chain, a de-facto standard for ethical compliance is needed more than ever.
 
                </Typography>
            </div>
        </div>
    );
}
