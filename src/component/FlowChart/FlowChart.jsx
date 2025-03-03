import "./FlowChart.css"; // Import the CSS file

const FlowChart = () => {
   return (
      <div className="flowchart">
         {/* Row 1 */ }
         <div className="flow-row">
            <div className="dot"></div> {/* Dot Outside */ }
            <div className="connector"></div> {/* Connecting Line */ }
            <div className="node">Search Engine Optimization</div>
            <div className="connector"></div>
            <div className="node">Pay-Per-Click (PPC) Advertising</div>
            <div className="connector"></div>
            <div className="node">Search Engine Optimization</div>
         </div>

         {/* Row 2 */ }
         <div className="flow-row">
            <div className="dot"></div> {/* Dot Outside */ }
            <div className="connector"></div> {/* Connecting Line */ }
            <div className="node">Social Media Marketing</div>
            <div className="connector"></div>
            <div className="node">Content Marketing</div>
            <div className="connector"></div>
            <div className="node">Email Marketing</div>
            <div className="connector"></div>
         </div>

         {/* Vertical Connector */ }
         <div className="vertical-connector"></div>
      </div>
   );
};

export default FlowChart;
