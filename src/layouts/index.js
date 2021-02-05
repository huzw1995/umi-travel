import { ErrorBoundary,MenuBar } from '@/components'
import { useLocation } from 'umi'
import { StoreProvider } from 'think-react-store'
import * as store from '../stores'

function BasicLayout(props) {
  const location = useLocation()
  const path = ['/','/order','/user']
  return (
    <StoreProvider store={store}>
      <MenuBar
        show={path.includes(location.pathname)}
        pathname={location.pathname}
      />
      <ErrorBoundary>
      {props.children}
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default BasicLayout;
