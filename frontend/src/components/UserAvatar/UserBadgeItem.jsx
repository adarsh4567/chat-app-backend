import { Box } from '@chakra-ui/react'
import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'

const UserBadgeItem = ({user,handleFunction}) => {
  return (
    <Box
    px={2}
    py={1}
    m={1}
    mb={2}
    borderRadius='lg'
    variant='solid'
    fontSize={12}
    bg='purple'
    color='white'
    cursor='pointer'
    onClick={handleFunction}
    >
        {user.name}
        <CloseIcon pl={1}/>
    </Box>
  )
}

export default UserBadgeItem