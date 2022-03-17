import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import styles from "./styles.module.css";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#3155A4"
    >
      <Flex align="center" mr={5}>
        <Heading
          marginLeft={{ base: "", md: "8" }}
          as="h1"
          size="lg"
          letterSpacing={"tighter"}
          color="#FFF"
        >
          Revolução pernambucana
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon color="#fff" />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
        divider={<Divider />}
        spacing={3}
        marginTop={{ base: "8", md: "0" }}
      >
        <Text className={styles.text}>TOPICO</Text>
        <Text className={styles.text}>TOPICO</Text>
        <Text className={styles.text}>TOPICO</Text>
        <Text className={styles.text}>TOPICO</Text>
        <></>
      </Stack>
    </Flex>
  );
}
