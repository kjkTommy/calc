export const initialState = {
  currentInput: "",
  previousInput: "",
  operator: "",
  result: 0,
};
type ActionType =
  | { type: "ADD_NUMBER"; payload: string }
  | { type: "SET_OPERATOR"; payload: string }
  | { type: "CALCULATE" }
  | { type: "CLEAR" };
export function calculatorReducer(
  state: typeof initialState,
  action: ActionType,
) {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        currentInput: state.currentInput + action.payload,
      };
    case "SET_OPERATOR":
      return {
        ...state,
        previousInput: state.currentInput,
        currentInput: "",
        operator: action.payload,
      };
    case "CALCULATE": {
      const prev = parseFloat(state.previousInput);
      const current = parseFloat(state.currentInput);
      let result = 0;

      switch (state.operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = current !== 0 ? prev / current : NaN;
          break;
        default:
          break;
      }

      return {
        currentInput: result.toString(),
        previousInput: "",
        operator: "",
        result,
      };
    }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}
