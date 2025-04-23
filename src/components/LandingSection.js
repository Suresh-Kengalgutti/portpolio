import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Suresh!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name="Pete" src="https://media.licdn.com/dms/image/v2/D5603AQFmuUIbCslYtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690571370397?e=1750291200&v=beta&t=Q7K0PNm36DbeVI5XVehfjoxrly2BxAWWocD8BM-iAMQ" zIndex="0" size={"md"}/>
      <Heading as="h5" noOfLines={1} fontSize="sm">
        {greeting}
      </Heading>
      <Heading as="h5" noOfLines={2}>
        {bio1}<br/>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
