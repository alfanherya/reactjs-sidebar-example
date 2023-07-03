import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import MainContent from "../../MainContent";

const HomePage = () => {
    return(
        <React.Fragment>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <MainContent />
                </div>
            </div>
            
        </React.Fragment>
    );
};

export default HomePage;