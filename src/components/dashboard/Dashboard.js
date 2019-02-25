import React from 'react'
import ProductList from '../Products/ProductsList'
import Auth from '../Auth/Auth'
import { Route } from 'react-router-dom'

const Dashboard = props => {
  return (
    <div className="dashboard container">
        <div className="column">
            {
              props.isAuthorized
              ? null
              : (
                <React.Fragment>
                  <Route path='/login' render={routerProps => <Auth 
                                                        {...routerProps} 
                                                        buttonName={'Log In'} 
                                                        authPath={'login'} 
                                                        checkStateIsAuthed={props.checkStateIsAuthed} 
                                                        />} 
                  />
                  <Route path='/register' render={routerProps => <Auth 
                                                            {...routerProps} 
                                                            buttonName={'Register'} 
                                                            authPath={'register'} 
                                                            checkStateIsAuthed={props.checkStateIsAuthed} 
                                                            />} 
                  />
                </React.Fragment>
              )
            }
            <ProductList isAuthorized={props.isAuthorized}/>
        </div>
    </div>
  )
}

export default Dashboard
