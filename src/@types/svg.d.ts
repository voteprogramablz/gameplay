declare module "*svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>; // O conteudo é um React.(Functional Component)
  export default content;
}
