# Seesaw Simulation

This project is an interactive seesaw simulation built using pure JavaScript, HTML and CSS.

Users can click directly on the plank to drop objects with random weights. Each object influences the balance of the seesaw depending on its weight and its distance from the pivot point.
The system recalculates the balance dynamically and rotates the plank accordingly.

---

## Live Demo

https://zeynepalkoc.github.io/seesawsimulation/

## GitHub Repository

https://github.com/zeynepalkoc/seesawsimulation

---

## How It Works

When the user clicks on the plank:

- A new object is generated
- The object receives a random weight between **1 and 10 kg**
- The click position determines the distance from the pivot
- Torque values for left and right sides are recalculated
- The seesaw tilts according to the difference between the two sides

The tilt angle is calculated using a simple torque formula: `torque = weight × distance`



To prevent extreme rotations, the tilt angle is limited to **±30 degrees**.

---

## Main Features

- Interactive click system to place objects on the plank
- Random weight generation (1–10 kg)
- Torque based balance calculation
- Smooth tilt animation of the plank
- Preview ball showing the upcoming weight
- Real-time statistics panel
- Simulation log system
- Reset button to restart the simulation
- State persistence using localStorage
- Responsive layout

---

## Design Decisions

The project was implemented using only **vanilla JavaScript** without any frameworks.

Some key decisions during development:

- The pivot point is positioned exactly at the center of the plank
- Objects are rendered as circular elements with different colors
- The plank rotation is handled using CSS transforms
- Object data (weight and distance) is stored and recalculated when needed
- The simulation state is saved in localStorage to preserve the session after refresh

---

## Physics Logic
Objects placed on the left side contribute to **left torque**, while objects on the right contribute to **right torque**.

The final angle is limited to **±30 degrees** to prevent unrealistic movement.

---

## Implementation Details

### Click Interaction

Users can only interact with the **plank element**.

When a click occurs:

1. The click position is detected
2. The distance from the pivot is calculated
3. A new object is generated with random weight
4. Torque values are recalculated
5. The plank rotates based on the new balance

### Preview Ball System

Before placing an object, the system shows a **preview ball**.

This preview displays:

- the next random weight
- the approximate placement position

This helps users understand how the next object may affect the balance.

### LocalStorage Persistence

The simulation state is stored using **localStorage**.

Saved data includes:

- object weights
- object positions
- current tilt angle
- simulation logs

This allows the simulation to continue even after the page is refreshed.

---

## Technologies Used

- JavaScript (Vanilla JS)
- HTML
- CSS

No external libraries or frameworks were used.

---

## Project Structure
```seesaw-simulation
│
├── assets
│ └── seesaw.png
│
├── index.html
├── styles.css
├── app.js
└── README.md```

---

## AI Assistance

AI tools were only used during debugging to help identify minor issues.  
The implementation, logic, and structure of the project were written manually.
