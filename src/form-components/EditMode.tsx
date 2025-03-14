import React, { useState } from "react";
import { Form } from "react-bootstrap";






export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function setUserNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
            setUserName(event.target.value);
        }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                    onChange={() => {setEditMode(!editMode)}}
                />
            {editMode ? (
                <div>
                    <Form.Group controlId="editName">
                        <Form.Label>Edit Name:</Form.Label>
                        <Form.Control type="text" value={userName} onChange={setUserNameHandler} />
                    </Form.Group>

                    <Form.Check
                        type="switch"
                        id="student-switch"
                        label="Student"
                        checked={student}
                        onChange={() => {setStudent(!student)}}
                    />
                </div>
            ) : (
                <p>{userName} is {student ? "a student" : "not a student"}.</p>
            )}
        </div>
    );
}
