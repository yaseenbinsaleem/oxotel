import React from 'react'
import { Route } from "react-router-dom";

import About from '../components/About'
import Contact from '../components/Contact'

import Profile from '../components/Profile';
import { RoomView } from '../components/RoomView';
import SearchHotel from '../components/hotels/SearchHotel';
import Logout from '../components/Logout';
import DashboardFirst from '../dashboard/dekstop-1';
import SingleRoom from '../components/hotels/RoomFilter';
import LocationFilter from '../components/hotels/LocationFilter';
import Signup from '../components/Signup';
import Login from '../components/Login';


export default function RoutesLinks() {
    return (
        <div>
            <Route path="/home" component={DashboardFirst} />
            
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/roomView/:id" component={RoomView} />
            <Route path="/search" component={SearchHotel} />
            <Route path="/roomfilter/:size" component={SingleRoom} />
            <Route path="/locations" component={LocationFilter} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </div>
    )
}
