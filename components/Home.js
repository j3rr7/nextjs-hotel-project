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
  return (
    <>
      <Navbar/>
      <DashboardWrapper>
        <Menu/>
        {children}
      </DashboardWrapper>
    </>
  );
}
