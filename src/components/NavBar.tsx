import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.jpg'
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar(){
    return (
        <HStack justifyContent="space-between" padding="20px">
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    )
}
export default NavBar
