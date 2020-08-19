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
      return <LoopCarousel />;
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
  data: string[];
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
    <View style={[styles.fourGridItem, {backgroundColor: coloor,}]}>
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

function LoopCarousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data] = useState([1, 2, 3]);
  const scrollViewRef = useRef<any>();

  useEffect(() => {
    goToPage(currentPage);
  }, []);

  useEffect(() => {
    if (currentPage === data.length + 1) {
      goToPage(1);
      setCurrentPage(1);
    }
    if (currentPage === 0) {
      goToPage(data.length);
      setCurrentPage(data.length);
    }
  }, [currentPage]);

  function goToPage(page: number) {
    const to = page * width;
    scrollViewRef.current.getNode().scrollTo({ x: to, y: 0, animated: false });
  }

  function onScrollEnd(e:any) {
    const { contentOffset } = e.nativeEvent;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum);
  }

  // [3, 1, 2, 3, 1]
  const array = [data[data.length - 1], ...data, data[0]];

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      onMomentumScrollEnd={onScrollEnd}
    >
      {array.map((item, i) => (
        <View key={item}>
          <Text>Page {item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

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
