import { useState } from 'react';
import CryptoJS from 'crypto-js';

const useSecureStorage = (key: string, initialValue: string, secretKey: string) => {
  const getStoredValue = () => {
    const encryptedData = localStorage.getItem(btoa(key));
    if (!encryptedData) return initialValue;

    try {
      const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error('Failed to decrypt data:', error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value: string | ((value: string) => string)) => { // value is callBack function here
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(valueToStore), secretKey).toString();
      localStorage.setItem(btoa(key), encryptedData);
      setStoredValue(valueToStore);
    } catch (error) {
      console.error('Failed to encrypt and store data:', error);
    }
  };

  return [storedValue, setValue] as const;
};

export default useSecureStorage;
