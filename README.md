
# **Project Name: 3D Rotating Mac with Customizable Texture**

## **Description**

This React Three Fiber component renders a 3D model of a Mac computer with a customizable texture for the screen. The screen smoothly rotates based on the user's scroll position, creating an engaging interactive experience.

## **Key Features (MacContainer.jsx)**

* **3D Model:** Utilizes a GLTF model (`.glb` format) for the Mac computer, providing a high-quality visual representation.
* **Customizable Texture:** Allows you to replace the default red texture (`.jpg`) with any image to personalize the screen display.
* **Interactive Rotation:** The screen smoothly rotates based on the user's scroll position, enhancing interactivity.
* **Clear Material Customization:** Code comments explain the adjustments made to the screen material properties, including emissivity, metalness, and roughness.
* **Scroll Integration:** Leverages the `useScroll` hook from `@react-three/drei` to link the screen rotation to scroll behavior.
* **Concise Code Structure:** The code is well-structured and easy to follow, promoting maintainability.

**Installation**

1. **Prerequisites:**
   * Ensure you have Node.js and npm (or yarn) installed on your system.
   * Download and install the required dependencies:
     **Bash**

     ```
     npm install react react-dom @react-three/fiber @react-three/drei
     ```
2. **Project Setup:**
   * Create a new React project using your preferred method (e.g., Create React App).
   * Place the `MacContainer.js` component file within your project's `src` directory.
   * Import and use the component in your main application file (`App.js` or similar).

**Usage**

1. **Import the Component:**
   **JavaScript**

   ```
   import MacContainer from './MacContainer';
   ```
2. **Render the Component:**
   **JavaScript**

   ```
   function App() {
     return (
       <div>
         <MacContainer />
       </div>
     );
   }
   ```
3. **Customize Texture:**

   * Replace the default red texture file (`./red.jpg`) with your desired image file.
   * Ensure the new texture file has the same name (`red.jpg`) or update the path in the `useTexture` hook accordingly.

**Additional Notes**

* The component currently positions the Mac at `[0, -10, 20]` in 3D space. You can adjust these values using the `position` prop on the `group` element.
* This example uses the basic `useScroll` hook. Consider exploring the more advanced options provided by `@react-three/drei` for finer control over scroll behavior.
* For more complex material customization, refer to the extensive documentation available for THREE.js materials.


**Project Name:** 3D MacBook Pro with Interactive Scroll and Environment

**Description**

This React application showcases a 3D model of a MacBook Pro with an interactive scroll feature and a realistic environment. The 3D model rotates smoothly based on the user's scroll, creating an engaging and immersive experience.

## **Key Features (App.jsx)**

* **3D Model:** Utilizes a `MacContainer` component (likely imported from a separate file) to render a high-quality 3D model of a MacBook Pro.
* **Interactive Scroll:** Leverages `ScrollControls` from `@react-three/drei` to link the model's rotation to the user's scroll behavior, creating a dynamic effect.
* **Realistic Environment:** Integrates an HDRI environment map to provide a visually appealing background for the 3D scene.
* **Fixed Camera:** Employs `OrbitControls` to position the camera with fixed zoom and panning for a focused view.
* **Customizable Navigation (Optional):** Consider allowing users to adjust camera position in the future for a more exploratory experience.

**Installation**

1. **Prerequisites:**
   * Ensure you have Node.js and npm (or yarn) installed on your system.
   * Download and install the required dependencies:
     **Bash**

     ```
     npm install react react-dom @react-three/fiber @react-three/drei
     ```

     **Use code **[with caution.](/faq#coding)
2. **Project Setup:**
   * Create a new React project using your preferred method (e.g., Create React App).
   * Ensure the `MacContainer.js` component is included in your project structure.
   * Place the `App.js` file (the one you're analyzing) within your project's `src` directory.

**Usage**

1. **Run the Application:**
   * Navigate to your project directory in the terminal.
   * Start the development server:
     **Bash**

     ```
     npm start
     ```

     **Use code **[with caution.](/faq#coding)
   * Open `http://localhost:5173` (or the relevant development URL) in your browser to view the application.

**Customization**

* **3D Model:** The `MacContainer` component likely offers ways to customize the 3D model (e.g., texture replacement). Refer to its documentation for details.
* **Environment Map:** The HDRI environment map URL can be modified in the `Environment` component to change the background scene. Explore free HDRI resources online.

**Additional Notes**

* Consider adding comments within the `App.js` code to further enhance readability and maintainability.
* The code currently utilizes a fixed camera position. Explore allowing users to adjust the camera angle for a more interactive experience using the `OrbitControls` options.
* Error handling and potential performance optimizations could be implemented for a more robust application.

**Contribution**

We welcome contributions to improve this application! Feel free to submit pull requests that enhance functionality, documentation, or error handling.

**Acknowledgments**

* React Three Fiber: [invalid URL removed]
* @react-three/drei:[https://github.com/pmndrs/drei](https://github.com/pmndrs/drei)
* THREE.js:[https://threejs.org/](https://threejs.org/)




**Contribution**

We welcome contributions to improve this component! Feel free to submit pull requests that enhance functionality, documentation, or error handling.

# **Author(s)**

**Paras Singh**
