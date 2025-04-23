import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
   return <Stack background="white" color="black" borderRadius="md">
    <VStack>
      <Image src={imageSrc} alt={title} borderRadius="md"/>
      <Heading as="h5" noOfLines={1} size="md" color="black" textAlign="center">{title}</Heading>
      <Text fontSize="sm" padding="2">{description}</Text>
    </VStack>
    <HStack padding="2" spacing="2">
        <Text fontSize="sm">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
    </HStack>
  </Stack>;
};

export default Card;
