import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Badge, Icon, withBadge, Header, Overlay} from 'react-native-elements';
import {createState} from '../utils';
import {NavigationService} from '../services';
import {MyViewPager} from './list_items';
import DATA from './dummy_data';
import ListItem from './list_items';
// Props
interface MainListProps {}


// MainList Component
export default ({}: MainListProps) => {
  const {state, setState} = createState<{
    hideCount?: boolean;
  }>({
    hideCount: false,
  });

  const BadgedIcon = withBadge(4, {
    top: -5,
    left: 3,
    hidden: state.hideCount,
    badgeStyle: {backgroundColor: 'black'},
  })(Icon);

  const _renderItem = () => {
      return(
        <View></View>
      )
  }
 

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#009387'} barStyle={'light-content'} />
      <Header
        style={{paddingHorizontal: 25}}
        backgroundColor={'#009387'}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}
        rightComponent={
          <BadgedIcon
            type="material"
            name="shopping-cart"
            color="white"
            containerStyle={{marginRight: 10}}
            onPress={() => NavigationService.navigate('kartScreen')}
          />
        }
      />
      <View style={styles.body}>
        {/* <ListItem type={DATA[0].type} data={DATA[0].data}  /> */}
        <FlatList
          style={styles.body}
          keyExtractor={(item, i) => i.toString()}
          data={DATA}
          renderItem={(item) => <ListItem type={item.item.type} data={item.item.data} />  }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    flex: 1,
    backgroundColor: '#009387',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  body: {
    flex: 1,
    backgroundColor: 'red',
  },
  kartIcon: {
    alignSelf: 'center',
    marginEnd: 20,
  },
  logo: {
    flex: 1,
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  kartBtn: {
    width: 40,
    height: 40,
  },
  kartCountView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#08d4c4',
    alignSelf: 'flex-start',
  },
  kartCountText: {
    alignSelf: 'center',
  },
});
