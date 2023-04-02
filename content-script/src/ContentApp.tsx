/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { Box, Button, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { IoMdPlay } from "react-icons/io"

function ContentApp() {

  // page content states
  const _editableInFocus = useRef<HTMLElement | null>(null)
  const refACContainer = useRef<HTMLDivElement | null>(null)
  const ACMenuTop = useRef<string>("")
  const ACMenuRight = useRef<string>("")
  const [showAC, setShowAC] = useState<boolean>(false)

  // -----------------------------------------------
  // Everything to do at load, and other useEffects
  // -----------------------------------------------
  useEffect(() => {
    console.log("Hello from the Spiffy extension!")
  }, [])

  // set the editable in focus, if any
  // also add/remove keydown listeners etc.
  useEffect(() => {
    const inFocus = (e: FocusEvent) => {
      const target = e.target as HTMLInputElement
      if (target.classList.contains("editable")) {
        console.log("Got focus")
        target.addEventListener("keyup", keyUpListener, true)
        target.addEventListener("keydown", keyDownListener, true)
        const rect = target.getBoundingClientRect();
        ACMenuTop.current = rect.top + "px"
        ACMenuRight.current = rect.right + "px"
        _editableInFocus.current = target
        setShowAC(computeShowAC())
      }
    }
    document.addEventListener("focusin", inFocus)

    const outFocus = (e: FocusEvent) => {
      const target = e.target as HTMLInputElement
      if (target.classList.contains("editable")) {
        target.removeEventListener("keyup", keyUpListener, true)
        target.removeEventListener("keydown", keyDownListener, true)
        if (target == _editableInFocus.current) {
          console.log("Lost focus")
          setTimeout(() => {
            // check if still not focused
            if (document.activeElement != _editableInFocus.current) {
              _editableInFocus.current = null
              setShowAC(computeShowAC())
            }
          }, 250)
        }
      }
    }
    document.addEventListener("focusout", outFocus)
  }, [])

  // print key pressed
  function keyUpListener(ev: Event) {
    const e = ev as KeyboardEvent
    // console.log("key up", e.key)
  }

  // the main key listener for the extension
  function keyDownListener(ev: Event) {
    const e = ev as KeyboardEvent
    console.log("key down", e.key)
  }

  // show the autocomplete menu
  function computeShowAC() {
    return (_editableInFocus.current != null)
  }

  function buttonClick() {
    console.log("button clicked")
    const text = _editableInFocus.current?.innerText
    console.log("text", text)
  }

  return (
    <div className="App">
      <Box
        p={3}
        hidden={!showAC}
        position="absolute"
        background={useColorModeValue('white', 'gray.800')}
        maxWidth="100%"
        margin="5px"
        shadow="md"
        fontSize="20px"
        borderRadius="10px"
        top={ACMenuTop.current}
        right={0}
        zIndex={10}
        ref={refACContainer}
        border='2px'
        display={{ base: 'none', md: "block" }}
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        id="suggestion-box"
      >
        <Button onClick={buttonClick}>
          <Icon as={IoMdPlay} />
        </Button>
      </Box>
    </div>
  )
}

export default ContentApp

