import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useReducer } from "react";
import "./App.css";
import { calculatorReducer, initialState } from "./reducer";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators: string[] = ["+", "-", "*", "/", "="];
function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberClick = (number: string) => {
    dispatch({ type: "ADD_NUMBER", payload: number });
  };

  const handleOperatorClick = (operator: string) => {
    if (operator === "=") {
      dispatch({ type: "CALCULATE" });
    } else {
      dispatch({ type: "SET_OPERATOR", payload: operator });
    }
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <Box
      className='container_calc'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <h1>Calculator</h1>
      <Box
        className='calc'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          className='result_and_input'
          display='flex'
          flexDirection='row'
          gap={2}
          alignItems='center'
          marginBottom={2}
        >
          <TextField
            value={state.previousInput}
            variant='outlined'
            color='info'
            disabled
            sx={{
              maxWidth: 100,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1.5rem",
              },
            }}
          />
          <TextField
            value={state.currentInput}
            variant='outlined'
            color='info'
            disabled
            sx={{
              input: { color: "white" },
              maxWidth: 100,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: "1.5rem",
              },
            }}
          />
          <p className='result' style={{ fontSize: "1.5rem", color: "white" }}>
            {state.result}
          </p>
        </Box>

        <Box
          width='100%'
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='center'
          gap={1}
        >
          <Box className='numbers' width='30%' display={"flex"} flexWrap='wrap'>
            {numbers.map((elem) => (
              <Button
                key={elem}
                onClick={() => handleNumberClick(elem.toString())}
                sx={{
                  borderRadius: 50,
                  width: 60,
                  height: 60,
                  fontSize: "1.25rem",
                }}
              >
                {elem}
              </Button>
            ))}
          </Box>
          <Box
            className='operators'
            display='flex'
            flexDirection='column'
            gap={1}
          >
            {operators.map((elem) => (
              <Button
                key={elem}
                onClick={() => handleOperatorClick(elem)}
                sx={{
                  borderRadius: 50,
                  width: 60,
                  height: 60,
                  fontSize: "1.25rem",
                }}
              >
                {elem}
              </Button>
            ))}
            <Button
              onClick={handleClear}
              sx={{
                borderRadius: 50,
                width: 60,
                height: 60,
                fontSize: "1.25rem",
              }}
            >
              C
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
