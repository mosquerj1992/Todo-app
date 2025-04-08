import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyFromApp } from './02-useEffect/MyFromApp.jsx'
import { FormAppMemo } from './03-useMemo/FormAppMemo.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  //    </StrictMode>,
    //  <MyFromApp />,
    // <FormAppMemo/>
)


