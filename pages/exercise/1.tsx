import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import Sidebar from "../sidebar";

function Exercise1() {
    return (
        <>
            <Sidebar />
            <h1 className="text-mainpage">Exercise 1: Simple React Component</h1>
            <div className="card-container">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            height={160}
                            alt="Son Doong"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Son Doong Adventures</Text>
                        <Badge color="green" variant="light">
                            Featured
                        </Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        With Son Doong Tours you can explore more of
                        the magical fjord landscapes with tours and
                        activities on and around the Son Doong cave of
                        Vietnam
                    </Text>

                    <Button variant="light" className="custom-button" fullWidth mt="md" radius="md">
                        Book classic tour now
                    </Button>
                </Card>
            </div>

        </>
    );
}

export default Exercise1;