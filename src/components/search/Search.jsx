import { Box, Input } from "@chakra-ui/react";

const Search = () => {
  return (
    <Box
      bg={"gray.600"}
      borderRadius={"lg"}
      h="-webkit-fit-content"
      padding={["10px", "15px"]}
    >
      <Input
        variant="outline"
        borderColor={"blue.100"}
        focusBorderColor="blue.500"
        placeholder="Search your movie"
        size="lg"
      />
      
    </Box>
  );
};

export default Search;
