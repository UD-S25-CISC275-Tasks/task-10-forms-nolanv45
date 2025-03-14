import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Thanksgiving"
    | "Easter"
    | "Valentines";

const nextHolidaysAlphabet: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Valentines",
    Valentines: "Christmas"
};

const nextHolidaysOrder: Record<Holiday, Holiday> = {
    Christmas: "Valentines",
    Valentines: "Easter",
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas"
};

const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    Easter: "🐇",
    Valentines: "❤️"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    return (
        <div>
            <h3>Cycle Holiday</h3>

            <p>Holiday: {holidayEmojis[holiday]}</p>

            <Button
                onClick={() => {
                    setHoliday((prev) => nextHolidaysAlphabet[prev]);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    setHoliday((prev) => nextHolidaysOrder[prev]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
