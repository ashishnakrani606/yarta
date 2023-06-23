import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts";
import Home from "pages/Home";
import EagleAI from "pages/EagleAI";
import Data from "pages/Data";
import DocuMindAI from "pages/DocuMindAI";
import GrainFarmer from "pages/GrainFarmer";
import LivestockFarmer from "pages/LivestockFarmer";
import HorticultureFarmer from "pages/HorticultureFarmer";
import Wool from "pages/Wool";
import Cotton from "pages/Cotton";
import Wine from "pages/Wine";
import Fisheries from "pages/Fisheries";
import Sugar from "pages/Sugar";
import Grains from "pages/Grains";
import LivestockUs from "pages/LivestockUs";
import HorticultureUs from "pages/HorticultureUs";
import EthanolUs from "pages/EthanolUs";
import DairyUs from "pages/DairyUs";
import VerraCarbon from "pages/VerraCarbon";
import Pricing from "pages/Pricing";
import HelpCenter from "pages/HelpCenter";
import MarketQuotesBoard from "pages/EthanolUs/MarketQuotesBoard";
import Chats from "pages/chats";
import Daily from "pages/Daily";
import Events from "pages/Events";
import Careers from "pages/Careers/Careers";
import Frontend from "components/position/Frontend";
import Fullstack from "components/position/Fullstack";
import QuantitativeResearcher from "components/position/QuantitativeResearche";
import About from "pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />     
      <Route
        path="/eagleAI"
        element={
          <Layout>
            <EagleAI />
          </Layout>
        }
      />
      <Route
        path="/data"
        element={
          <Layout>
            <Data />
          </Layout>
        }
      />
      <Route
        path="/docuMindAI"
        element={
          <Layout>
            <DocuMindAI />
          </Layout>
        }
      />
      <Route
        path="/grainfarmer"
        element={
          <Layout>
            <GrainFarmer />
          </Layout>
        }
      />
      <Route
        path="/livestockfarmer"
        element={
          <Layout>
            <LivestockFarmer />
          </Layout>
        }
      />
      <Route
        path="/horticulturefarmer"
        element={
          <Layout>
            <HorticultureFarmer />
          </Layout>
        }
      />
      <Route
        path="/wool"
        element={
          <Layout>
            <Wool />
          </Layout>
        }
      />
      <Route
        path="/cotton"
        element={
          <Layout>
            <Cotton />
          </Layout>
        }
      />

      <Route
        path="/fisheries"
        element={
          <Layout>
            <Fisheries />
          </Layout>
        }
      />
      <Route
        path="/sugar"
        element={
          <Layout>
            <Sugar />
          </Layout>
        }
      />
      <Route
        path="/wine"
        element={
          <Layout>
            <Wine />
          </Layout>
        }
      />
      <Route
        path="/grains"
        element={
          <Layout>
            <Grains />
          </Layout>
        }
      />
      <Route
        path="/livestockus"
        element={
          <Layout>
            <LivestockUs />
          </Layout>
        }
      />
       <Route
        path="/horticultureus"
        element={
          <Layout>
            <HorticultureUs />
          </Layout>
        }
      />
      <Route
        path="/ethanolus"
        element={
          <Layout>
            <EthanolUs />
          </Layout>
        }
      />
       <Route
        path="/dairyus"
        element={
          <Layout>
            <DairyUs />
          </Layout>
        }
      />
      <Route
        path="/verraCarbon"
        element={
          <Layout>
            <VerraCarbon />
          </Layout>
        }
      />
       <Route
        path="/pricing"
        element={
          <Layout>
            <Pricing />
          </Layout>
        }
      /> 
       <Route
        path="/help-center"
        element={
          <Layout>
            <HelpCenter index={1} />
          </Layout>
        }
      />    
      <Route
        path='/contact'
        element={
          <> 
            <Layout>
              <HelpCenter index={3}/>
            </Layout>
          </>
        }
      /> 
       <Route
        path='/market_quotes_board'
        element={
          <>     
            <Layout>
              <MarketQuotesBoard />
            </Layout>
          </>
        }
      />
      <Route
        path='/chat'
        element={
          <>           
            <Layout>
              <Chats />
            </Layout>
          </>
        }
      />
      <Route
        path='/daily_email'
        element={
          <>
            <Layout>
              <Daily />
            </Layout>
          </>
        }
      />
       <Route
        path='/events'
        element={
          <>  
            <Layout>
              <Events />
            </Layout>
          </>
        }
      />
      <Route
        path='/careers'
        element={
          <>            
            <Layout>
              <Careers />
            </Layout>
          </>
        }
      />
      <Route
        path='/careers/frontend'
        element={
          <Layout>          
            <Frontend />
          </Layout>
        }
      />
      <Route
        path='/careers/Fullstack'
        element={
          <Layout>          
            <Fullstack />
          </Layout>
        }
      />
      <Route
        path='/careers/Quantitative-Researcher'
        element={
          <Layout>           
            <QuantitativeResearcher />
          </Layout>
        }
      />
      <Route
        path='/about'
        element={
          <>           
            <Layout>
              <About />
            </Layout>
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
