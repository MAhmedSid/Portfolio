import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";

const ProjectCard = (props) => {
  const { title, desc, link } = props;

  return (
    <>
      <Box className="rounded-2xl " textAlign="center">
        <Text
          fontSize={["md", "2xl"]}
          pt={["4", "20"]}
          pb={["4", "2"]}
          ml={["0", "8"]}
        >
          {title}
        </Text>
        <Text fontWeight="light" fontSize={["xs", "lg"]} ml={["0", "8"]}>
          {desc}
        </Text>
        <Link href={link} size={["xs", "md"]} mt={["8", "20"]} mb={["8", "20"]}>
          Live view
        </Link>
      </Box>
    </>
  );
};

export default ProjectCard;
