import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplachScreen from "expo-splash-screen";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [fontLoaded, fontError] = useFonts({
    SpaceGrotesKBold: require("../font/SpaceMono-Bold.ttf"),
    SpaceGrotesKRegular: require("../font/SpaceMono-Regular.ttf"),
    SpaceGrotesKltalic: require("../font/SpaceMono-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplachScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <View
      onLayout={onLayoutRootView}
      className="flex-1"
      style={{
        width: wp(100),
      }}
    >
      <View
        className="justify-center items-center "
        style={{ width: wp(100), height: hp(100) }}
      >
        {/*Heart Icon Image */}

        <View
          className="justify-start items-start my-4"
          style={{
            width: wp(100),
          }}
        >
          <Image
            source={require("../../assets/HeartIcon.png")}
            style={{
              width: wp(100),
              height: hp(40),
              resizeMode: "contain",
            }}
          />
        </View>

        {/*Welcome Text */}

        <View className="w-full p-6 px-10">
          <Text
            className="tracking-widest leadin-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGrotesKBold",
            }}
          >
            Embrace
          </Text>
          <Text
            className="tracking-widest leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGrotesKBold",
            }}
          >
            A new way of Deating
          </Text>
          <Text
            className="leading-6 text-gray-800 tracking-wider w-[80%] mt-2"
            style={{
              fontSize: wp(4),
              fontFamily: "SpaceGrotesKRegular",
            }}
          >
            We combine cutting-edge technologies with a modern approach to
            matchmaking.
          </Text>
        </View>
        <View className="w-full px-10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeTaps");
            }}
            className="bg-[#F26322] px-4 py-4 rounded-xl flex-row justify-center items-center w-[45%]"
          >
            <Text
              className="text-white font-bold mr-2"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGrotesKBold",
              }}
            >
              Get Started
            </Text>
            <ArrowUpRightIcon color={"white"} size={20} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
