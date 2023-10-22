import { Button, Divider, SegmentedControl, Switch } from "@mantine/core";
import Sidebar from "../sidebar";
import { useState } from "react";

type ButtonVariant = 'outline' | 'light' | 'filled' | 'subtle' | 'default';

function Exercise2() {
    const [value, setValue] = useState('default');
    const [buttonColor, setButtonColor] = useState('default');
    const [checked, setChecked] = useState(false);
    const handleSegmentChange = (newValue: ButtonVariant) => {
        setValue(newValue)
        setButtonColor(newValue);
    };

    return (
        <div>
            <Sidebar />
            <h1 className="text-mainpage">Exercise 2: Simple React State</h1>
            <div className="state-container">
                <div className="state-segment-container">
                    <SegmentedControl
                        color="red"
                        value={value}
                        onChange={handleSegmentChange}
                        data={[
                            { label: 'Outline', value: 'outline' },
                            { label: 'Light', value: 'light' },
                            { label: 'Filled', value: 'filled' },
                            { label: 'Subtle', value: 'subtle' },
                            { label: 'Default', value: 'default' },
                        ]}
                    />
                    <Switch
                        defaultChecked
                        label="Disabled"
                        color="blue"
                        className="state-switch"
                        checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}
                    />
                </div>

                <Divider my="xs" />
                <div className="state-button-container">
                    <Button variant={buttonColor} color="blue" mt="md" radius="md" disabled={checked}>
                        The Button
                    </Button>
                </div>

            </div>

        </div>
    );
}

export default Exercise2;