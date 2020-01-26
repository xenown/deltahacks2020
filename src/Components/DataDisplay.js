import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import { makeStyles } from "@material-ui/core/styles"
import './DataDisplay.css'

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    marginLeft: "1%",
    marginTop: "1%",
    width: "30%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: "black"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DataDisplay() {
  const SINGLE_COMPANY_FETCH = "";
  const [data, setData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    fetch(SINGLE_COMPANY_FETCH)
      .then(res => res.json())
      .then(data => setData(data));
  })

  const getEthicsScore = () => {
    return [
      ['x', 'dogs'],
      [0, 0],
      [1, 10],
      [2, 23],
      [3, 17],
      [4, 18],
      [5, 9],
      [6, 11],
      [7, 27],
      [8, 33],
      [9, 40],
      [10, 32],
      [11, 35]
    ]
  }

  return (
    <div className="datadisplay">
      <Card className={classes.card}>
        <CardHeader className={classes.title}>
          Test
        </CardHeader>
        <CardContent>
          <Chart
            width={400}
            height={300}
            chartType="LineChart"
            loader={<div>LOADING</div>}
            data={getEthicsScore()}>
          </Chart>
        </CardContent>
      </Card>
    </div >
  );
}