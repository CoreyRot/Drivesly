import React from "react";

import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const Header = props => {
    const {
      navigationState,
      navigation,
      activeTintColor,
      inactiveTintColor
    } = props;
    const activeTabIndex = navigation.state.index;
  
    return (
        <View style={styles.subContainer}>
          {navigationState.routes.map((route, index) => {
            const isRouteActive = index === activeTabIndex;
            const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
  
            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(route.routeName)}
                key={route.routeName}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: `${tintColor}`,
                      fontWeight: `${isRouteActive ? "bold" : "normal"}`
                    }}
                  >
                    {route.routeName}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
    );
  };
const styles = StyleSheet.create({
    subContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        height: "20%",
        alignItems: "center",
        marginTop: 5,
        height: 40,
    },
    stat: {
        alignItems:"center",
    },
    info: {
        color: "#4F566D",
        fontSize: 18,
        fontWeight: "300"
    },
    Title: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    }    
});
export default Header;