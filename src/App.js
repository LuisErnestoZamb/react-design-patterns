import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

// const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '234');

function App() {
	return (
		<UserInfoWithLoader a={1} b="Hello" c={{ name: "Shan" }} />
	);
}

export default App;
