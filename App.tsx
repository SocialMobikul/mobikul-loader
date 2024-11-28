import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { MobikulLoader } from 'mobikul-loader';  // No more error

const App = () => {

  return (
    <SafeAreaView>
      <MobikulLoader title="Loading..." loading={true} />
    </SafeAreaView>
  );
};

export default App;