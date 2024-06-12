import { FC } from "react";
import { ThemedText } from "@/components/atoms/ThemedText";
import { Info } from "@/components/containers/Info";

type OrangeInfoProps = {
  text: string;
};

export const OrangeInfo: FC<OrangeInfoProps> = ({ text }) => {
  return (
    // TODO: CHECK HEIGHT PARAM
    <Info widthParam="298px" heightParam="" color="#F0872E" padding="15px">
      <ThemedText type="long-paragraph">{text}</ThemedText>
    </Info>
  );
};
