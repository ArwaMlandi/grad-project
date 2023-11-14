
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// ** Axios Imports
import axios from 'axios'
export const getDataService = createAsyncThunk('services/getDataService', async params => {
    const response = await axios.get('https://mustafa-fares.nouh-agency.com/api/ar/service', params)
    return {
      params,
      data: response.data,
      totalPages: response.data.datatotal,
      loading: true
      
    }
  })