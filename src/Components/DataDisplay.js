import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography';
import './DataDisplay.css'

const useStyles = makeStyles({
  card: {
    float: "left",
    margin: "1%",
    maxWidth: "48%"
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

export default function DataDisplay(props) {
  const { setDetailOpen } = props;
  const SINGLE_COMPANY_FETCH = "";
  const [data, setData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    setDetailOpen(true);
    fetch(SINGLE_COMPANY_FETCH)
      .then(res => res.json())
      .then(data => setData(data));
    return (() => {
      setDetailOpen(false);
    })
  })

  const getEthicsScore = () => {
    return [
      ['Time', 'Ethical Score'],
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

  const getQ1 = () => {
    return [
      ["I feel that I am being paid equitably for my service.", "Response"],
      ["Strongly Disagree", 942],
      ["Disagree", 873],
      ["Indifferent", 452],
      ["Agree", 285],
      ["Strongly Agree", 921]
    ]
  }

  const getQ2 = () => {
    return [
      ["My workplace promotes recycling programs and initiatives.", "Response"],
      ["Strongly Disagree", 239],
      ["Disagree", 1000],
      ["Indifferent", 532],
      ["Agree", 610],
      ["Strongly Agree", 231]
    ]
  }

  const getScore = () => {
    return [
      ['Month', 'min', 'Q1', 'Q3', 'max'],
      ['Jan', 20, 28, 38, 45],
      ['Feb', 31, 38, 55, 66],
      ['Mar', 50, 55, 77, 80],
      ['Apr', 77, 77, 66, 50],
      ['May', 68, 66, 22, 15],
      ['June', 10, 32, 51, 99],
      ['July', 12, 23, 34, 56],
      ['Aug', 40, 60, 61, 77],
      ['Sept', 50, 56, 72, 80],
      ['Oct', 51, 51, 52, 52],
      ['Nov', 51, 66, 68, 70],
      ['Dec', 51, 57, 80, 81],
    ]
  }

  return (
    <div className="datadisplay">
      <div className="graph-header">
        View Trends for this Company over Time
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textprimary" gutterBottom>
            Overall Ethics Score 2019
          </Typography>
          <Chart
            width={'100%'}
            chartType="LineChart"
            loader={<div>LOADING</div>}
            data={getEthicsScore()}>
          </Chart>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textprimary" gutterBottom>
            Overall Social Score 2019
          </Typography>
          <Chart
            width={'100%'}
            chartType="CandlestickChart"
            loader={<div>LOADING</div>}
            data={getScore()}
            options={{
              legend: 'none',
            }}
          />
        </CardContent>
      </Card>
      <div className="graph-header">
        Analyze Individual Question Responses
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textprimary" gutterBottom>
            Worker Rights Survey Q.1
          </Typography>
          <Chart
            width={'100%'}
            chartType="PieChart"
            loader={<div>LOADING</div>}
            data={getQ1()}
            options={{
              title: 'I feel that I am being paid equitably for my service.',
            }}
          >
          </Chart>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textprimary" gutterBottom>
            Environment Survey Q.1
          </Typography>
          <Chart
            width={'100%'}
            chartType="PieChart"
            loader={<div>LOADING</div>}
            data={getQ2()}
            options={{
              title: 'My workplace promotes recycling programs and initiatives.',
            }}
          >
          </Chart>
        </CardContent>
      </Card>
    </div >
  );
}