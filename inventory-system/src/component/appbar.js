import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppBarExampleIcon extends React.Component{
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                    <AppBar title="Inventory Management System "     iconClassNameRight="muidocs-icon-navigation-expand-more" />
                    </div>
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}
  


export default AppBarExampleIcon;