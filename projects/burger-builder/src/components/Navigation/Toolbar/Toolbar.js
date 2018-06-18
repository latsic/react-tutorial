import React from 'react';

import classes from './Toolbar.css';
import Logo from './../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
//import Hamburger from '../../UI/Hamburger/Hamburger';
import Hamburger2 from '../../UI/Hamburger2/Hamburger2';

const toolbar = (props) => {
  return (
    <header
      className={classes.Toolbar}
      >
      {/* <div className={[classes.Hamburger, classes.MobileOnly].join(' ')}>
        <Hamburger
          isOpen={props.menuIsOpen}
          clicked={props.menuClicked}
        >
        </Hamburger>
        
      </div> */}

      <div
        className={[classes.Hamburger2, classes.MobileOnly].join(' ')}
        >
        <Hamburger2
          isOpen={props.menuIsOpen}
          clicked={props.menuClicked}
          >
        </Hamburger2>
      </div>

      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems>
        </NavigationItems>
      </nav>
    </header>
  );

};

export default toolbar;