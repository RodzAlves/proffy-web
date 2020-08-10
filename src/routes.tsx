import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import ErrorPage from './pages/ErrorPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/study" component={TeacherList}/>
                <Route exact path="/give-classes" component={TeacherForm}/>
                
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;