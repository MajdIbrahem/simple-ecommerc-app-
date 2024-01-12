import {createContext,useState} from 'react';
export const SidebarContext=createContext()
const SidebarProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const HandelClose = () => {
    setIsOpen(false)
  }
  return <SidebarContext.Provider value={{isOpen,setIsOpen,HandelClose}}>{props.children}</SidebarContext.Provider>;
};

export default SidebarProvider;
