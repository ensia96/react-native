import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  ScrollView,
  Dimensions,
} from "react-native";

class Navs extends Component {
  render() {
    const navs = [
      { title: "메인", alert: "haha" },
      { title: "생활비", alert: "haha" },
      { title: "오늘의 식단", alert: "haha" },
      { title: "주변 맛집", alert: "haha" },
      { title: "설정", alert: "haha" },
    ];

    return (
      <ScrollView style={styles.func} horizontal={true}>
        {navs.map((navs, id) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 45,
                margin: 3,
                padding: 3,
              }}
            >
              <Button
                key={id}
                title={navs.title}
                color="#ddd"
                onPress={() => Alert.alert(navs.title, navs.alert)}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
class Conts extends Component {
  render() {
    const navs = [
      "haha",
      "haha",
      "haha",
      "haha",
      "haha",
      "haha",
      "haha",
      "haha",
      "haha",
    ];

    return (
      <ScrollView style={styles.func}>
        {navs.map((navs, id) => {
          return (
            <View
              style={{
                height: 45,
                margin: 3,
                padding: 3,
              }}
            >
              <Text>{navs}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

/*
  const Makediv = (props) => {
    return (
      <View>
        <Text>{props.text}</Text>
      </View>
    );
  };
*/

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text />
        <View style={styles.headera}>
          <Text style={styles.title}>생활의 길잡이</Text>
        </View>
        <Navs />
      </View>
      <View style={styles.content}>
        <Conts />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#173d18",
  },
  headera: {
    flex: 1,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },
  func: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
  content: {
    flex: 4,
  },
});
