import SideNav from '@/app/dashboard/ui/sidenav';
import Footer from '../ui/footer';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col  ">
      <SideNav /> 
      <div className="flex-grow   ">{children}</div>
      <Footer/>
    </div>
  );
}