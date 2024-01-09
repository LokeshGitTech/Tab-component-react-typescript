// Tabs.tsx

import React, { ReactNode, useState } from 'react';

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div >
      <div style={{borderBottom: "2px solid grey", justifyContent: "space-evenly", marginBottom: '10px', display: 'flex' }}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                onClick={() => handleTabClick(index)}
                style={{
                  marginRight: '10px',
                  padding: '5px 10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: `2px solid ${index === activeTab ? 'black' : 'transparent'}`,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {child.props.label}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div>{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default Tabs;
