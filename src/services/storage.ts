import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save a value to AsyncStorage.
 * @param key The key under which the value is stored.
 * @param value The value to store (will be stringified).
 */
export const saveToStorage = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
};

/**
 * Retrieve a value from AsyncStorage.
 * @param key The key to retrieve.
 * @returns The parsed value or null if not found.
 */
export const getFromStorage = async (key: string): Promise<any | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error reading from storage:', error);
    return null;
  }
};

/**
 * Remove a value from AsyncStorage.
 * @param key The key to remove.
 */
export const removeFromStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from storage:', error);
  }
};
