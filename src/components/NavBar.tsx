import { HStack, Text, Image } from "@chakra-ui/react";
import logo from '../assets/logo.jpg'
function NavBar(){
    return (
        <HStack>
            <Image src={logo} boxSize="60px"/>
            <Text>NavBar</Text>
        </HStack>
    )
}
export default NavBar
