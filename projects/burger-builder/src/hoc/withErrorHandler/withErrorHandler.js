
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

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({
          error: error
        });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
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