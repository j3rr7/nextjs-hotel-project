import {useState} from 'react';
import Navbar from './Navbar';
import Menu from './Menu';

export function DashboardWrapper({children, PageProp}) {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]" {...PageProp}>
      {children}
    </div>
  );
}

export default function Home({children}) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Navbar settingMenu={menu}/>
      <DashboardWrapper>
        <Menu settingMenu={menu} settingSetMenu={setMenu}/>
        {children}
      </DashboardWrapper>
    </>
  );
}
