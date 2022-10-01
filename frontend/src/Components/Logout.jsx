import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

export default function Logout({ userName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let { setIsAuth } = useContext(AppContext);

  return (
    <>
      <Button bg="#f8f9fa" w="100%" fontWeight="100" onClick={onOpen}>
        <i
          style={{
            marginLeft: "-90px",
            fontSize: "18px",
          }}
          class="bi bi-person"
        ></i>

        <Text ml="5%">{userName}</Text>
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              User Logout
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? Do you want to Log.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => setIsAuth(false)} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
