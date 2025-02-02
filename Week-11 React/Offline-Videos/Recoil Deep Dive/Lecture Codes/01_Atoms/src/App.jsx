import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import {
  netwrokAtom,
  jobsAtom,
  notificationsAtom,
  messagingAtom,
} from "./store/atom";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Wrapper />
      </div>
    </RecoilRoot>
  );
}

function Wrapper() {
  const networkAtomCount = useRecoilValue(netwrokAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  return (
    <>
      <button>Home</button>
      <button>
        My Network {networkAtomCount >= 100 ? "99+" : networkAtomCount}
      </button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {messagingAtomCount}</button>
      <button>Notifications {notificationAtomCount}</button>
      <UpdateButton />
    </>
  );
}

function UpdateButton() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);

  return (
    <button
      onClick={() => {
        setMessagingAtomCount((count) => count + 1);
      }}
    >
      Me
    </button>
  );
}

export default App;
