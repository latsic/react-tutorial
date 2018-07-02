
import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';
import InfoDisplay from '../../components/UI/InfoDisplay/InfoDisplay';

const withErrorHandler = (WrappedComponent, axios) => {
  
  return class extends Component {
    
    state = {
      error: null
    };
    reqInterceptor = null;
    resInterceptor = null;

    componentIsMounted = false;

    constructor() {
      super();
      this.myId = Math.floor(Math.random() * 1000);
    }

    componentWillMount() {
      console.log(`[withErrorHandler ${this.myId}] componentWillMount`);
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        console.log(`[withErrorHandler ${this.myId}] resInterceptor error`);
        
        console.log('componentIsMounted', this.componentIsMounted);
        
        
        this.setState({
          error: error
        });
      });
    }

    componentDidMount() {
      this.componentIsMounted = true;
      console.log(`[withErrorHandler ${this.myId}] componentDidMount`, this.componentIsMounted);
    }

    errorConfirmedHandler = () => {
      console.log(`[withErrorHandler ${this.myId}] errorConfirmHandler`);
      
      this.setState({
        error: null
      });
    }

    componentWillUnmount() {
      console.log(`[withErrorHandler ${this.myId}] componentWillUnmount`);
      this.componentIsMounted = false;
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }


    render() {

      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
            >
            <InfoDisplay
              title={this.state.error ? this.state.error.message : ""}
              text='Some Dummy Error Text or whatever!'
              closeClicked={this.errorConfirmedHandler}
              >
            </InfoDisplay>
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  }
};

export default withErrorHandler;