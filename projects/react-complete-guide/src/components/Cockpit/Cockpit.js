
import React from 'react';
import classes from './Cockpit.css';
//import Aux from '../../hoc/Aux';

const Fragment = React.Fragment;

const cockpit = (props) => {

  let assignedClasses = [];
  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  let btnClass = classes.toggleButton;
  if (props.showPersons) {
    btnClass=[classes.red, btnClass].join(' ');
  }

  return (

    // <div>
    //   <h1>{props.appTitle}</h1>
    //   <p className={assignedClasses.join(' ')}>This is really working.</p> 
    //   <button
    //     className={btnClass}
    //     onClick={props.clicked}
    //     >
    //     Toggle Persons
    //   </button>
    // </div>
      // <Aux>
      //   <h1>{props.appTitle}</h1>
      //   <p className={assignedClasses.join(' ')}>This is really working.</p> 
      //   <button
      //     className={btnClass}
      //     onClick={props.clicked}
      //     >
      //     Toggle Persons
      //   </button>
      // </Aux>
      <>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p> 
        <button
          className={btnClass}
          onClick={props.clicked}
          >
          Toggle Persons
        </button>
      </>
    
  );
};

export default cockpit;