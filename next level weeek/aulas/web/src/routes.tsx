import React from 'react'
import {BrowserRouter, Route }from'react-router-dom';
import TeacherList from './pages/TeacherList';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';

function routes(){
    return(
    <BrowserRouter>
    <Route path="/" exact component={Landing}/>
    <Route path="/study" component={TeacherList}/>
    <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
    )
}
export default routes;