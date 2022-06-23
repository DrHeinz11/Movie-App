import { Stack, Box, Image, Text } from "@chakra-ui/react";
import "./Card.css";

const Card = ({ Portada, Title, Year }) => {
  return (
    <Stack
      gap={"xs"}
      p="10px"
      borderRadius={"md"}
      border={"1px"}
      borderColor={"gray.400"}
      w={"2xs"}
      boxShadow={"lg"}
      marginTop={"10px"}
      alignItems={"center"}
    >
      <Box
        w={"12"}
        h={"6"}
        paddingInlineStart={"5px"}
        className="clip"
        alignSelf={"flex-start"}
      >
        <Text bg={"gray.500"} color={"gray.900"}>
          {Year}
        </Text>
      </Box>
      <Image
        src={Portada}
        boxSize={"3xs"}
        borderRadius={"sm"}
        objectFit={"cover"}
      />

      <Box alignSelf={'flex-start'} paddingInlineStart={'5px'} >
        <Text fontSize={"sm"}>Movie</Text>
        <Text
          fontSize={"xl"}
          borderBottom={"2px"}
          borderColor={"transparent"}
          width={"fit-content"}
          _hover={{ borderColor: "gray.500" }}
        >
          {Title}
        </Text>
      </Box>

    </Stack>
  );
};

export default Card;
