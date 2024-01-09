// App.tsx

import React from 'react';
import Tabs from './AceTabs';
import Tab from './AceTab';

const App: React.FC = () => {
  return (
    <div>
      <h1>Reusable Tabs Example</h1>
      <Tabs>
        <Tab label="Tab 1">
          <p>Content for Tab 1</p>
        </Tab>
        <Tab label="Tab 2">
          <p>Content for Tab 2</p>
        </Tab>
        <Tab label="Tab 3">
          <p>Content for Tab 3</p>
        </Tab>
      </Tabs>

      <Tabs>
        <Tab label="Tab A">
          <p>Content for Tab A</p>
        </Tab>
        <Tab label="Tab B">
          <p>Content for Tab B</p>
        </Tab>
        <Tab label="Tab C">
          <p>Content for Tab C</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
