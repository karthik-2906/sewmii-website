'use client';

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import { IoIosArrowDropright } from "react-icons/io";

const calculatorInputs = {
    torso: [
        { id: 1, hidden: false, label: "Neck", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: false },
        { id: 2, hidden: false, label: "Shoulder", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: false },
        { id: 3, hidden: false, label: "Neck - Shoulder", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: true },

        { id: 4, hidden: false, label: "Center Front", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 5, hidden: false, label: "Front Figure", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 6, hidden: false, label: "Front Chest", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: true },

        { id: 7, hidden: false, label: "Center Back", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 8, hidden: false, label: "Back Figure", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 9, hidden: false, label: "Back Chest", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: true },

        { id: 10, hidden: false, label: "Bust Point", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 11, hidden: false, label: "Bust Distance", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: false },
        { id: 12, hidden: false, label: "Bust", calculatedLabel: "Bust Front", calcLogic: 3, dependsOn: 0, divider: false },
        { id: 13, hidden: true, label: "Bust", calculatedLabel: "Bust Back", calcLogic: 4, dependsOn: 12, divider: false },
        { id: 14, hidden: false, label: "Waist", calculatedLabel: "Waist Front", calcLogic: 3, dependsOn: 0, divider: false },
        { id: 15, hidden: true, label: "Waist", calculatedLabel: "Waist Back", calcLogic: 4, dependsOn: 14, divider: false },
        { id: 16, hidden: false, label: "Hips", calculatedLabel: "Hips Front", calcLogic: 3, dependsOn: 0, divider: false },
        { id: 17, hidden: true, label: "Hips", calculatedLabel: "Hips Back", calcLogic: 4, dependsOn: 16, divider: false },
    ],

    sleeve: [
        { id: 18, hidden: false, label: "Sleeve Length", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 19, hidden: false, label: "Elbow Length", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 20, hidden: false, label: "Cap Height", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 21, hidden: false, label: "Arm Girth", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 22, hidden: false, label: "Elbow Girth", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 23, hidden: false, label: "Wrist Girth", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
    ],

    skirt: [
        { id: 24, hidden: false, label: "Knee Length", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 25, hidden: false, label: "Floor Length", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 26, hidden: false, label: "Shoe Height", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
    ],

    pant: [
        { id: 27, hidden: false, label: "Crotch", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 28, hidden: false, label: "Pant Waist", calculatedLabel: "Pant Waist Front", calcLogic: 3, dependsOn: 0, divider: false },
        { id: 29, hidden: true, label: "Pant Waist", calculatedLabel: "Pant Waist Back", calcLogic: 4, dependsOn: 28, divider: false },
        { id: 30, hidden: false, label: "Side Length", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 31, hidden: false, label: "Inseam", calculatedLabel: "Calculated", calcLogic: 2, dependsOn: 0, divider: false },
        { id: 32, hidden: false, label: "Leg Girth", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: false },
        { id: 33, hidden: false, label: "Calf Girth", calculatedLabel: "Calculated", calcLogic: 1, dependsOn: 0, divider: false },
    ]
};

interface CalculatorProps {
    title: string;
    height: string;
    variant: keyof typeof calculatorInputs;
}

const Calculator: React.FC<CalculatorProps> = ({ title, height, variant }) => {


    type InputValues = {
        [key: number]: string;
    };

    const [inputValues, setInputValues] = React.useState<InputValues>(
        calculatorInputs[variant].reduce((acc, input) => {
            if (input.id == 26) {
                acc[input.id] = "0";
            } else {
                acc[input.id] = "";
            }
            return acc;
        }, {} as InputValues)
    );

    const [calculatedValues, setCalculatedValues] = React.useState<InputValues>(
        calculatorInputs[variant].reduce((acc, input) => {
            acc[input.id] = "";
            return acc;
        }, {} as InputValues)
    );

    const [isCm, setIsCm] = React.useState(false);

    const formatValue = (value: string): string => {
        if (!value) return "";
        const num = parseFloat(value);
        return num % 1 === 0 ? num.toFixed(0) : num.toFixed(2);
    };

    const handleUnitToggle = () => {
        setIsCm((prev) => !prev);

        setInputValues((prevValues) => {
            const updatedValues = { ...prevValues };
            Object.keys(updatedValues).forEach((key) => {
                const value = updatedValues[+key];
                if (value && !isNaN(parseFloat(value))) {
                    updatedValues[+key] = isCm
                        ? formatValue((parseFloat(value) / 2.54).toFixed(2))
                        : formatValue((parseFloat(value) * 2.54).toFixed(2));
                }
            });
            return updatedValues;
        });

        setCalculatedValues((prevValues) => {
            const updatedValues = { ...prevValues };
            Object.keys(updatedValues).forEach((key) => {
                const value = updatedValues[+key];
                if (value && !isNaN(parseFloat(value))) {
                    updatedValues[+key] = isCm
                        ? formatValue((parseFloat(value) / 2.54).toFixed(2))
                        : formatValue((parseFloat(value) * 2.54).toFixed(2));
                }
            });
            return updatedValues;
        });
    };

    /*
        Logic for shoe height and Floor length that is hardcoded
    */

    React.useEffect(() => {
        const value25 = parseFloat(inputValues[25]) || 0;
        const value26 = parseFloat(inputValues[26]) || 0;

        const calculatedValue25 = formatValue((value25 + value26).toFixed(2));

        setCalculatedValues((prevValues) => ({
            ...prevValues,
            [25]: calculatedValue25,
        }));
    }, [inputValues[25], inputValues[26]]);

    const handleInputChange = (id: number, value: string, calcLogic: number) => {
        const regex = isCm
            ? /^\d{0,3}(\.\d{0,2})?$/
            : /^\d{0,2}(\.\d{0,2})?$/;

        if (regex.test(value)) {
            let calculatedValue = "";
            if (value && !isNaN(parseFloat(value))) {
                const numericValue = parseFloat(value);
                switch (calcLogic) {
                    case 1: // Divide by 2
                        calculatedValue = formatValue((numericValue / 2).toFixed(2));
                        break;
                    case 2: // No change
                        calculatedValue = formatValue(numericValue.toFixed(2));
                        break;
                    case 3: // Divided by 2 + 0.5
                        calculatedValue = formatValue(((numericValue / 4) + 0.5).toFixed(2));
                        break;
                    case 4: // Divided by 2 - 0.5
                        calculatedValue = formatValue(((numericValue / 4) - 0.5).toFixed(2));
                        break;
                    default:
                        calculatedValue = formatValue((numericValue).toFixed(2));
                        break;
                }
            }

            setInputValues((prevValues) => {
                const updatedValues = {
                    ...prevValues,
                    [id]: value,
                };

                calculatorInputs[variant].forEach((input) => {
                    if (input.dependsOn === id) {
                        updatedValues[input.id] = value;
                        handleInputChange(input.id, updatedValues[input.id], input.calcLogic);
                    }
                });

                return updatedValues;
            });
            setCalculatedValues((prevValues) => {
                const newValues = {
                    ...prevValues,
                    [id]: calculatedValue,
                };

                return newValues;
            });
        }
    };

    return (
        <Box
            component={"div"}
            sx={{
                backgroundColor: "var(--calculator-3d-background)",
                height: {height},
                margin: "48px 32px 32px 16px",
                position: "relative",
                maxWidth: 600,
            }}
        >
            <Box
                component={"div"}
                sx={{
                    backgroundColor: "var(--calculator-background)",
                    border: "3px solid var(--calculator-3d-background)",
                    width: "100%",
                    position: "absolute",
                    left: "16px",
                    bottom: "16px",
                    padding: 4,
                    color: "var(--calculator-3d-background)",
                }}
            >
                <Box component={"div"} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
                    <Typography variant="h4" sx={{ fontFamily: "Source Sans Bold" }}>
                        {title}
                    </Typography>
                    <Box component={"div"} display={"flex"} alignItems={"center"}>
                        <Typography variant="body2" fontFamily={"Source Sans Bold"}>
                            INCH
                        </Typography>
                        <Switch disableRipple checked={isCm} onChange={handleUnitToggle} />
                        <Typography variant="body2" fontFamily={"Source Sans Bold"}>
                            CM
                        </Typography>
                    </Box>
                </Box>
                <Box component={"div"} display={"flex"} flexDirection={"column"} gap={2} marginTop={2}>
                    {calculatorInputs[variant].map((inputs) => (
                        <div key={inputs.id}>
                            <Box
                                component={"div"}
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Box
                                    component={"div"}
                                    width={"40%"}
                                    marginRight={1}
                                    sx={{
                                        visibility: inputs.hidden ? "hidden" : "visible",
                                    }}
                                >
                                    <Typography variant="body2" ml={1} fontFamily={"Source Sans Regular"} fontSize={12}>
                                        {inputs.label}
                                    </Typography>
                                    <Box
                                        component={"div"}
                                        sx={{
                                            backgroundColor: "var(--calculator-3d-background)",
                                            height: 48,
                                            position: "relative",
                                            marginTop: "12px",
                                        }}
                                    >
                                        <TextField
                                            id={`input-${inputs.id}`}
                                            label=""
                                            variant="outlined"
                                            disabled={inputs.hidden}
                                            sx={{
                                                backgroundColor: "var(--calculator-background)",
                                                position: "absolute",
                                                left: "8px",
                                                bottom: "8px",
                                                width: "100%",
                                            }}

                                            value={inputValues[inputs.id]}
                                            onChange={(e) =>
                                                handleInputChange(inputs.id, e.target.value, inputs.calcLogic)
                                            }
                                            slotProps={{
                                                input: {
                                                    inputMode: "decimal",
                                                },
                                                htmlInput: {
                                                    pattern: isCm ? "\\d{1,3}(\\.\\d{0,2})?" : "\\d{1,2}(\\.\\d{0,2})?",
                                                },
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <IoIosArrowDropright
                                    style={{ height: "24px", width: "24px", marginTop: "10px", visibility: inputs.id == 26 ? "hidden" : "visible" }}
                                />
                                <Box
                                    component={"div"}
                                    width={"40%"}
                                    sx={{
                                        visibility: inputs.id == 26 ? "hidden" : "visible",
                                    }}
                                >
                                    <Typography variant="body2" ml={1} fontFamily={"Source Sans Regular"} fontSize={12}>
                                        {inputs.calculatedLabel}
                                    </Typography>
                                    <Box
                                        component={"div"}
                                        sx={{
                                            backgroundColor: "var(--calculator-3d-background)",
                                            height: 48,
                                            position: "relative",
                                            marginTop: "12px",
                                        }}
                                    >
                                        <TextField
                                            id={`calculated-${inputs.id}`}
                                            label=""
                                            variant="outlined"
                                            disabled={true}
                                            sx={{
                                                backgroundColor: "var(--calculator-background)",
                                                position: "absolute",
                                                left: "8px",
                                                bottom: "8px",
                                                width: "100%",
                                            }}
                                            value={calculatedValues[inputs.id]}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            {inputs.divider == true ? <Divider sx={{ borderWidth: 1, borderColor: 'var(--calculator-3d-background)', margin: '24px 0' }} /> : ''}
                        </div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Calculator;
