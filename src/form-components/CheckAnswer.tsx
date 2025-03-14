import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({expectedAnswer,}: {
    expectedAnswer: string;
    
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);

    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerCheck">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Control type="text" value={answer} onChange={updateAnswer} />
            </Form.Group>
            <p>Answer: {expectedAnswer === answer ? "✔️" : "❌"} </p>
        </div>
    );
}
