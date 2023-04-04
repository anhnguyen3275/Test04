import type { Node } from "react";
import React, { useEffect } from "react";
import * as styled from "react-native";
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme } from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Pagination from "react-native-pagination";

const ListItem = styled.TouchableOpacity`
  height: 30px;
`;

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getData = () => {
    const config = {
      method: "post",
      url: "https://vnexpress.net/rss/tin-moi-nhat.rss",
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log("data", JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <FlatList data={getData} renderItem={({item}) => (
          <ListItem
            onPress={() => navigation.navigate('Page')}
            roundAvatar
            title={`${item.title}`}
          />
        )} />

        <Pagination
          listRef={this.refs}
          paginationVisibleItems={this.state.viewableItems}
          paginationItems={this.state.items}
          paginationItemPadSize={3}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
