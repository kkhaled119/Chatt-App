import {
  View,
  Text,
  Platform,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

import Matches from "../components/Matches";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { chatData } from "../constant";

const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");

export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: android ? hp(3) : 0,
      }}
    >
      {/*Header*/}

      <View className="px-4">
        <Text className="uppercase font-semibold text-natural-500 tracking-wider">
          Matches
        </Text>
      </View>
      <Matches />

      {/*Search bar */}

      <View className="mx-4 mt-6 flex-row items-center rounded-2xl bg-neutral-200 px-3 py-2">
        <TextInput
          placeholder="search "
          placeholderTextColor={"gray"}
          style={{
            fontSize: hp(1.7),
          }}
          className="flex-1 text-base mb-1 pl-1 tracking-widest"
        />
        <View>
          <EvilIcons name="search" size={24} color="gray" />
        </View>
      </View>

      {/*Chat List*/}
      <View className="px-4">
        {/*Chat Header */}

        <View className="border-b border-neutral-300 py-4">
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider">
            Chat
          </Text>
        </View>
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="w-full py-3 items-center flex-row border-b  border-neutral-300"
              onPress={() =>
                navigation.navigate("ChatDetails", {
                  chat: item.chat,
                  imgUrl: item.imgUrl,
                  name: item.name,
                  age: item.age,
                })
              }
            >
              {/* Avatar */}
              <View
                className="w-[17%] justify-center"
                style={{
                  width: hp(7),
                  height: hp(7),
                }}
              >
                <Image
                  source={item.imgUrl}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                  className="rounded-full"
                />
              </View>

              {/*Information */}

              <View
                className="w-[82%]"
                style={{
                  height: hp(6),
                }}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-center">
                    <View className="flex-row">
                      <Text className="font-bold text-base  ">
                        {item.name} {", "}
                      </Text>
                      <Text className="font-bold text-base mr-1">
                        {item.age}
                      </Text>
                    </View>
                    {item.isOnline && (
                      <View className=" justify-center items-center">
                        <View className="w-2 h-2 bg-[#F26322] rounded-full ml-1 justify-center items-center"></View>
                      </View>
                    )}
                  </View>
                  <Text className="text-sm tracking-tight">
                    {item.timeSent}
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold text-xs text-neutral-500">
                    {item.lastMessage.length > 45
                      ? item.lastMessage.slice(0, 45) + "..."
                      : item.lastMessage}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
