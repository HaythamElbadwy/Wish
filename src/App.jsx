import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import ManagePlaylist from "./components/ManagePlaylist/ManagePlaylist";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";
import ActivateDevices from "./components/ActivateDevices/ActivateDevices";
import SwitchMac from "./components/SwitchMac/SwitchMac";
import ParentPin from "./components/ParentPin/ParentPin";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import AddPlayList from "./components/AddPlayList/AddPlayList";
import EditPlaylist from "./components/EditPlaylist/EditPlaylist"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagePlaylistRouting from "./components/ManagePlaylistRouting/ManagePlaylistRouting";
import TermsCondition from "./components/TermsCondition/TermsCondition.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import { ToastContainer} from 'react-toastify';


function App() {
  useEffect(() => {
    let dir = localStorage.getItem('lang') || 'en'
    dir = dir == 'en' ? 'ltr' : 'rtl'
    window.document.dir = dir;
    if(localStorage.getItem('lang') == 'English' || localStorage.getItem('lang') == 'Arabic'){
      localStorage.removeItem('lang')
    }
  }, [])


  const routes = createBrowserRouter([
    {
      path: "/Wish",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "manageplaylist",
          element: <ManagePlaylistRouting />,
          children: [
            { index: true, element: <ManagePlaylist /> },
            { path: "addplaylist", element: <AddPlayList /> },
            { path: "editplaylist/:id", element: <EditPlaylist /> },
            { path: "activatedevices", element: <ActivateDevices /> },
            { path: "switchmac", element: <SwitchMac /> },
            { path: "parentpin", element: <ParentPin /> },
            { path: "accountdetails", element: <AccountDetails /> },
          ],
        },
        { path: "termsCondition", element: <TermsCondition /> },
        { path: "privacyPolicy", element: <PrivacyPolicy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;

