import { Input, Box, Text } from "@chakra-ui/react";

interface props {
  footerLink: string[];
}

function Footer({ footerLink }: props) {
  return (
    <Box>
      <Box borderTop={"2px solid #ff6600"} />
      <Box maxWidth={"469px"} margin={"10px auto 0px"} pb={"20px"}>
        <Text fontSize={"15px"} textAlign={"center"} fontWeight={"400"}>
          Applications are open for YC Winter 2023
        </Text>
        <Box display={"flex"} margin={"auto"} alignItems={"center"}>
          {footerLink.map((item: string, index: number) => (
            <Box
              display={"flex"}
              alignItems={"center"}
              key={index}
              // border={"1px solid"}
            >
              <Text fontSize={"11px"} margin={"10px"}>
                {item}
              </Text>
              <Box borderRight={"1px solid"} height={"13px"} />
            </Box>
          ))}
          <Text margin={"10px"} fontSize={"11px"}>
            Contact
          </Text>
        </Box>
        <Box
          maxWidth={"200px"}
          margin={"5px auto 0px"}
          display={"flex"}
          alignItems={"center"}
        >
          <Text fontSize={"15px"} color={"#828282"} fontWeight={"500"}>
            Search:{" "}
          </Text>
          <Input
            type={"name"}
            height={"21.5px"}
            width={"148px"}
            ml={"5px"}
            background={"white"}
            borderRadius={"1px"}
            border={"1px solid black"}
            borderColor={"black"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
