import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as headerStyle from '../../utils/stylesheets/mainheader';
import * as strFunc from '../../utils/functions/strFunctions';

class MainHeader extends Component {
  handleOpenSideMenu = () => this.props.navigation.navigate('SideMenu')

  renderMainAddr = loc => {
    const addr = loc
      ? strFunc.joinArrayStr([loc.name, loc.street], ' ')
      : 'Getting your address..';

    return addr.toUpperCase();
  }

  renderSubAddr = loc => {
    if (loc) {
      const str = strFunc.joinArrayStr([loc.city, loc.regionCode, loc.country], ', ');
      return str.toUpperCase();
    }
  }

  render() {
    const { location } = this.props.locDetail;

    return (
      <View>
        <List containerStyle={headerStyle.headerContainer}>
          <ListItem
            containerStyle={headerStyle.headerItemContainer}
            leftIcon={headerStyle.headerIcon}
            leftIconUnderlayColor='transparent'
            title={this.renderMainAddr(location)}
            subtitle={this.renderSubAddr(location)}
            titleStyle={headerStyle.title}
            subtitleStyle={headerStyle.subTitle}
            onPressRightIcon={this.handleOpenSideMenu}
          />
        </List>
      </View>
    )
  }
}

const mapStateToProps = state => ({ locDetail: state.locDetail });

export default connect(mapStateToProps)(MainHeader);