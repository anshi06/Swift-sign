import { useRef, useState } from "react";
import { ChromePicker } from "react-color";
import Navigation from "./components/Navigation";
import styles from "./styles/app.module.css"
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";

function App() {
  const canvasRef = useRef(null);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [isDrawing, setIsDrawing] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(2); // Initial stroke width

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL();

    const link = document.createElement("a");
    link.href = dataUrl;

    link.download = "signature.png";

    link.click();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    setIsDrawing(true);

    ctx.strokeStyle = textColor;
    ctx.fillStyle = backgroundColor;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.lineWidth = strokeWidth;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const updateCanvasBackground = (color) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const updateCanvasTextColor = (color) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
  };

  const handleStrokeWidthChange = (e) => {
    setStrokeWidth(parseInt(e.target.value));
  };

  return (
    <div className={styles.app}>
      <Navigation />
      <HeroSection/>
      <HowItWorks/>
      {/* <div>
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="border border-gray-400"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
        ></canvas>

        <div>
          <div onChange={() => setShowTextColorPicker(!showTextColorPicker)}>
            <p className="mb-5 text-center bg-green-500 text-white">
              Text Color
            </p>
            <ChromePicker
              color={textColor}
              onChange={(color) => {
                setTextColor(color.hex);
                updateCanvasTextColor(color.hex);
              }}
              style={{ display: showTextColorPicker ? "block" : "none" }}
            />
          </div>
          <div>
            <p className=" text-center bg-green-500 text-white mb-5">
              Background Color
            </p>
            <ChromePicker
              color={backgroundColor}
              onChange={(color) => {
                setBackgroundColor(color.hex);
                updateCanvasBackground(color.hex);
              }}
            />
          </div>
        </div>

        <div>
          <label className="mr-2">Stroke Width:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={strokeWidth}
            onChange={handleStrokeWidthChange}
            className="slider"
          />
          <span className="ml-2">{strokeWidth}</span>
        </div>

        <div>
          <button
            onClick={saveImage}
          >
            Save Image
          </button>
          <button
            onClick={clearCanvas}
          >
            Clear
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
