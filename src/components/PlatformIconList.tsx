import { Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import {  IconType } from "react-icons"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo }  from 'react-icons/si'
import { Platform } from "../hooks/useGames";
import { BsGlobe } from 'react-icons/bs'
interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
    const iconMap: {[key:string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
}
export default PlatformIconList;
