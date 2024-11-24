import React from "react";
import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesMeal = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryGridTitle
          title={itemData.item.title}
          color={itemData.item.color}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesMeal;
