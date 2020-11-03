import React, { Component, Fragment } from 'react';
import {Switch,Route} from "react-router-dom";
import '../assets/scss/index.scss';
import layouts from '../pages';
import axios from 'axios';

const BASE_URL ='https://ebusiness.ide-academy.org/api';
class App extends Component{
    state ={
        categories : [] ,
        settings: {},
        homepage : {} 
    };
    componentDidMount() {
        this.getAllCategories();
        this.getSettingsData();
        this.getHomepageData();
        
    }
    getHomepageData = ()=>{
        axios
            .get(BASE_URL+'/homepage')
            .then(res => {
                
                this.setState({homepage : res.data.response.data});
                
        console.log(this.state.homepage)
            })
    }
    getSettingsData = ()=>{
        axios
            .get(BASE_URL+'/settings')
            .then(res => {
                
                this.setState({settings : res.data.response.data});
                
        console.log(this.state.settings)
            })
    }
    getAllCategories = () =>{
        axios
            .get(BASE_URL+'/course-categories')
            .then(res => {
                this.setState({categories : res.data.response.data});
                console.log(this.state.categories);
            })
    }
    render(){
        return(
            <Fragment>
                <layouts.MyNav 
                                settings={this.state.settings} 
                                categories={this.state.categories} />
                <Switch>
                    <Route path="/user/profile">
                    </Route>
                    <Route path="/create-new-task">
                    </Route>
                    {/* <Route path="/test" exact>
                        <EditTask/>
                    </Route> */}
                    <Route path="/" exact>
                    </Route>
                    
                </Switch>
                
                <div style={{height:"100px"}}></div>
                <layouts.Footer />
            </Fragment>
        )
    }   
}
export default App;