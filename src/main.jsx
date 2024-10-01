import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProviders from "./providers/AuthProviders";

createRoot(document.getElementById('root')).render(
  <AuthProviders>
  <RouterProvider router={router} />
</AuthProviders>
)
