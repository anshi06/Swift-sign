import styles from "../styles/sign.module.css";
import designs from "../styles/general.module.css";
import { ChromePicker } from "react-color";
import { useRef, useState, useEffect } from "react";

export default function DrawSection() {
  const canvasRef = useRef(null);
  const pickerRef = useRef(null);

  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [isDrawing, setIsDrawing] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState(false);
  const [strokeWidth, setStrokeWidth] = useState(2); // Initial stroke width
  const [emptyDataUrl, setEmptyDataUrl] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowTextColorPicker(false);
        setShowBackgroundColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const canvas = canvasRef.current;
    // Get the canvas data URL before drawing
    setEmptyDataUrl(canvas.toDataURL());
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL();

    if (emptyDataUrl !== dataUrl) {
      const link = document.createElement("a");
      link.href = dataUrl;

      link.download = "signature.png";

      link.click();
    } else {
      // The canvas is empty, do not save
      alert("The canvas is empty.");
    }
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
    <>
      {" "}
      <div className={styles.drawSection}>
        <h1 className={designs.headingPrimary}>
          Create your electronic signature!
        </h1>
        <div className={styles.signSection}>
          <div className={styles.signDraw}>
            <h3 className={designs.headingTertiary}>Draw here</h3>
            <canvas
              ref={canvasRef}
              height={300}
              width={600}
              className={styles.canvas}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseOut={endDrawing}></canvas>
          </div>
          {/* <div className={styles.signPreview}>
        <h3 className={designs.headingTertiary}>Preview</h3>
      </div> */}
        </div>

        <div className={styles.designGrid}>
          <div>
            <div className={styles.container}>
              <p className={styles.textColorHeading}>Text Color :</p>
              <div
                className={styles.colorPlaceholder}
                style={{ backgroundColor: textColor }}
                onClick={() =>
                  setShowTextColorPicker(!showTextColorPicker)
                }></div>
            </div>

            {showTextColorPicker && (
              <div className={styles.popover} ref={pickerRef}>
                <div className={styles.chromepicker} />
                <ChromePicker
                  color={textColor}
                  onChange={(color) => {
                    setTextColor(color.hex);
                    updateCanvasTextColor(color.hex);
                  }}
                  style={{ display: showTextColorPicker ? "block" : "none" }}
                />
              </div>
            )}
          </div>

          <div>
            <div className={styles.container}>
              <p className={styles.textColorHeading}>Background Color :</p>
              <div
                className={styles.colorPlaceholder}
                style={{ backgroundColor: backgroundColor }}
                onClick={() =>
                  setShowBackgroundColorPicker(!showBackgroundColorPicker)
                }></div>
            </div>

            {showBackgroundColorPicker && (
              <div className={styles.popover} ref={pickerRef}>
                <div className={styles.chromepicker} />
                <ChromePicker
                  color={backgroundColor}
                  onChange={(color) => {
                    setBackgroundColor(color.hex);
                    updateCanvasBackground(color.hex);
                  }}
                  style={{
                    display: showBackgroundColorPicker ? "block" : "none",
                  }}
                />
              </div>
            )}
          </div>

          <div className={`${styles.container} ${styles.strokeWidth}`}>
            <label className={styles.textColorHeading}>Stroke Width:</label>
            <input
              type="range"
              min="1"
              max="20"
              value={strokeWidth}
              onChange={handleStrokeWidthChange}
              className={styles.slider}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={saveImage} className={styles.save}>
            Save Image
          </button>
          <button onClick={clearCanvas} className={styles.clear}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
