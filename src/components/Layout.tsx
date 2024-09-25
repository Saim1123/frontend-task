import { ReactNode } from "react";
import Navbar from "./navbar";
import Progress from "./progress";

interface LayoutProps {
  children: ReactNode;
  progress: number;
  backStep: () => void;
}

const Layout = ({ children, progress, backStep }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar backStep={backStep} />
      <Progress progress={progress} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
