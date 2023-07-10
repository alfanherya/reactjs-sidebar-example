import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import MainContent from "../../MainContent";
import Navbar from "../../component/navbar";

const HomePage = () => {
    return(
        <React.Fragment>
            <div className="flex bg-lightPrimary dark:!bg-navy-900">
                <Sidebar />
                {/* <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
                    
                </main> */}
                <div className="flex-1 ml-4 h-screen relative duration-300 bg-lightPrimary dark:!bg-navy-900">
                <Navbar />
                    <MainContent />
                </div>
            </div>
            
        </React.Fragment>
    );
};

export default HomePage;