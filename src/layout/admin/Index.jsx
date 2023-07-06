import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import MainContent from "../../MainContent";
import Navbar from "../../component/navbar";

const HomePage = () => {
    return(
        <React.Fragment>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
                        <Navbar />
                    </main>
                    <MainContent />
                </div>
            </div>
            
        </React.Fragment>
    );
};

export default HomePage;