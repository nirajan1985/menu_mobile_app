import { StyleSheet } from "react-native";
import CategoriesMeal from "./screens/CategoriesMeal";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesMeal />;
    </>
  );
}

const styles = StyleSheet.create({});
