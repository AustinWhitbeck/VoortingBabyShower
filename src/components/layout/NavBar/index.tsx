import { TabList, Tabs, Tab} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

interface Props {
    children: JSX.Element;
}

interface TabInfo {
  text: string;
  route: string;
}

const NavBar = (props: Props) => {
    const { children } = props;

    const router = useRouter();
    const [currentRoute, setCurrentRoute] = useState<number>(0);

    const NavTabs: TabInfo[] = [
      { 
        text: 'Home',
        route: '/',
      },
      { 
        text: 'Registry',
        route: '/registry',
      },
      { 
        text: 'Location',
        route: '/location',
      },
    ]
    
  return (
 <>
 <Tabs background="primary.main">
    <TabList>
      <>
        {NavTabs.map((tab, index) => {
          const { text, route } = tab;
          return(
            <Tab key={index} 
              color={index === currentRoute ? "secondary.contrastText" : "secondary.light"} 
              onClick={async () => {
                void setCurrentRoute(index);
                await router.push(route)
                }
            }>
              {text}
            </Tab>
          );
        })}
      </>
    </TabList>
  </Tabs>
  <>
    {children}
  </>
  </>

  )
}

export default NavBar