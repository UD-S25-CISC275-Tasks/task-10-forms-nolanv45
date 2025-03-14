import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");


    function setRequestsHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(event.target.value);
    }

    function handleUse() {
         if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function handleGain() {
        const numRequests = parseInt(requests, 10);
        if (!isNaN(numRequests) && numRequests > 0) {
            setAttempts(attempts + numRequests);
        }
        setRequests(""); 
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Remaining: {attempts}</p>
            <Form.Group controlId="attemptRequest">
            <Form.Label>Request Attempts:</Form.Label>
            <Form.Control type="text" value={requests} onChange={setRequestsHandler} />
            </Form.Group>
            <p>Attempts: {attempts} </p>
            <Button onClick={handleUse} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={handleGain}>
                Gain
            </Button>
        </div>
    );
}
