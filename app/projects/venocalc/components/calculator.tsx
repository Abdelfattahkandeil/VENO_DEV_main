"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as math from "mathjs"

interface CalculatorProps {
  isDarkMode: boolean
  addToHistory: (calculation: string) => void
}

export default function Calculator({ isDarkMode, addToHistory }: CalculatorProps) {
  const [display, setDisplay] = useState("0")
  const [equation, setEquation] = useState("")
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false)
  const [isScientificMode, setIsScientificMode] = useState(false)
  const [memory, setMemory] = useState<number>(0)
  const [lastOperation, setLastOperation] = useState<string | null>(null)
  const displayRef = useRef<HTMLDivElement>(null)

  // Button press animation
  const buttonVariants = {
    rest: { scale: 1 },
    pressed: { scale: 0.95 },
  }

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key

      if (/[0-9]/.test(key)) {
        handleNumberInput(key)
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleOperatorInput(key)
      } else if (key === "Enter" || key === "=") {
        calculateResult()
      } else if (key === "Escape" || key === "c" || key === "C") {
        clearDisplay()
      } else if (key === "." || key === ",") {
        handleDecimalInput()
      } else if (key === "Backspace") {
        handleBackspace()
      } else if (key === "(" || key === ")") {
        handleParenthesis(key)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [display, equation, shouldResetDisplay])

  // Auto-resize display text
  useEffect(() => {
    if (displayRef.current) {
      const container = displayRef.current
      const content = container.firstChild as HTMLElement

      if (content) {
        // Reset font size to default
        content.style.fontSize = "2rem"

        // Check if content overflows and reduce font size if needed
        if (content.scrollWidth > container.clientWidth) {
          const scale = container.clientWidth / content.scrollWidth
          const newSize = Math.max(1, Math.floor(2 * scale)) + "rem"
          content.style.fontSize = newSize
        }
      }
    }
  }, [display])

  // Handle number input
  const handleNumberInput = (num: string) => {
    if (display === "0" || shouldResetDisplay) {
      setDisplay(num)
      setShouldResetDisplay(false)
    } else {
      setDisplay(display + num)
    }
  }

  // Handle operator input
  const handleOperatorInput = (operator: string) => {
    if (shouldResetDisplay) {
      setEquation(equation.slice(0, -1) + operator)
    } else {
      setEquation(equation + display + operator)
      setShouldResetDisplay(true)
    }
    setLastOperation(operator)
  }

  // Handle decimal input
  const handleDecimalInput = () => {
    if (shouldResetDisplay) {
      setDisplay("0.")
      setShouldResetDisplay(false)
    } else if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  // Handle backspace
  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
    }
  }

  // Handle parenthesis
  const handleParenthesis = (parenthesis: string) => {
    if (shouldResetDisplay) {
      setEquation(equation + parenthesis)
    } else {
      if (display === "0") {
        setEquation(equation + parenthesis)
      } else {
        setEquation(equation + display + parenthesis)
        setShouldResetDisplay(true)
      }
    }
  }

  // Clear display
  const clearDisplay = () => {
    setDisplay("0")
    setEquation("")
    setShouldResetDisplay(false)
  }

  // Calculate result
  const calculateResult = () => {
    try {
      const fullEquation = equation + display

      if (!fullEquation || fullEquation === "0") return

      // Using mathjs for safer and more comprehensive calculation
      const result = math.evaluate(fullEquation)

      // Format the result
      const formattedResult =
        typeof result === "number"
          ? Number.isInteger(result)
            ? result.toString()
            : Number.parseFloat(result.toFixed(8)).toString()
          : result.toString()

      setDisplay(formattedResult)

      // Add to history
      addToHistory(`${fullEquation} = ${formattedResult}`)

      setEquation("")
      setShouldResetDisplay(true)
    } catch (error) {
      setDisplay("Error")
      setShouldResetDisplay(true)
    }
  }

  // Handle scientific functions
  const handleScientificFunction = (func: string) => {
    try {
      let result
      const currentValue = Number.parseFloat(display)

      switch (func) {
        case "sin":
          result = math.sin(currentValue)
          break
        case "cos":
          result = math.cos(currentValue)
          break
        case "tan":
          result = math.tan(currentValue)
          break
        case "log":
          result = math.log10(currentValue)
          break
        case "ln":
          result = math.log(currentValue)
          break
        case "sqrt":
          result = math.sqrt(currentValue)
          break
        case "square":
          result = math.pow(currentValue, 2)
          break
        case "cube":
          result = math.pow(currentValue, 3)
          break
        case "reciprocal":
          result = 1 / currentValue
          break
        case "factorial":
          result = math.factorial(currentValue)
          break
        case "pi":
          result = Math.PI
          break
        case "e":
          result = Math.E
          break
        default:
          return
      }

      const formattedResult = Number.isInteger(result)
        ? result.toString()
        : Number.parseFloat(result.toFixed(8)).toString()

      setDisplay(formattedResult)

      // Add to history
      addToHistory(`${func}(${display}) = ${formattedResult}`)

      setShouldResetDisplay(true)
    } catch (error) {
      setDisplay("Error")
      setShouldResetDisplay(true)
    }
  }

  // Handle memory functions
  const handleMemoryFunction = (func: string) => {
    const currentValue = Number.parseFloat(display)

    switch (func) {
      case "MC": // Memory Clear
        setMemory(0)
        break
      case "MR": // Memory Recall
        setDisplay(memory.toString())
        setShouldResetDisplay(true)
        break
      case "M+": // Memory Add
        setMemory(memory + currentValue)
        setShouldResetDisplay(true)
        break
      case "M-": // Memory Subtract
        setMemory(memory - currentValue)
        setShouldResetDisplay(true)
        break
      default:
        return
    }
  }

  // Button styles based on type and theme
  const getButtonStyle = (type: string) => {
    const baseStyle =
      "rounded-xl text-lg font-medium flex items-center justify-center transition-all duration-200 shadow-sm h-14" // Added h-14 for fixed height

    if (type === "number") {
      return `${baseStyle} ${
        isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"
      }`
    } else if (type === "operator") {
      return `${baseStyle} bg-[#6366F1] text-white hover:bg-[#4F46E5]`
    } else if (type === "equals") {
      return `${baseStyle} bg-[#10B981] text-white hover:bg-[#059669]`
    } else if (type === "clear") {
      return `${baseStyle} ${
        isDarkMode ? "bg-red-600 text-white hover:bg-red-500" : "bg-red-500 text-white hover:bg-red-400"
      }`
    } else if (type === "memory") {
      return `${baseStyle} ${
        isDarkMode ? "bg-amber-600 text-white hover:bg-amber-500" : "bg-amber-500 text-white hover:bg-amber-400"
      }`
    } else if (type === "scientific") {
      return `${baseStyle} ${
        isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`
    } else if (type === "toggle") {
      return `${baseStyle} ${
        isDarkMode
          ? isScientificMode
            ? "bg-purple-600 text-white hover:bg-purple-500"
            : "bg-gray-700 text-white hover:bg-gray-600"
          : isScientificMode
            ? "bg-purple-500 text-white hover:bg-purple-400"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`
    }

    return baseStyle
  }

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 shadow-gray-900/50" : "bg-gray-100 shadow-gray-300/50"
      } ${isScientificMode ? "transform-gpu scale-100" : "transform-gpu scale-100"}`}
    >
      {/* Display */}
      <div className={`p-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="h-6 text-right text-sm overflow-hidden text-gray-500 mb-1">{equation}</div>
        <div ref={displayRef} className="h-12 flex justify-end items-center overflow-hidden">
          <div className={`text-right text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            {display}
          </div>
        </div>

        {/* Memory indicator */}
        {memory !== 0 && <div className="text-right text-xs text-[#6366F1] mt-1">M: {memory}</div>}
      </div>

      {/* Mode toggle */}
      <div className={`px-4 py-2 flex justify-between items-center ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="text-sm font-medium text-gray-500">
          {isScientificMode ? "Scientific Mode" : "Standard Mode"}
        </div>
        <motion.button
          variants={buttonVariants}
          initial="rest"
          whileTap="pressed"
          className={getButtonStyle("toggle")}
          onClick={() => setIsScientificMode(!isScientificMode)}
          style={{ padding: "0.5rem 0.75rem", borderRadius: "1rem" }}
        >
          {isScientificMode ? "Standard" : "Scientific"}
        </motion.button>
      </div>

      {/* Buttons */}
      <div className={`p-4 grid gap-4 ${isScientificMode ? "grid-cols-5" : "grid-cols-4"}`}>
        {/* Scientific functions (only visible in scientific mode) */}
        {isScientificMode && (
          <div className="col-span-1 grid grid-cols-1 gap-3">
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("sin")}
            >
              sin
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("cos")}
            >
              cos
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("tan")}
            >
              tan
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("log")}
            >
              log
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("ln")}
            >
              ln
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("sqrt")}
            >
              √
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("square")}
            >
              x²
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("cube")}
            >
              x³
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("reciprocal")}
            >
              1/x
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileTap="pressed"
              className={getButtonStyle("scientific")}
              onClick={() => handleScientificFunction("factorial")}
            >
              n!
            </motion.button>
          </div>
        )}

        {/* Main calculator buttons */}
        <div className={`grid grid-cols-4 gap-3 ${isScientificMode ? "col-span-4" : "col-span-4"}`}>
          {/* Memory functions row */}
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("memory")}
            onClick={() => handleMemoryFunction("MC")}
          >
            MC
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("memory")}
            onClick={() => handleMemoryFunction("MR")}
          >
            MR
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("memory")}
            onClick={() => handleMemoryFunction("M+")}
          >
            M+
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("memory")}
            onClick={() => handleMemoryFunction("M-")}
          >
            M-
          </motion.button>

          {/* Row 1 */}
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("clear")}
            onClick={clearDisplay}
          >
            C
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("operator")}
            onClick={() => handleParenthesis("(")}
          >
            (
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("operator")}
            onClick={() => handleParenthesis(")")}
          >
            )
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("operator")}
            onClick={() => handleOperatorInput("/")}
          >
            ÷
          </motion.button>

          {/* Row 2 */}
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("7")}
          >
            7
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("8")}
          >
            8
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("9")}
          >
            9
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("operator")}
            onClick={() => handleOperatorInput("*")}
          >
            ×
          </motion.button>

          {/* Row 3 */}
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("4")}
          >
            4
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("5")}
          >
            5
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("6")}
          >
            6
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("operator")}
            onClick={() => handleOperatorInput("-")}
          >
            -
          </motion.button>

          {/* Row 4 */}
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("1")}
          >
            1
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("2")}
          >
            2
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("3")}
          >
            3
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("operator")}
            onClick={() => handleOperatorInput("+")}
          >
            +
          </motion.button>

          {/* Row 5 */}
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleScientificFunction("pi")}
          >
            π
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={() => handleNumberInput("0")}
          >
            0
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("number")}
            onClick={handleDecimalInput}
          >
            .
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="rest"
            whileTap="pressed"
            className={getButtonStyle("equals")}
            onClick={calculateResult}
          >
            =
          </motion.button>
        </div>
      </div>
    </div>
  )
}
