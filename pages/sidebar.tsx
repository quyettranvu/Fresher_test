import { Button, Drawer, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Button onClick={toggleSidebar}>Click me to see exercises</Button>
            <Drawer
                opened={isOpen}
                onClose={toggleSidebar}
                position="left"
                mt={20}
                size="md"
            >
                <Stack mt={50}>
                    <Text className="text-sidebar">
                        <Link href="/">
                            <FiCheckCircle />
                            Home
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/1">
                            <FiCheckCircle />
                            A1: Component
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/2">
                            <FiCheckCircle />
                            A2: State
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/3">
                            <FiCheckCircle />
                            A3: Hook
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/4">
                            <FiCheckCircle />
                            A4: Form
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/5">
                            <FiCheckCircle />
                            A5: List & Details
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/b1">
                            <FiCheckCircle />
                            B1: Array Handling
                        </Link>
                    </Text>
                    <Text className="text-sidebar">
                        <Link href="/exercise/b2">
                            <FiCheckCircle />
                            B2: Object Handling
                        </Link>
                    </Text>
                </Stack>
            </Drawer>
        </>
    )
}