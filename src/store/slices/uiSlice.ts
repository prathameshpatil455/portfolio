import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isMenuOpen: boolean;
  cursorPosition: { x: number; y: number };
  activeSection: string;
}

const initialState: UiState = {
  isMenuOpen: false,
  cursorPosition: { x: 0, y: 0 },
  activeSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    updateCursorPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.cursorPosition = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, updateCursorPosition, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;