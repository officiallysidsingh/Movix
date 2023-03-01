import { useEffect } from "react";

import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

import AppRouter from './AppRouter';

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url);
  
  useEffect(() => {
    fetchApiConfig();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url));
      })
  }

  return (
      <AppRouter />
  );
}

export default App
