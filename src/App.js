import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';

const userIds = [1, 2, 3]

function App() {
  return (
    userIds.map(ids => (
      <UserLoader userId={ids}>
        <UserInfo />
      </UserLoader>
    ))
  );
}

export default App;
