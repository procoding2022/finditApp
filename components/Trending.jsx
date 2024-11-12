import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  Image,Text,View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { images } from "../constants";

import { icons } from "../constants";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);

  return (
    <View>
          <Image
            source={images.key}
            className="w-full h-full rounded-lg"
            resizeMode="contain"
          />
      <Text className="font-pmedium text-sm text-gray-100">
        Keys,
      </Text>

      <Image
            source={images.logo}
            className="w-full h-20 rounded-lg"
            resizeMode="contain"
          />
      <Text className="font-pmedium text-sm text-gray-100">
        Welcome Back,
      </Text>

      <Image
            source={images.logo}
            className="w-full h-20 rounded-lg"
            resizeMode="contain"
          />
      <Text className="font-pmedium text-sm text-gray-100">
        Welcome Back,
      </Text>

      <Image
            source={images.logo}
            className="w-full h-20 rounded-lg"
            resizeMode="contain"
          />
      <Text className="font-pmedium text-sm text-gray-100">
        Welcome Back,
      </Text>
      <Image
            source={images.logo}
            className="w-full h-20 rounded-lg"
            resizeMode="contain"
          />
      <Text className="font-pmedium text-sm text-gray-100">
        Welcome Back,
      </Text>

   </View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
    />
  );
};

export default Trending;