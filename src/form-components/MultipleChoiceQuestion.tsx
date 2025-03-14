import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {


    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Pick an option.</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                  { options.map((option: string) =>
                    <option key={option} value={option}>{option}</option>
                  )}
                </Form.Select>
            </Form.Group>
            <p>Answer: {expectedAnswer === answer ? "✔️" : "❌"} </p>


        </div>
    );
}
