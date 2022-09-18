import { createContext, useEffect, useState } from "react";
import { AuthProvider } from "@arcana/auth";
import { getWalletInstance } from "./util/storageProvider";
import { StorageProvider } from '@arcana/storage/dist/standalone/storage.umd';
export const ArcanaContext = createContext();

const ArcanaContextProvider = ({ children }) => {
  const MakeNftPrivate=async()=>{
    const dAppStorageProvider = new StorageProvider({
      appId: ARCANA_APP_ID,
      provider: window.ethereum,
      email: user_email_string,
    });

const uploader = await dAppStorageProvider.getUploader();


  //save DID
  const did = await uploader.upload(file)
    //save metadataURL
    const metadataURL = await storage.makeMetadataURL(title, description, did, preview)
  }
  const [loggedIn_Arcana, setLoggedInArcana] = useState(false);
  const [provider, setProvider] = useState();
  const CheckLoggedInArcana = async () => {
    //const islogin=await provider.isLoggedIn();
    // await setLoggedInArcana(islogin)
  };

  const Authconnection = async () => {
    const auth = new AuthProvider("2248");

    try {
      const position = "right"; // values - 'left' or 'right'

      await auth.init({ appMode: 2, position });

      setLoggedInArcana(await auth.isLoggedIn());
    } catch (err) {
      throw err;
    } finally {
    }
  };

  useEffect(() => {
    Authconnection();
  }, []);

  return (
    <ArcanaContext.Provider value={{ loggedIn_Arcana, CheckLoggedInArcana }}>
      {children}
    </ArcanaContext.Provider>
  );
};

export default ArcanaContextProvider;
