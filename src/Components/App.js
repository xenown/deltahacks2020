import React, { useState } from 'react';
import { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import PrimarySearchAppBar from './Navbar.js'
import Land from './Land.js'
import Search from './Search.js'
import Survey from './Survey.js'
import DataDisplay from './DataDisplay.js'
import './App.css';

export default function App() {
  const [searchbarOpen, setSearchbar] = useState(false);
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState([]);
  const [companySelected, setCompanySelected] = useState("");
  const GET_LISTINGS_URL = "";

  function createData(name, score, industry, score2, score3) {
    return { name, score, industry, score2, score3 };
  }

  useEffect(() => {
    // fetch(GET_LISTINGS_URL)
    //     .then(res => res.json())
    //     .then(data => { console.log(data); setListings(data); })
    listings.push(createData('Gap', 9.3, "Fashion", 67, 4.3));
    listings.push(createData('Nestle', 7.5, "Food", 51, 4.9));
    listings.push(createData('Alphabet', 8.8, "Technology", 24, 6.0));
    listings.push(createData('Coca-cola', 9.4, "Drink", 24, 4.0));
    listings.push(createData('Frito-Lay', 8.2, "Food", 49, 3.9));
    listings.push(createData('Energizer', 6.7, "Batteries", 87, 6.5));
    listings.push(createData('Banana Republic', 1.2, "Fashion", 37, 4.3));
    listings.push(createData("President's Choice", 3.8, "Many", 94, 0.0));
    listings.push(createData('Costco', 9.6, "Wholesale", 65, 7.0));
    listings.push(createData('Sears', 5.5, "Fashion", 98, 0.0));
    listings.push(createData('Toys R Us', 8.2, "Toys", 81, 2.0));
    listings.push(createData('Disney', 3.4, "Entertainment", 9, 37.0));
    listings.push(createData('Dell', 6.7, "Tech", 63, 4.0));
    listings.push(createData('Huawei', 7.8, "Telecommunications", 63, 4.0));
    listings.push(createData('Bell', 4.3, "Telecommunications", 63, 4.0));
    listings.push(createData('Rogers', 5.9, "Telecomunnications", 63, 4.0));
  }, [listings]);

  return (
    <div className="App">
      <PrimarySearchAppBar setSearch={setSearch} searchbarOpen={searchbarOpen} />
      <Switch>
        <Route exact path="/">
          <Land setSearchbar={setSearchbar} />
        </Route>

        <Route exact path={`/search/${companySelected}`} >
          {companySelected === "" ?
            <Search
              listings={listings}
              search={search}
              setCompanySelected={setCompanySelected}
              setSearchbar={setSearchbar} />
            :
            <DataDisplay setSearchbar={setSearchbar} companySelected={companySelected} />}
        </Route>
        <Route exact path={`/search`} >
          <Search
            listings={listings}
            search={search}
            setCompanySelected={setCompanySelected}
            setSearchbar={setSearchbar} />
        </Route>
        <Route path="/search">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/survey" >
          <Survey setSearchbar={setSearchbar} companySelected={companySelected} />
        </Route>
        <Route path="/" >
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}