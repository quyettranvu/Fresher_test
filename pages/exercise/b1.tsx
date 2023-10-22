import { ActionIcon, Button, Divider, Grid, NumberInput, Paper, Text } from "@mantine/core";
import Sidebar from "../sidebar";
import { useState } from "react";
import { SiKubernetes } from "react-icons/si";
import { FaCopy } from "react-icons/fa";
import { useClipboard } from "@mantine/hooks";
import { calculateSum, findDivisibleBy3, findDivisibleBy7, isTenExist } from "./arrayHandlers";

function ExerciseB1() {
    const [values, setValues] = useState(['', '', '', '', '', '']);
    const [numElements, setNumElements] = useState(6);
    const [divisibleBy3Count, setDivisibleBy3Count] = useState(0);

    const handleChange = (index: any, newValue: any) => {
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);

        setDivisibleBy3Count(findDivisibleBy3(values));
    };

    const divisibleBy7Numbers = findDivisibleBy7(values);
    const clipboard = useClipboard({ timeout: 500 });

    const handleAddNumber = () => {
        setNumElements(numElements + 1);
    };

    return (
        <>
            <Sidebar />
            <h1 className="text-mainpage">Exercise B1: Array Handling</h1>
            <div className="hook-card-container">
                {Array.from({ length: numElements }).map((data, index) => (
                    <NumberInput
                        key={index}
                        value={values[index]}
                        onChange={(value) => handleChange(index, value)}
                        placeholder="Enter number"
                        className="array-number-input"
                    />
                ))}
            </div>
            <Divider my="xs" />
            <div className="state-button-container">
                <Button color="blue" mt="md" radius="md" onClick={handleAddNumber}>
                    Add Number
                </Button>
            </div>
            <Grid gutter="sm" justify="space-around" className="array-grid-container">
                <Grid.Col span={{ xl: 2, lg: 1 }}>
                    <Paper p="sm" shadow="xs" radius="md" withBorder className="array-paper-container">
                        <div className="array-icon">
                            <SiKubernetes />
                        </div>
                        <div className="array-text-container">
                            <Text size="sm">
                                <span>LENGTH</span>
                            </Text>
                            <Text size="sm">{numElements}</Text>
                        </div>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={{ xl: 2, lg: 1 }}>
                    <Paper p="sm" shadow="xs" radius="md" withBorder className="array-paper-container">
                        <div className="array-icon">
                            <SiKubernetes />
                        </div>
                        <div className="array-text-container">
                            <Text size="sm">
                                TỔNG
                            </Text>
                            <Text size="sm"> {calculateSum(values)}</Text>
                        </div>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={{ xl: 2, lg: 1 }}>
                    <Paper p="sm" shadow="xs" radius="md" withBorder className="array-paper-container">
                        <div className="array-icon">
                            <SiKubernetes />
                        </div>
                        <div className="array-text-container">
                            <Text size="sm">
                                CHIA HẾT CHO 3
                            </Text>
                            <Text size="sm">{divisibleBy3Count}</Text>
                        </div>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={{ xl: 2, lg: 1 }}>
                    <Paper p="sm" shadow="xs" radius="md" withBorder className="array-paper-container">
                        <div className="array-icon">
                            <SiKubernetes />
                        </div>
                        <div className="array-text-container">
                            <Text size="sm">TÌM SỐ 10</Text>
                            <Text size="sm">{isTenExist(values) ? 'Tìm Thấy' : 'Không Tìm Thấy'}</Text>
                        </div>
                    </Paper>
                </Grid.Col>
            </Grid>

            <Grid gutter="sm" justify="space-around" className="array-list-container">
                <Grid.Col span={6}>
                    <Text>Danh Sách Chia Hết cho 7</Text>
                    <Text>[{divisibleBy7Numbers.join(", ")}]</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                    <ActionIcon
                        variant="outline"
                        color={clipboard.copied ? 'teal' : 'blue'}
                        onClick={() => clipboard.copy(divisibleBy7Numbers)}
                        title={clipboard.copied ? 'Copied' : 'Copy'}
                    >
                        <FaCopy />
                    </ActionIcon>
                </Grid.Col>
            </Grid>
        </>
    );
}

export default ExerciseB1;
