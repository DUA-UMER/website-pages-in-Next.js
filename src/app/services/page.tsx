import Header from '@/components/header';
import Link from "next/link";
const services = () =>{
    return <div>
      <Header/>
      
      <h1>Hello This Is Services Page</h1>
      <Link href={"services/nested-page"}>
                <li>services/nested-page</li>
                </Link>
    </div>
    }; 
    export default services;