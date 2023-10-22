import { Button, Card, Group, Image, Text } from "@mantine/core";
import Sidebar from "../sidebar";
import { useClipboard } from "@mantine/hooks";

function Exercise3() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const clipboards = Array.from({ length: 3 }, () => useClipboard({ timeout: 1500 }));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const clipboards1 = Array.from({ length: 3 }, () => useClipboard({ timeout: 1500 }));

    const cardData = [
        {
            imgSrc: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            title: "Bulbasaur",
            description:
                "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
        },
        {
            imgSrc: "https://img.pokemondb.net/artwork/charmander.jpg",
            title: "Charmander",
            description:
                "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        },
        {
            imgSrc: "https://img.pokemondb.net/artwork/squirtle.jpg",
            title: "Squirtle",
            description:
                "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.",
        },
    ];

    const cardData1 = [
        {
            imgSrc: "https://img.pokemondb.net/artwork/pikachu.jpg",
            title: "Pikachu",
            description:
                "When several of these POKéMON gather, their electricity can build and cause lightning storms.",
        },
        {
            imgSrc: "https://img.pokemondb.net/artwork/meowth.jpg",
            title: "Meowth",
            description:
                "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.",
        },
        {
            imgSrc: "https://img.pokemondb.net/artwork/psyduck.jpg",
            title: "Psyduck",
            description:
                "While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.",
        },
    ];

    return (
        <>
            <Sidebar />
            <h1 className="text-mainpage">Exercise 3: Simple React Hook</h1>
            <div className="hook-card-container">
                {cardData.map((data, index) => (
                    <Card className="hook-card-item" shadow="sm" padding="sm" radius="md" withBorder key={index}>
                        <Card.Section>
                            <Image src={data.imgSrc} height={250} alt={data.title} />
                        </Card.Section>

                        <Group justify="flex-start" mt="md" mb="xs">
                            <Text fw={500}>{data.title}</Text>
                        </Group>

                        <Text size="sm" c="dimmed">
                            {data.description}
                        </Text>

                        <Button
                            variant="light"
                            className={clipboards[index].copied ? 'hook-custom-button' : 'custom-button'}
                            onClick={() => clipboards[index].copy(data.description)}
                            fullWidth
                            mt="md"
                            radius="md"
                        >
                            {clipboards[index].copied ? 'Copied' : 'Copy Pokemon Description'}
                        </Button>
                    </Card>
                ))}
            </div>
            <div className="hook-card-container">
                {cardData1.map((data, index) => (
                    <Card className="hook-card-item" shadow="sm" padding="sm" radius="md" withBorder key={index}>
                        <Card.Section>
                            <Image src={data.imgSrc} height={250} alt={data.title} />
                        </Card.Section>

                        <Group justify="flex-start" mt="md" mb="xs">
                            <Text fw={500}>{data.title}</Text>
                        </Group>

                        <Text size="sm" c="dimmed">
                            {data.description}
                        </Text>

                        <Button
                            variant="light"
                            className={clipboards1[index].copied ? 'hook-custom-button' : 'custom-button'}
                            onClick={() => clipboards1[index].copy(data.description)}
                            fullWidth
                            mt="md"
                            radius="md"
                        >
                            {clipboards1[index].copied ? 'Copied' : 'Copy Pokemon Description'}
                        </Button>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Exercise3;
