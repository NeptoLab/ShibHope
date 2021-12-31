import { Box, HStack, Text } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import React, { useContext } from "react";

const TabContext = React.createContext({
  value: undefined as unknown,
  onChange: (value: unknown) => {}
});

const Tab: React.FC<IHStackProps & { value: unknown, onChange: (value: unknown) => void }> = ({ children, value, onChange, ...props }) => {
  return (
    <TabContext.Provider value={{ value, onChange }}>
      <HStack space={1} {...props}>{children}</HStack>
    </TabContext.Provider>
  );
};

const Item: React.FC<{ value: unknown }> = ({ children, value }) => {
  const { value: activeValue, onChange } = useContext(TabContext);

  const itemProps = {
    w: '100%',
    alignItems: 'center',
    fontWeight: 'bold',
    p: 4,
    bgColor: "#F7F8F9",
    _text: { color: '#A8A9AA' },
    ...activeValue === value && (
      {
        shadow: '3',
        _text: { color: '#262728' },
        bgColor: 'white',
        borderBottomColor: 'primary.500',
        borderBottomWidth: '4px'
      }
    )
  };

  return (
    <Text textAlign="center" flex={1} onPress={() => onChange(value)}>
      <Box {...itemProps}>
        {children}
      </Box>
    </Text>
  )
};

export default Object.assign(Tab, {
  Item
});
