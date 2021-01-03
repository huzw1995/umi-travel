import ErrorBoundary from '@/components/ErrorBoundary';
import MenuBar from '@/components/MenuBar'
import {useLocation} from 'umi'

function BasicLayout(props) {
  const location = useLocation()
  const path = ['/','/order','/user']
  return (
    <div>
      <MenuBar
        show={path.includes(location.pathname)}
        pathname={location.pathname}
      />
      <ErrorBoundary>
      {props.children}
      </ErrorBoundary>
    </div>
  );
}

export default BasicLayout;
