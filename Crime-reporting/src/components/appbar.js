import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './appbar.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarExampleIcon extends React.Component{
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                    <AppBar title="Crime Reporter and Missing Person Finder App "     iconClassNameRight="muidocs-icon-navigation-expand-more" />
                    </div>
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}
  


export default AppBarExampleIcon;

