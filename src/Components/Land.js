import React from 'react';
import "./Land.css";
import Typography from "@material-ui/core/Typography"
// import { makeStyles } from '@material-ui/core';
// import background from "../sustainability.jpg";

// const useStyles = makeStyles(theme => ({
//     title: {
//         "position": "absolute",
//         "top": "50%",
//         "left": "20%",
//         "transform": "translate(-50%, -150%)",
//         "color": "white"
//     },
//     blurb: {
//         "position": "absolute",
//         "top": "50%",
//         "left": "50%",
//         "transform": "translate(-50%, -50%)",
//         "color": "white"
//     }
// }
// ));

export default function Land() {
    // const classes = useStyles();
    return (
        <div className="land">
            <div className="main" >
            <div className="title-subtext" variant="h3" noWrap>
                    Scrutanize the makers of your consumables.
                </div>
                <div className="title-header" variant="h2" noWrap>
                    SCRUTABLE
                </div>                
            </div>
            <div className="body">
                <div className="platform-body">
                    OUR PLATFORM
                </div>
                <div className="info-cards">
                    <div className="title-card">
                        <div>
                            <i class="material-icons title-icon"> search </i>
                        </div>                    
                        <div className="icon-subtext">
                            COMPANY ETHICS
                        </div>
                        <div className="subtext-info">
                            Employees deliver numeric reports on the ethics of their companies
                        </div>
                    </div>
                    <div className="title-card">
                        <div>
                            <i class="material-icons title-icon"> bar_chart </i>
                        </div>                    
                        <div className="icon-subtext">
                            DATA ANALYTICS
                        </div>
                        <div className="subtext-info">
                            Scrutible analyzes reports and generates ethical credit scores
                        </div>
                    </div>
                    <div className="title-card">
                        <div>
                            <i class="material-icons title-icon"> message </i>
                        </div>                    
                        <div className="icon-subtext">
                            USER FEEDBACK
                        </div>
                        <div className="subtext-info">
                            Consumers and public provide extra qualitative data through comments
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
}
