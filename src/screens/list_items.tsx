import React, {FC, useState, createRef, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// Props
interface ListItemProps {
  type: string;
  data: any;
}

type ygy = MyViewPager & MyStaticTitle & MyHorList;

// ListItem Component
export default ({type, data}: ListItemProps) => {
  // console.log(type + '-----------------' + data);

  switch (type) {
    case 'viewPager':
      // return <MyViewPager data={data} />;
      return <MyCorousal data={data} />;
      break;

    case 'staticTitle':
      return <MyStaticTitle data={data} />;
      break;

    case 'horList':
      return <MyHorList data={data} />;
      break;

    case '4grid':
      return <FourGrid data={data} />;
      break;

    default:
      return <View></View>;
      break;
  }
};
////////////////////////////////////////////////viewpager////////////////////////////////////
interface MyViewPager {
  data: Array<string>;
}

interface MyStaticTitle {
  data: string;
}

interface MyHorList {
  data: {
    category?: string;
    catData: Array<MyHorListItem>;
  };
}

interface MyHorListItem {
  name: string;
  coloor: string;
}

interface FourGrid {
  data: {
    category?: string;
    catData: Array<MyHorListItem>;
  };
}

const FourGridItem: FC<MyHorListItem> = ({name, coloor}) => {
  return (
    <View
      style={{
        backgroundColor: coloor,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        margin: 10,
      }}>
      <Text>{name}</Text>
    </View>
  );
};

const FourGrid: FC<FourGrid> = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: 'purple',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <Text style={styles.horListTitle}>{data.category}</Text>
      <FlatList
        keyExtractor={(item) => item.name}
        data={data.catData}
        renderItem={(item) => <FourGridItem {...item.item} />}
        numColumns={2}
      />
    </View>
  );
};

const HorItem: FC<MyHorListItem> = ({name, coloor}) => {
  {
    // console.log(name + '------' + coloor);
  }
  return (
    <View style={[styles.fourGridItem, {backgroundColor: coloor}]}>
      <Text>{name}</Text>
    </View>
  );
};

const MyHorList: FC<MyHorList> = ({data}) => {
  {
    // console.log('titl: ' + data.category);
  }
  return (
    <View style={styles.horList}>
      <Text style={styles.horListTitle}>{data.category}</Text>
      <FlatList
        style={{backgroundColor: 'black'}}
        keyExtractor={(item) => item.name}
        data={data.catData}
        renderItem={(item) => <HorItem {...item.item} />}
        horizontal
      />
    </View>
  );
};

const MyStaticTitle: FC<MyStaticTitle> = ({data}) => {
  return (
    <View style={styles.staticTitle}>
      <Text style={styles.staticTitleText}>{data}</Text>
    </View>
  );
};

const {width} = Dimensions.get('window');
const DATA = ['red', 'yellow', 'blue', 'green'];
const scrollRef = createRef<ScrollView>();

const MyViewPager: FC<MyViewPager> = ({data}) => {
  // console.log(data + '     sdasdasdasdas');

  const [index, setIndex] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        ref={scrollRef}
        onScroll={({
          nativeEvent: {
            contentOffset: {x},
          },
        }) => {
          console.log(x);

          setIndex(Math.round(x / width));
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled>
        {data.map((key) => (
          <View
            {...{key}}
            style={{width: width, height: 200, backgroundColor: key}}
          />
        ))}
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          flexDirection: 'row',
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        {data.map((key, i) => (
          <View {...{key}} style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                width: index === i ? 15 : 10,
                height: index === i ? 15 : 10,
                borderRadius: index === i ? 15 : 5,
                marginRight: data.length - 1 === i ? 0 : 5,
                backgroundColor: '#ccc',
              }}
              onPress={() => {
                console.log(index * width + '------------');
                console.log(i * width + '------------');

                scrollRef.current?.scrollTo({
                  x: i * width,
                  y: 0,
                  animated: true,
                });
              }}></TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

interface MyCorousalItem {
  item: string;
  index: number;
}

const MyCorousalItem: FC<MyCorousalItem> = ({item, index}) => {
  return (
    <View
      style={{
        backgroundColor: item,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{item}</Text>
    </View>
  );
};

const MyCorousal: FC<MyViewPager> = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  var  myCorousalRef:Carousel<string>|null;

  return (
    <View>
      <Carousel
      ref={(c) => {myCorousalRef = c} }
        data={data}
        renderItem={MyCorousalItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveIndex(index) }
        autoplay={true}
        autoplayInterval={1000}
        loop
      />
       <View
        style={{
          position: 'absolute',
          bottom: 10,
          flexDirection: 'row',
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        {data.map((key, i) => (
          <View {...{key}} style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                width: activeIndex === i ? 15 : 10,
                height: activeIndex === i ? 15 : 10,
                borderRadius: activeIndex === i ? 15 : 5,
                marginRight: data.length - 1 === i ? 0 : 5,
                backgroundColor: '#ccc',
              }}
              onPress={() => {
                console.log(activeIndex + '----lolol--------'+i);
                // console.log(i * width + '------------');
                  myCorousalRef?.snapToItem(i)
                  setActiveIndex(i)
              }}></TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

/////////////////////////////////////////ViewPager/////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  staticTitle: {
    backgroundColor: 'white',
    height: 50,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  staticTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  horList: {
    paddingVertical: 10,
    backgroundColor: 'gold',
    borderWidth: 1,
  },
  horListTitle: {
    fontSize: 24,
    marginLeft: 8,
    padding: 8,
  },
  fourGridItem: {
    width: width / 2,
    height: 250,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {MyViewPager};
