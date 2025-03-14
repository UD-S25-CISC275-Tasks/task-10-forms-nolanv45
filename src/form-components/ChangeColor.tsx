import React, { useState } from "react";
import { Form } from "react-bootstrap";




export function ChangeColor(): React.JSX.Element {
    const colors = ["red", "blue", "green", "brown", "purple", "orange", "pink", "yellow"];
    const [selectColor, setSelectColor] = useState<string>("red");

    function handleSelectColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    label={color}
                    value={color}
                    checked={color === selectColor}
                    onChange={handleSelectColor}
                    inline style = {{ color }}
                />
            ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    textAlign: "center",
                    border: "1px solid black",
                    width: "200px",
                }}
            >
                {selectColor}
            </div>
        </div>
    );
}
