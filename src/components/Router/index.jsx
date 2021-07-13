import { Switch, Route } from 'react-router-dom';

import Search from '../../containers/Search';
import Results from '../../containers/Results';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path='/:titleId' component={Results} />
    </Switch>
  );
};

export default Router;
