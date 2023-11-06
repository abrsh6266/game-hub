import { Box } from "@chakra-ui/react"
import {ReactNode} from 'react'

interface Props{
    children: ReactNode,
}

function GameCardContainer({children}:Props){
    return (
        <Box margin={2} width="300px" borderRadius={10}  overflow='hidden' >
            {children}
        </Box>
    )
}
export default GameCardContainer