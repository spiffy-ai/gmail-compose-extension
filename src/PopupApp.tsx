/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Heading, Spacer, Textarea } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import "./PopupApp.css"

function PopupApp() {

  return (
    <div className="App">
      <Container maxW='container.sm' my={2}>
        <Heading as="h1" size="lg" my={2}>Popup App</Heading>
        <Alert status="info" my={2}>
          <AlertIcon />
          <AlertTitle mr={2}>Info!</AlertTitle>
          <AlertDescription>Popup App is running!</AlertDescription>
        </Alert>
      </Container>
    </div>
  )
}

export default PopupApp


