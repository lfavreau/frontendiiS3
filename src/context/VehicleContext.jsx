import { createContext, useEffect, useMemo, useReducer } from 'react';
import { initialVehicles } from '../data/initialVehicles';

export const VehicleContext = createContext();

const STORAGE_KEY = 'pfy2202-vehicles-state';

function createInitialState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return {
    inventory: initialVehicles,
    possiblePurchases: [],
  };
}

function vehicleReducer(state, action) {
  switch (action.type) {
    case 'ADD_VEHICLE': {
      return {
        ...state,
        inventory: [action.payload, ...state.inventory],
      };
    }

    case 'MARK_POSSIBLE_PURCHASE': {
      const vehicle = state.inventory.find((item) => item.id === action.payload);
      if (!vehicle) return state;

      return {
        inventory: state.inventory.filter((item) => item.id !== action.payload),
        possiblePurchases: [vehicle, ...state.possiblePurchases],
      };
    }

    case 'REMOVE_POSSIBLE_PURCHASE': {
      const vehicle = state.possiblePurchases.find((item) => item.id === action.payload);
      if (!vehicle) return state;

      return {
        inventory: [vehicle, ...state.inventory],
        possiblePurchases: state.possiblePurchases.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}

export function VehicleProvider({ children }) {
  const [state, dispatch] = useReducer(vehicleReducer, undefined, createInitialState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(
    () => ({
      inventory: state.inventory,
      possiblePurchases: state.possiblePurchases,
      addVehicle: (vehicle) => dispatch({ type: 'ADD_VEHICLE', payload: vehicle }),
      markPossiblePurchase: (id) => dispatch({ type: 'MARK_POSSIBLE_PURCHASE', payload: id }),
      removePossiblePurchase: (id) => dispatch({ type: 'REMOVE_POSSIBLE_PURCHASE', payload: id }),
    }),
    [state]
  );

  return <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>;
}
